(ns kixi.collect.system
  (:require [kixi.collect] ;; loads specs
            [aero.core :as aero]
            [clojure.java.io :as io]
            [medley.core :as med]
            [com.stuartsierra.component
             :as
             component]
            [kixi
             [comms :as comms]
             [log :as kixi-log]]
            [kixi.comms.components.kinesis :as kinesis]
            [kixi.comms.components.coreasync :as coreasync]
            [kixi.collect.request.aggregate.dynamodb :as cra-dynamodb]
            [kixi.collect.campaign.aggregate.dynamodb :as ca-dynamodb]
            [kixi.collect.process-manager.collection-request.dynamodb :as pmcr-dynamodb]
            [kixi.collect.web :as w]
            [taoensso.timbre :as log]))

(defn config
  "Read EDN config, with the given profile. See Aero docs at
  https://github.com/juxt/aero for details."
  [config-location profile]
  (aero/read-config (io/resource config-location) {:profile profile}))

(def component-dependencies
  {:communications []
   :web []
   :collect-request-aggregate [:communications]
   :campaign-aggregate [:communications]
   :process-manager-collection-request [:communications]})

(defn new-system-map
  [config]
  (component/system-map
   :communications (case (first (keys (:communications config)))
                     :kinesis (kinesis/map->Kinesis {})
                     :coreasync (coreasync/map->CoreAsync {}))
   :web (w/map->Web {})
   :collect-request-aggregate (case (first (keys (:collect-request-aggregate config)))
                                :dynamodb (cra-dynamodb/map->DynamoDbAggregate (select-keys config [:directory])))
   :campaign-aggregate (case (first (keys (:campaign-aggregate config)))
                         :dynamodb (ca-dynamodb/map->DynamoDbAggregate (select-keys config [:directory])))
   :process-manager-collection-request (case (first (keys (:process-manager-collection-request config)))
                                         :dynamodb (pmcr-dynamodb/map->DynamoDbCollectionRequestProcessManager (select-keys config [:directory])))))

(defn raise-first
  "Updates the keys value in map to that keys current first value"
  [m k]
  (assoc m k
         (first (vals (k m)))))

(defn configure-components
  "Merge configuration to its corresponding component (prior to the
  system starting). This is a pattern described in
  https://juxt.pro/blog/posts/aero.html"
  [system config profile]
  (->> (-> config
           (raise-first :communications)
           (raise-first :collect-request-aggregate)
           (raise-first :campaign-aggregate)
           (raise-first :process-manager-collection-request))
       ;;
       (med/map-vals #(if (map? %)
                        (assoc % :profile (name profile))
                        %))
       (merge-with merge
                   system)))

(defn configure-logging
  [config]
  (let [level-config {:level (get-in config [:logging :level])
                      :ns-blacklist (get-in config [:logging :ns-blacklist])
                      :timestamp-opts kixi-log/default-timestamp-opts ; iso8601 timestamps
                      :appenders (case (get-in config [:logging :appender])
                                   :println {:println (log/println-appender)}
                                   :json {:direct-json (kixi-log/timbre-appender-logstash)})}]
    (log/set-config! level-config)
    (log/handle-uncaught-jvm-exceptions!
     (fn [throwable ^Thread thread]
       (log/error throwable (str "Unhandled exception on " (.getName thread)))))
    (when (get-in config [:logging :kixi-comms-verbose-logging])
      (log/info "Switching on Kixi Comms verbose logging...")
      (comms/set-verbose-logging! true))))

(defn new-system
  [config-location profile]
  (let [config (config config-location profile)]
    (configure-logging config)
    (-> (new-system-map config)
        (configure-components config profile)
        (component/system-using component-dependencies))))
