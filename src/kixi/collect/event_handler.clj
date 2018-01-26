(ns kixi.collect.event-handler
  (:require [kixi.collect.events]
            [kixi.spec :refer [alias]]))

(alias 'c 'kixi.collect)

(defn create-collection-requested-handler
  [metadatastore]
  (fn [event]))
