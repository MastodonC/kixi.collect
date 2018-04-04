(ns kixi.collect.request.aggregate.dynamodb
  (:require [com.stuartsierra.component :as component]
            [kixi.collect.dynamodb :as db]
            [kixi.spec :refer [event-dispatch]]
            [kixi.collect.request.aggregate :as agrr]
            [kixi.collect.aggregate :as agr]
            [clojure.spec.alpha :as s]
            [kixi.comms :as comms]
            [kixi.spec.conformers :as sc]
            [taoensso.timbre :as log]
            [kixi.spec :refer [alias]]))

(alias 'cr 'kixi.collect.request)
(alias 'ms 'kixi.datastore.metadatastore)
(alias 'event 'kixi.event)

(def requests-by-campaign-id-index-name
  "requests-by-campaign-id-index")

(defn primary-collection-request-table
  [profile]
  (str profile "-kixi.collect-requests"))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti handle-event
  (fn [_ e] (event-dispatch e)))

(defmethod handle-event
  [:kixi.collect/collection-requested "1.0.0"]
  [{:keys [client table]} _]
  (reify
    agr/IAggregateEventDataHandler
    (get [this event])
    (put! [this event output]
      (run! (partial db/put-item client table) output))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defrecord DynamoDbAggregate
    [communications profile endpoint directory
     client]
  component/Lifecycle
  (start [component]
    (log/info "Starting Collection Request DynamoDb Aggregate")
    (if-not client
      (let [client (assoc (select-keys component db/client-kws)
                          :profile profile)
            joplin-conf
            {:migrators {:migrator "joplin/kixi/collect/request/migrators/dynamodb"}
             :databases {:dynamodb
                         (merge
                          {:type :dynamo
                           :migration-table (str (name profile) "-kixi.collect-requests.migrations")}
                          client)}
             :environments {:env [{:db :dynamodb :migrator :migrator}]}}
            event-handler-opts {:client client :table (primary-collection-request-table profile)}]
        (db/migrate :env joplin-conf)
        ;;
        (comms/attach-validating-command-handler!
         communications
         :kixi.collect/request-aggregate-request-collection-handler
         :kixi.collect/request-collection
         "1.0.0"
         (agrr/create-request-collection-handler directory))
        ;;
        (comms/attach-validating-event-handler!
         communications
         :kixi.collect/request-aggregate-collection-requested-handler
         :kixi.collect/collection-requested
         "1.0.0"
         (agrr/aggregate-event-handler (partial handle-event event-handler-opts)))
        (assoc component :client client))
      component))
  (stop [component]
    (log/info "Stopping Collection Request DynamoDb Aggregate")
    component)
  agrr/ICollectionRequestAggregate
  (get-by-id [this id]
    (when-let [r (db/get-item {:endpoint endpoint} (primary-collection-request-table profile) ::cr/id id)]
      (update r ::cr/response-ids set))))
