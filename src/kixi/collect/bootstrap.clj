(ns kixi.collect.bootstrap
  (:require [kixi.collect.system]
            [com.stuartsierra.component :as component]
            [taoensso.timbre :as log])
  (:gen-class))

(defn -main 
  [& args]
  (let [config-profile (keyword (first args))
        system (kixi.collect.system/new-system config-profile)]
    (.addShutdownHook
     (Runtime/getRuntime)
     (Thread. #(component/stop-system system)))
    (try
      (component/start-system system)
      (.. (Thread/currentThread) join)
      (catch Throwable t
                 (log/error t "Top level exception caught")))))

