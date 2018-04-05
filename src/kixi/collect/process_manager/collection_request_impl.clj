(ns kixi.collect.process-manager.collection-request-impl
  (:require [clojure.spec.alpha :as s]
            [kixi.collect.encode :as encode]
            [kixi.collect.process-manager :as pm]
            [kixi.collect.process-manager.collection-request.spec]
            [kixi.comms :as c]
            [kixi.mailer :as m]
            [kixi.mailer.reject :as mr]
            [kixi.spec :as ks]
            [kixi.spec.conformers :as sc]
            [taoensso.timbre :as log]
            [medley.core :refer [map-vals]]
            [automat.core :as a]
            [automat.fsm :as fsm]
            [automat.viz :refer [view]]
            [clostache.parser :as mustache]))

(ks/alias 'cr 'kixi.collect.request)
(ks/alias 'cc 'kixi.collect.campaign)
(ks/alias 'ms 'kixi.datastore.metadatastore)
(ks/alias 'pmcr 'kixi.collect.process-manager.collection-request)

(defn uuid
  []
  (str (java.util.UUID/randomUUID)))

(def state-machine-end-actions
  #{:complete :fail})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;

;; https://github.com/MastodonC/kixi.mailer/blob/master/src/kixi/mailer/ses.clj#L60
(defmethod c/command-payload
  [:kixi.mailer/send-group-mail "1.0.0"]
  [_]
  (s/keys :req [::m/destination
                ::m/message]
          :opt [::m/source]))

;; https://github.com/MastodonC/kixi.mailer/blob/master/src/kixi/mailer/ses.clj#L68

(defmethod c/event-payload
  [:kixi.mailer/group-mail-accepted "1.0.0"]
  [_]
  (s/keys :req [::m/destination]
          :opt [::m/source]))

;; https://github.com/MastodonC/kixi.datastore/blob/master/src/kixi/datastore/metadatastore/commands.clj#L32
;;
(s/def ::ms/sharing-update #{::ms/sharing-conj ::ms/sharing-disj})
(s/def ::ms/sharing-change-payload (s/keys :req [::ms/id ::ms/sharing-update :kixi.group/id ::ms/activity]))

(defmethod c/command-payload
  [:kixi.datastore/sharing-change "2.0.0"]
  [_]
  ::ms/sharing-change-payload)

(ks/alias 'sharing-reject 'kixi.event.metadata.sharing-change.rejection)

(s/def ::sharing-reject/reason
  #{:unauthorised
    :invalid-cmd})

(s/def ::sharing-reject/explain string?)
(s/def ::sharing-reject/original sc/anything-small)

(defmethod c/event-payload
  [:kixi.datastore/sharing-change-rejected "2.0.0"]
  [_]
  (s/keys :req [::sharing-reject/reason]
          :opt [::sharing-reject/explain
                ::sharing-reject/original
                ::ms/id]))

;; https://github.com/MastodonC/kixi.mailer/blob/master/src/kixi/mailer/ses.clj#L74
(defmethod c/event-payload
  [:kixi.mailer/group-mail-rejected "1.0.0"]
  [_]
  (s/keys :req [::mr/destination
                ::mr/reason]
          :opt [::mr/source
                ::mr/explain]))

;;

(defmethod c/event-payload
  [:kixi.datastore/sharing-changed "1.0.0"]
  [_]
  ::ms/sharing-change-payload)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Events -> Commands

(defmethod c/event-type->command-types
  [:kixi.collect/collection-requested "1.0.0"]
  [_]
  #{[:kixi.datastore/sharing-change "2.0.0"]})

(defmethod c/event-type->command-types
  [:kixi.datastore/sharing-changed "1.0.0"]
  [_]
  #{[:kixi.mailer/send-group-mail "1.0.0"]})

(defmethod c/event-type->command-types
  [:kixi.datastore/sharing-change-rejected "2.0.0"]
  [_]
  #{[:kixi.collect.process-manager.collection-request/complete-process "1.0.0"]})

(defmethod c/event-type->command-types
  [:kixi.mailer/group-mail-accepted "1.0.0"]
  [_]
  #{[:kixi.collect.process-manager.collection-request/complete-process "1.0.0"]})

(defmethod c/event-type->command-types
  [:kixi.mailer/group-mail-rejected "1.0.0"]
  [_]
  #{[:kixi.collect.process-manager.collection-request/complete-process "1.0.0"]})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;

(defn get-db-id
  [m]
  (or (get m :kixi.command/id)
      (get m ::pmcr/id)))

(defn resolve-sender
  [sender]
  "Foo bar")

(defn generate-url
  [{:keys [::cr/submit-route] :as state}]
  (str submit-route "&" (-> state
                            (select-keys [::cr/receiving-groups ::ms/id ::cc/id ::cr/id])
                            (encode/transit-encode)
                            (encode/base64-encode))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Create Commands

(defn create-update-sharing-permission-command
  [state {:keys [::ms/id ::cr/group-collection-requests]} _]
  [{:kixi.command/type :kixi.datastore/sharing-change
    :kixi.command/version "2.0.0"
    ::ms/id id
    ::ms/sharing-update ::ms/sharing-conj
    ::ms/activity ::ms/bundle-add
    :kixi.group/id (first (first group-collection-requests))}
   {:partition-key id}])

(defn create-send-group-email-command
  [{{:keys [::cr/message ::cr/sender] :as state} :value} {:keys [:kixi.group/id]} _]
  (let [opts {:message message
              :sender (resolve-sender sender)
              :url (generate-url state)}
        body-html (mustache/render-resource "emails/collection-request.html" opts)
        body-txt (mustache/render-resource "emails/collection-request.txt" opts)
        subject "Witan For Cities - You've been asked to contribute to a Datapack!"]
    [{:kixi.command/type :kixi.mailer/send-group-mail
      :kixi.command/version "1.0.0"
      :kixi.mailer/source "witan@mastodonc.com"
      :kixi.mailer/destination {:kixi.mailer.destination/to-groups #{id}}
      :kixi.mailer/message {:kixi.mailer.message/subject subject
                            :kixi.mailer.message/body
                            {:kixi.mailer.message/text body-txt
                             :kixi.mailer.message/html body-html}}}
     {:partition-key id}]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn contains-any?
  [coll ks]
  (not-empty (clojure.set/intersection coll ks)))

(s/fdef batch-complete?
        :args (s/cat :end-actions state-machine-end-actions
                     :orig-batch-results (s/coll-of ::pmcr/batch :distinct true))
        :ret boolean?)

(defn batch-complete?
  [end-actions orig-batch-results]
  (let [requests-in-batch (some ::cr/ids orig-batch-results)
        grpd-batch-results (group-by ::cr/id orig-batch-results)
        batch-results (->> grpd-batch-results
                           (vals)
                           (map #(set (map (comp keyword ::pmcr/action) %))))]
    (and
     (pos? (count batch-results))
     (pos? (count requests-in-batch))
     (= (set (keys grpd-batch-results)) (set requests-in-batch))
     (every? #(contains-any? % end-actions) batch-results))))

(defn complete-process
  [last-action end-actions state event backend]
  (let [cid (get-in state [:value ::cc/id])
        cr-id (get-in state [:value ::cr/id])
        brs (pm/get-batch backend cid)
        batch-rows (conj brs (assoc (some #(when (= cr-id (::cr/id %)) %) brs)
                                    ::pmcr/action (name last-action)))]
    (when (batch-complete? end-actions batch-rows)
      (log/info (str "Collection Request process was completed (campaign " cid ")"))
      [(merge {:kixi.command/type :kixi.collect.process-manager.collection-request/complete-process
               :kixi.command/version "1.0.0"}
              (select-keys (:value state) [::cc/id]))
       {:partition-key cid}])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; State Machine

(def state-machine
  [[{:kixi.event/type :kixi.collect/collection-requested}            (a/$ :update-sharing-permission)]
   (a/or [{:kixi.event/type :kixi.datastore/sharing-changed}         (a/$ :send-group-email)]
         [{:kixi.event/type :kixi.datastore/sharing-change-rejected} (a/$ :fail)])
   (a/or [{:kixi.event/type :kixi.mailer/group-mail-accepted}        (a/$ :complete)]
         [{:kixi.event/type :kixi.mailer/group-mail-rejected}        (a/$ :fail)])])

(def action-value->command-fn
  {:update-sharing-permission create-update-sharing-permission-command
   :send-group-email create-send-group-email-command
   :complete (partial complete-process :complete state-machine-end-actions)
   :fail (partial complete-process :fail state-machine-end-actions)})

(def action-reducers
  (reduce (fn [a v] (assoc a v (fn [a' _] (assoc a' ::pmcr/action v))))
          {} (keys action-value->command-fn)))

(s/fdef extract-command-event-signal
        :args :kixi/event
        :ret (s/keys :req [:kixi.event/type]))

;; https://github.com/MastodonC/witan.ui/blob/master/src/cljs/witan/ui/activities.cljs#L92
(defn extract-event-signal
  [m]
  (cond
    ;; new events
    (contains? m :kixi.event/type)
    (select-keys m [:kixi.event/type])

    ;; events with `file-metadata-update-type` in the payload
    (and (contains? m :kixi.comms.event/key)
         (contains? m :kixi.comms.event/payload)
         (contains? (:kixi.comms.event/payload m) :kixi.datastore.communication-specs/file-metadata-update-type))
    (merge (select-keys m [:kixi.comms.event/key])
           {:kixi.comms.event/payload (select-keys (:kixi.comms.event/payload m) [:kixi.datastore.communication-specs/file-metadata-update-type])})

    ;; events
    (contains? m :kixi.comms.event/key)
    (select-keys m [:kixi.comms.event/key])))

(def compiled-state-machine
  (a/compile state-machine {:signal extract-event-signal :reducers action-reducers}))

(defn add-id-to-cmd
  [cmd id]
  (if (:kixi.command/id (first cmd))
    cmd
    (update cmd 0 assoc :kixi.command/id id)))

(defn advance-state-machine!
  ([backend event]
   (advance-state-machine! backend event nil))
  ([backend event start-state]
   (let [old-state (pm/get-state backend event)]
     (when (or old-state start-state)
       (let [{:keys [value] :as new-state} (a/advance compiled-state-machine (or old-state start-state) event)
             new-cmd-id (uuid)
             action-value (::pmcr/action value)
             action-fn (get action-value->command-fn action-value)
             action-result-cmd (when action-fn
                                 (add-id-to-cmd
                                  (action-fn new-state event backend) new-cmd-id))]
         (pm/save-state! backend
                         old-state
                         new-state
                         event
                         new-cmd-id)
         action-result-cmd)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn start-collection-requests!
  [backend]
  (fn [{:keys [::cr/group-collection-requests] :as event}]
    (let [start-state
          (merge {::cr/ids (vec (vals group-collection-requests))}
                 (select-keys event [::cc/id
                                     ::cr/message
                                     ::cr/submit-route
                                     ::cr/sender
                                     ::ms/id
                                     ::cr/receiving-groups]))]
      ;; NOTE don't include ::cr/group-collection-requests in state because it upsets dynamo layer
      ;; and it's easy to reconstruct later
      (mapv (fn [[group-id collection-request-id]]
              (advance-state-machine!
               backend
               (assoc event ::cr/group-collection-requests {group-id collection-request-id})
               (assoc start-state
                      ::cr/id collection-request-id
                      :kixi.group/id group-id)))
            group-collection-requests))))

(defn handle-complete-process-command
  [end-actions backend command]
  (let [cid (::cc/id command)
        batch-rows (pm/get-batch backend cid)]
    (if (batch-complete? end-actions batch-rows)
      (let [state (pm/get-state backend (first batch-rows))
            grpd-crs (->> batch-rows
                          (group-by ::cr/id))
            cr->actions (map-vals #(set (map (comp keyword ::pmcr/action) %)) grpd-crs)
            cr->groups (map-vals (comp :kixi.group/id
                                       :value
                                       (partial pm/get-state backend)
                                       last) grpd-crs)
            groups->cr (zipmap (vals cr->groups) (keys cr->groups))]
        [(merge {:kixi.event/type :kixi.collect.process-manager.collection-request/process-completed
                 :kixi.event/version "1.0.0"}
                (select-keys (:value state) [::cc/id
                                             ::cr/message
                                             ::cr/sender
                                             ::cr/submit-route
                                             ::cr/receiving-groups
                                             ::ms/id])
                {::cr/group-collection-requests groups->cr
                 ::pmcr/results cr->actions})
         {:partition-key cid}])
      (do
        (log/error "A Collection Request process tried to complete but failed: " cid)
        [(merge {:kixi.event/type :kixi.collect.process-manager.collection-request/complete-process-rejected
                 :kixi.event/version "1.0.0"}
                (select-keys command [::cc/id]))
         {:partition-key cid}]))))

(defn handle-process-completed-event
  [backend event]
  (log/info "Cleaning up batch" (::cc/id event))
  (pm/clean-up! backend event))

(defn register-event-handlers!
  [communications backend]
  (c/attach-validating-command-handler!
   communications
   :kixi.collect/collection-request-process-manager-complete-process-command
   :kixi.collect.process-manager.collection-request/complete-process
   "1.0.0"
   (partial handle-complete-process-command state-machine-end-actions backend))
  ;;;;
  (c/attach-validating-event-handler!
   communications
   :kixi.collect/collection-request-process-manager-collection-request-event
   :kixi.collect/collection-requested
   "1.0.0"
   (start-collection-requests! backend))
  (c/attach-validating-event-handler!
   communications
   :kixi.collect/collection-request-process-manager-sharing-changed-event
   :kixi.datastore/sharing-changed
   "1.0.0"
   (partial advance-state-machine! backend))
  (c/attach-validating-event-handler!
   communications
   :kixi.collect/collection-request-process-manager-sharing-change-rejected-event
   :kixi.datastore/sharing-change-rejected
   "2.0.0"
   (partial advance-state-machine! backend))
  (c/attach-validating-event-handler!
   communications
   :kixi.collect/collection-request-process-manager-group-mail-accepted-event
   :kixi.mailer/group-mail-accepted
   "1.0.0"
   (partial advance-state-machine! backend))
  (c/attach-validating-event-handler!
   communications
   :kixi.collect/collection-request-process-manager-group-mail-rejected-event
   :kixi.mailer/group-mail-rejected
   "1.0.0"
   (partial advance-state-machine! backend))
  ;;
  (c/attach-validating-event-handler!
   communications
   :kixi.collect/collection-request-process-manager-process-completed
   :kixi.collect.process-manager.collection-request/process-completed
   "1.0.0"
   (partial handle-process-completed-event backend)))
