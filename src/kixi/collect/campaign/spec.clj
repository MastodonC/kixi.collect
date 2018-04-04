(ns kixi.collect.campaign.spec
  (:require [clojure.spec.alpha :as s]
            [kixi.spec.conformers :as sc]
            [kixi.comms :as comms]
            [kixi.spec :refer [alias]]))

(alias 'cr 'kixi.collect.request)
(alias 'cc 'kixi.collect.campaign)
(alias 'ms 'kixi.datastore.metadatastore)

;; Db
(s/def ::cc/db-item
  (s/keys :req [::cc/id
                ::cr/ids
                ::cc/created-at
                ::cr/requester-id
                ::cr/message
                ::ms/id]))
