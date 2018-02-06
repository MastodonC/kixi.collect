(ns kixi.collect.request.migrators.dynamodb.migrator-20180207-init
  (:require [kixi.collect.system :refer [config]]
            [kixi.collect.application :refer [profile config-location]]
            [kixi.collect.request.aggregate.dynamodb :as adb]
            [kixi.collect.dynamodb :as db]
            [kixi.collect.cloudwatch :refer [table-dynamo-alarms]]
            [kixi.spec :refer [alias]]
            [taoensso.faraday :as far]
            [taoensso.timbre :as log]))

(alias 'cr 'kixi.collect.request)
(alias 'cc 'kixi.collect.campaign)
(alias 'ms 'kixi.datastore.metadatastore)

(def request-write-provision 10)
(def request-read-provision 10)
(def requests-by-campaign-id-index-write-provision 10)
(def requests-by-campaign-id-index-read-provision 10)

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
                      (adb/primary-collection-request-table profile)
                      [(db/dynamo-col ::cr/id) :s]
                      {:throughput {:read request-read-provision
                                    :write request-write-provision}
                       :gsindexes  [{:name adb/requests-by-campaign-id-index-name
                                     :hash-keydef  [(db/dynamo-col ::cc/id) :s]
                                     :range-keydef [(db/dynamo-col ::cr/id) :s]
                                     :throughput   {:read requests-by-campaign-id-index-read-provision
                                                    :write requests-by-campaign-id-index-write-provision}}]
                       :block? true})

    (when (:alerts? alert-conf)
      (try
        (table-dynamo-alarms (adb/primary-collection-request-table profile)
                             (assoc alert-conf
                                    :read-provision request-read-provision
                                    :write-provision request-write-provision))
        (catch Exception e
          (log/error e "Failed to create cloudwatch alarm"))))))

(defn down
  [db]
  (let [profile (name @profile)
        conn (get-db-config db)]
    (far/delete-table conn (adb/primary-collection-request-table profile))))
