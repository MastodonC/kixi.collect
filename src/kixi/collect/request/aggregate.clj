(ns kixi.collect.request.aggregate
  (:require [clojure.spec.alpha :as s]
            [kixi.spec :refer [alias]]
            [kixi.spec.conformers :as sc]
            [kixi.comms.time :as t]
            [kixi.spec :refer [event-dispatch command-dispatch]]
            [kixi.collect.datastore :as datastore]
            [kixi.collect.aggregate :as agr]
            [kixi.collect.request.spec]))

(alias 'event 'kixi.event)
(alias 'command 'kixi.command)
(alias 'cr 'kixi.collect.request)
(alias 'cc 'kixi.collect.campaign)
(alias 'c-reject 'kixi.collect.request.reject)
(alias 'ms 'kixi.datastore.metadatastore)

(defn uuid
  []
  (str (java.util.UUID/randomUUID)))

(defn sequential-if-not
  [v]
  (if (sequential? v)
    v
    (vector v)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;

(defprotocol ICollectionRequestAggregate
  (get-by-id [this id]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; CMDS

(defn reject-request
  ([reason id]
   (reject-request reason id nil))
  ([reason id message]
   [(merge {::event/type :kixi.collect/collection-request-rejected
            ::event/version "1.0.0"
            ::c-reject/reason reason}
           (when id
             {::ms/id id})
           (when message
             {::c-reject/message message}))
    {:partition-key (or id (uuid))}]))

(defn create-request
  [{:keys [kixi/user ::cr/groups ::cr/message ::ms/id]}]
  [{::event/type :kixi.collect/collection-requested
    ::event/version "1.0.0"
    ::ms/id id
    ::cc/id (uuid)
    ::cr/message message
    ::cr/group-collection-requests (zipmap groups (repeatedly uuid))
    ::cr/sender user}
   {:partition-key id}])

(defn rejected-event?
  [event]
  (= [:kixi.collect/collection-request-rejected "1.0.0"]
     (event-dispatch event)))

(s/fdef create-request-collection-handler-inner
        :args (s/cat :dir (s/keys)
                     :label-bundle (s/or :nil-bundle nil?
                                         :bundle ::ms/file-metadata)
                     :label-command (s/and :kixi/command
                                           #(= [:kixi.collect/request-collection "1.0.0"]
                                               (command-dispatch %))))
        :fn (fn [{{:keys [label-command label-bundle]} :args
                  {:keys [event options]} :ret}]
              (let [{:keys [kixi/user] :as command} label-command
                    [_ bundle] label-bundle]
                (if (::ms/id command)
                  (and (= (::ms/id command)
                          (::ms/id event)
                          (:partition-key options))
                       (if (not bundle) (= :unauthorised (::c-reject/reason event))
                           (cond (not (datastore/has-activity? bundle user ::ms/meta-update))
                                 (= :unauthorised (::c-reject/reason event))

                                 (not (datastore/bundle? bundle))
                                 (= :incorrect-type (::c-reject/reason event))

                                 :else
                                 (= :kixi.collect/collection-requested (::event/type event)))))
                  (and (rejected-event? event)
                       (= :invalid-cmd (::c-reject/reason event))))))
        :ret (s/cat :event ::event/payload
                    :options (s/keys :req-un [:kixi.comms/partition-key])))

(defn create-request-collection-handler-inner
  [directory bundle cmd]
  (let [{:keys [kixi/user ::cr/groups ::cr/message ::ms/id]} cmd]
    (cond
      (not bundle)
      (reject-request :unauthorised id)

      (not (datastore/has-activity? bundle user ::ms/meta-update))
      (reject-request :unauthorised id "meta-update is required")

      (not (datastore/bundle? bundle))
      (reject-request :incorrect-type id)

      :else
      (create-request cmd))))

(s/fdef check-valid-command
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

(defn check-valid-command
  [{:keys [::ms/id] :as cmd}]
  (when-not (s/valid? :kixi/command cmd)
    (reject-request :invalid-cmd id (with-out-str (s/explain :kixi/command cmd)))))

(defn create-request-collection-handler
  [directory]
  (fn [{:keys [kixi/user ::ms/id] :as cmd}]
    (or (check-valid-command cmd)
        (create-request-collection-handler-inner directory (datastore/get-metadata user directory id) cmd))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; EVENTS

(defmulti process-event
  (fn [_ e] (event-dispatch e)))

(defmethod process-event
  [:kixi.collect/collection-requested "1.0.0"]
  [_ {:keys [::cr/sender
             ::cr/group-collection-requests] :as event}]
  (map (fn [[g-id cr-id]]
         {::cc/id (::cc/id event)
          ::cr/id cr-id
          ::cr/created-at (or (:kixi.event/created-at event) (t/timestamp))
          ::cr/requester-id (:kixi.user/id sender)
          ::cr/responder-id g-id
          ::cr/response-ids #{}'
          ::ms/id (::ms/id event)})
       group-collection-requests))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn aggregate-event-handler
  [handle-event-fn]
  (agr/aggregate-event-handler handle-event-fn process-event))
