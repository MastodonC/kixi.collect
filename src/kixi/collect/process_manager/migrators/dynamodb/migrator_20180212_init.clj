(ns kixi.collect.process_manager.migrators.dynamodb.migrator-20180212-init
  (:require [kixi.collect.system :refer [config]]
            [kixi.collect.application :refer [profile config-location]]
            [kixi.collect.process-manager.collection-request.dynamodb :as crdb]
            [kixi.collect.dynamodb :as db]
            [kixi.collect.cloudwatch :refer [table-dynamo-alarms]]
            [kixi.spec :as ks]
            [taoensso.faraday :as far]
            [taoensso.timbre :as log]))

(ks/alias 'pmcr 'kixi.collect.process-manager.collection-request)
(ks/alias 'cc 'kixi.collect.campaign)

(def primary-write-provision 10)
(def primary-read-provision 10)
(def batches-write-provision 10)
(def batches-read-provision 10)

(defn get-db-config
  [db]
  (select-keys db [:endpoint]))

(defn get-alerts-config
  [profile]
  (:alerts (config @config-location profile)))

(defn up
  [db]
  (let [profile (name @profile)
        conn (get-db-config db)
        alert-conf (get-alerts-config profile)]
    (far/create-table conn
                      (crdb/primary-collection-request-process-manager-table-name profile)
                      [(db/dynamo-col ::pmcr/id) :s]
                      {:throughput {:read primary-read-provision
                                    :write primary-write-provision}
                       :block? true})
    (far/create-table conn
                      (crdb/batches-collection-request-process-manager-table-name profile)
                      [(db/dynamo-col ::cc/id) :s]
                      {:range-keydef [(db/dynamo-col ::pmcr/id) :s]
                       :throughput {:read batches-read-provision
                                    :write batches-write-provision}
                       :block? true})

    (when (:alerts? alert-conf)
      (try
        (table-dynamo-alarms (crdb/primary-collection-request-process-manager-table-name profile)
                             (assoc alert-conf
                                    :read-provision primary-read-provision
                                    :write-provision primary-write-provision))
        (table-dynamo-alarms (crdb/batches-collection-request-process-manager-table-name profile)
                             (assoc alert-conf
                                    :read-provision batches-read-provision
                                    :write-provision batches-write-provision))
        (catch Exception e
          (log/error e "Failed to create cloudwatch alarm"))))))

(defn down
  [db]
  (let [profile (name @profile)
        conn (get-db-config db)]
    (far/delete-table conn (crdb/primary-collection-request-process-manager-table-name profile))
    (far/delete-table conn (crdb/batches-collection-request-process-manager-table-name profile))))
