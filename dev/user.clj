(ns user
  (:require [com.stuartsierra.component :as component]
            [kixi.collect.system :as sys]
            [environ.core :refer [env]]))

(defonce system (atom nil))
(defonce profile (atom nil))

(defn start
  ([]
   (start {} nil))
  ([overrides component-subset]
   (when-not @system
     (reset! profile (keyword (env :system-profile "local")))
     (try
       (prn "Starting system")
       (->> (sys/new-system @profile)
            (#(merge % overrides))
            (#(if component-subset
                (select-keys % component-subset)
                %))
            component/start-system
            (reset! system))
       (catch Exception e
         (reset! system (:system (ex-data e)))
         (throw e))))))

(defn stop
  []
  (when @system
    (prn "Stopping system")
    (component/stop-system @system)
    (reset! system nil)))

(defn restart
  []
  (stop)
  (start))
