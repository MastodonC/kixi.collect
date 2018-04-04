(ns kixi.collect.process-manager.collection-request.dynamodb
  (:require [com.stuartsierra.component :as component]
            [kixi.collect.dynamodb :as db]
            [kixi.collect.process-manager.collection-request :as pmcr]
            [kixi.collect.process-manager.collection-request-impl :as pmcr-i]
            [kixi.collect.process-manager :as pm]
            [clojure.spec.alpha :as s]
            [kixi.comms :as comms]
            [kixi.comms.time :as ct]
            [kixi.spec :as ks]
            [kixi.spec.conformers :as sc]
            [taoensso.timbre :as log]))

(ks/alias 'cr 'kixi.collect.request)
(ks/alias 'cc 'kixi.collect.campaign)

(defn primary-collection-request-process-manager-table-name
  [profile]
  (str profile "-kixi.collect-collection-request-process-manager"))

(defn batches-collection-request-process-manager-table-name
  [profile]
  (str profile "-kixi.collect-collection-request-process-manager-batches"))

(defn- coerce
  [state]
  (-> state
      (update :state-index long)
      (update :stream-index long)
      (update :start-index long)))

(defrecord DynamoDbCollectionRequestProcessManager
    [communications profile endpoint directory
     client]
  pm/IProcessManagerCollectionRequestBackend
  (get-batch [this campaign-id]
    (db/query client (batches-collection-request-process-manager-table-name profile)
              {::cc/id campaign-id}
              nil))
  component/Lifecycle
  (start [component]
    (log/info "Starting Collection Request DynamoDb Process Manager")
    (if-not client
      (let [client (assoc (select-keys component db/client-kws)
                          :profile profile)
            joplin-conf
            {:migrators {:migrator "joplin/kixi/collect/process_manager/migrators/dynamodb"}
             :databases {:dynamodb
                         (merge
                          {:type :dynamo
                           :migration-table (str (name profile) "-kixi.collect-collection-request-process-manager.migrations")}
                          client)}
             :environments {:env [{:db :dynamodb :migrator :migrator}]}}
            cmp (assoc component :client client)]
        (db/migrate :env joplin-conf)
        ;;
        (pmcr-i/register-event-handlers! communications cmp)
        ;;
        cmp)
      component))
  (stop [component]
    (log/info "Stopping Collection Request DynamoDb Process Manager")
    component)
  pm/IProcessManagerBackend
  (get-state [this event]
    (let [id (or (pmcr-i/get-db-id event))
          r (not-empty (db/query client
                                 (primary-collection-request-process-manager-table-name profile)
                                 {::pmcr/id id}
                                 nil))]
      (when r
        (-> r
            (first)
            (coerce)))))
  (save-state! [this old-state new-state event new-id]
    ;; write new
    (let [table (primary-collection-request-process-manager-table-name profile)
          batches-table (batches-collection-request-process-manager-table-name profile)]
      (let [cid (get-in new-state [:value ::cc/id])
            t (ct/timestamp)
            new-item (assoc new-state
                            ::pmcr/id new-id
                            ::pmcr/created-at t)]
        (db/put-item client table new-item)
        (db/put-item client batches-table {::cc/id cid
                                           ::pmcr/id new-id
                                           ::pmcr/created-at t
                                           ::cr/ids (get-in new-state [:value ::cr/ids])
                                           ::cr/id (get-in new-state [:value ::cr/id])
                                           ::pmcr/action (get-in new-state [:value ::pmcr/action])}))))
  (clean-up! [this event]
    (let [table (primary-collection-request-process-manager-table-name profile)
          batches-table (batches-collection-request-process-manager-table-name profile)
          cc-id (-> event ::cc/id)
          batch-results (pm/get-batch this cc-id)]
      (run! (fn [r]
              (db/delete-item client table (select-keys r [::pmcr/id]))
              (db/delete-item client batches-table (select-keys r [::pmcr/id ::cc/id])))
            batch-results))))
