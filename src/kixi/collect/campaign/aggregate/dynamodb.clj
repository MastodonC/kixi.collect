(ns kixi.collect.campaign.aggregate.dynamodb
  (:require [com.stuartsierra.component :as component]
            [kixi.collect.dynamodb :as db]
            [kixi.collect.campaign.aggregate :as agrc]
            [kixi.collect.aggregate :as agr]
            [kixi.collect.definitions :refer [event-type-version-pair]]
            [clojure.spec.alpha :as s]
            [kixi.comms :as comms]
            [kixi.spec.conformers :as sc]
            [taoensso.timbre :as log]
            [kixi.spec :refer [alias]]))

(alias 'cc 'kixi.collect.campaign)
(alias 'event 'kixi.event)

(defn primary-campaign-table
  [profile]
  (str profile "-kixi.collect-campaigns"))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti handle-event
  (fn [_ e] (event-type-version-pair e)))

(defmethod handle-event
  [:kixi.collect/collection-requested "1.0.0"]
  [{:keys [client table]} _]
  (reify
    agr/IAggregateEventDataHandler
    (get [this event])
    (put! [this event output]
      (db/put-item client table output))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defrecord DynamoDbAggregate
    [communications profile endpoint directory
     client]
  component/Lifecycle
  (start [component]
    (log/info "Starting Campaign DynamoDb Aggregate")
    (if-not client
      (let [client (assoc (select-keys component db/client-kws)
                          :profile profile)
            joplin-conf
            {:migrators {:migrator "joplin/kixi/collect/campaign/migrators/dynamodb"}
             :databases {:dynamodb
                         (merge
                          {:type :dynamo
                           :migration-table (str (name profile) "-kixi.collect-campaigns.migrations")}
                          client)}
             :environments {:env [{:db :dynamodb :migrator :migrator}]}}
            event-handler-opts {:client client :table (primary-campaign-table profile)}]
        (db/migrate :env joplin-conf)
        ;;
        (comms/attach-validating-event-handler!
         communications
         :kixi.collect/collection-requested-handler
         :kixi.collect/collection-requested
         "1.0.0"
         (agrc/aggregate-event-handler (partial handle-event event-handler-opts)))
        (assoc component :client client)))
    component)
  (stop [component]
    (log/info "Stopping Campaign DynamoDb Aggregate")
    component)
  agrc/ICampaignAggregate
  (get-by-id [this id]
    (db/get-item {:endpoint endpoint} (primary-campaign-table profile) ::cc/id id)))
