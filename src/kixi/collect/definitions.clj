(ns kixi.collect.definitions
  (:require [clojure.spec.alpha :as s]
            [kixi.collect.request.spec]
            [kixi.collect.campaign.spec]
            [kixi.comms :as comms]
            [kixi.spec :refer [alias]]))

(alias 'cr 'kixi.collect.request)
(alias 'cc 'kixi.collect.campaign)
(alias 'ms 'kixi.datastore.metadatastore)
(alias 'c-reject 'kixi.collect.request.rejection)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Commands

(defmethod comms/command-payload
  [:kixi.collect/request-collection "1.0.0"]
  [_]
  (s/keys :req [::cr/message
                ::cr/groups
                ::ms/id]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Events

(defmethod comms/event-payload
  [:kixi.collect/collection-requested "1.0.0"]
  [_]
  (s/keys :req [::cc/id
                ::cr/message
                ::cr/sender
                ::cr/group-collection-requests
                ::ms/id]))

(s/def ::c-reject/reason
  #{:invalid-cmd
    :unauthorised
    :incorrect-type})

(s/def ::c-reject/message string?)

(defmethod comms/event-payload
  [:kixi.collect/collection-request-rejected "1.0.0"]
  [_]
  (s/keys :req [::c-reject/reason]
          :opt [::c-reject/message
                ::ms/id]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Commands -> Events

(defmethod comms/command-type->event-types
  [:kixi.collect/request-collection "1.0.0"]
  [_]
  #{[:kixi.collect/collection-requested "1.0.0"]
    [:kixi.collect/collection-request-rejected "1.0.0"]})
