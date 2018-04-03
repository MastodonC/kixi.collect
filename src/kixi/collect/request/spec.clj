(ns kixi.collect.request.spec
  (:require [clojure.spec.alpha :as s]
            [kixi.spec.conformers :as sc]
            [kixi.comms :as comms]
            [kixi.spec :refer [alias]]))

(alias 'cr 'kixi.collect.request)
(alias 'cc 'kixi.collect.campaign)
(alias 'ms 'kixi.datastore.metadatastore)

;; Db
(s/def ::cr/requester-id sc/uuid?)
(s/def ::cr/responder-id sc/uuid?)
;; TODO replace with collection response id
(s/def ::cr/response-ids (s/coll-of sc/uuid? :distinct true))
(s/def ::cr/db-item
  (s/keys :req [::cc/id
                ::cr/id
                ::cr/created-at
                ::cr/requester-id
                ::cr/responder-id ;; group
                ::cr/response-ids ;; store ids to response rows ... rip rdbs. Should eventually point to ::response/id
                ::ms/id]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Instead of sending a file straight to datastore with `add-file-to-bundle`
;; we send command to C+S along the lines of `submit-response`
;; Picked up by the aggregate -> `response-accepted` (not 'confirmed').
;; ProcMan picks up that event, actually sends the file to the bundle and sends either `response-confirmed` or `response-rejected`.

;; datapack 1-* campaign 1-* collection request 1-* collection response
