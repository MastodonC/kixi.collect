(ns kixi.collect.command-handler
  (:require [clojure.spec.alpha :as s]
            [kixi.collect.commands]
            [kixi.collect.events]
            [kixi.spec :refer [alias]]
            [kixi.collect.datastore :as datastore]))

(alias 'event 'kixi.event)
(alias 'command 'kixi.command)
(alias 'c 'kixi.collect)
(alias 'c-reject 'kixi.event.collect.rejection)
(alias 'ms 'kixi.datastore.metadatastore)

(defn uuid
  []
  (str (java.util.UUID/randomUUID)))

(defn reject-collection-request
  ([reason id]
   (reject-collection-request reason id nil))
  ([reason id message]
   [(merge {::event/type :kixi.collect/collection-request-rejected
            ::event/version "1.0.0"
            ::c-reject/reason reason}
           (when id
             {::ms/id id})
           (when message
             {::c-reject/message message}))
    {:partition-key (or id (uuid))}]))

(defn create-collection-request
  [{:keys [kixi/user ::c/groups ::c/message ::ms/id]}]
  [{::event/type :kixi.collect/collection-requested
    ::event/version "1.0.0"
    ::ms/id id
    ::c/message message
    ::c/groups groups
    ::c/sender user}
   {:partition-key id}])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn rejected-event?
  [event]
  (= [:kixi.collect/collection-request-rejected "1.0.0"]
     ((juxt ::event/type ::event/version) event)))

(s/fdef create-request-collection-handler-inner
        :args (s/cat :dir (s/keys)
                     :label-bundle (s/or :nil-bundle nil?
                                         :bundle ::ms/file-metadata)
                     :label-command (s/or :invalid-cmd :kixi/command
                                          :valid-cmd (s/and :kixi/command
                                                            #(= [:kixi.collect/request-collection "1.0.0"]
                                                                ((juxt ::command/type ::command/version) %)))))
        :fn (fn [{{:keys [label-command label-bundle]} :args
                  {:keys [event options]} :ret}]
              (let [[_ command] label-command
                    [_ bundle] label-bundle]
                (if (::ms/id command)
                  (and (= (::ms/id command)
                          (::ms/id event)
                          (:partition-key options))
                       (if (not bundle) (= :unauthorised (::c-reject/reason event))
                           (if (not (datastore/bundle? bundle))
                             (= :incorrect-type (::c-reject/reason event))
                             (= :kixi.collect/collection-requested (::event/type event)))))
                  (and (rejected-event? event)
                       (= :invalid-cmd (::c-reject/reason event))))))
        :ret (s/cat :event ::event/payload
                    :options (s/keys :req-un [:kixi.comms/partition-key])))

(defn create-request-collection-handler-inner
  [directory bundle cmd]
  (let [{:keys [kixi/user ::c/groups ::c/message ::ms/id]} cmd]
    (cond
      (not bundle)
      (reject-collection-request :unauthorised id)

      (not (datastore/bundle? bundle))
      (reject-collection-request :incorrect-type id)

      :else
      (create-collection-request cmd))))

(s/fdef valid-command?
        :args (s/cat :command (s/or :invalid-cmd (s/keys)
                                    :valid-cmd :kixi/command))
        :fn (fn [{{:keys [command]} :args
                  {:keys [reject-event]} :ret}]
              (let [[command-type cmd] command]
                (if (= :valid-cmd command-type)
                  (nil? reject-event)
                  true)))
        :ret (s/or :reject-event (s/cat :event (s/and ::event/payload
                                                      rejected-event?)
                                        :options (s/keys :req-un [:kixi.comms/partition-key]))
                   :nil nil?))

(defn valid-command?
  [{:keys [::ms/id] :as cmd}]
  (when-not (s/valid? :kixi/command cmd)
    (reject-collection-request :invalid-cmd id (with-out-str (s/explain :kixi/command cmd)))))

(defn create-request-collection-handler
  [directory]
  (fn [{:keys [kixi/user ::ms/id] :as cmd}]
    (if-let [v (valid-command? cmd)]
      v
      (create-request-collection-handler-inner directory (datastore/get-metadata user directory id) cmd))))
