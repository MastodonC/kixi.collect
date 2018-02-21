(ns kixi.collect.definitions
  (:require [clojure.spec.alpha :as s]
            [kixi.collect.request.spec]
            [kixi.collect.campaign.spec]
            [kixi.collect.process-manager.collection-request.spec]
            [kixi.comms :as comms]
            [kixi.spec :refer [alias]]))

(alias 'cr 'kixi.collect.request)
(alias 'cc 'kixi.collect.campaign)
(alias 'ms 'kixi.datastore.metadatastore)
(alias 'c-reject 'kixi.collect.request.rejection)
(alias 'pmcr 'kixi.collect.process-manager.collection-request)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Helper fns

(def event-type-version-pair (juxt :kixi.event/type :kixi.event/version))
(def command-type-version-pair (juxt :kixi.command/type :kixi.command/version))

;;

(s/def ::collection-requested-payload
  (s/keys :req [::cc/id
                ::cr/message
                ::cr/sender
                ::cr/group-collection-requests
                ::ms/id]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Commands

(defmethod comms/command-payload
  [:kixi.collect/request-collection "1.0.0"]
  [_]
  (s/keys :req [::cr/message
                ::cr/groups
                ::ms/id]))

(defmethod comms/command-payload
  [:kixi.collect.process-manager.collection-request/complete-process "1.0.0"]
  [_]
  (s/keys :req [::pmcr/batch-id]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Events

(defmethod comms/event-payload
  [:kixi.collect/collection-requested "1.0.0"]
  [_]
  ::collection-requested-payload)

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

(defmethod comms/event-payload
  [:kixi.collect.process-manager.collection-request/process-completed "1.0.0"]
  [_]
  (s/keys :req [::pmcr/batch-id
                ::pmcr/results
                ::cr/message
                ::cr/sender
                ::cr/group-collection-requests]))

(defmethod comms/event-payload
  [:kixi.collect.process-manager.collection-request/complete-process-rejected "1.0.0"]
  [_]
  (s/keys :req [::pmcr/batch-id]))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Commands -> Events

(defmethod comms/command-type->event-types
  [:kixi.collect/request-collection "1.0.0"]
  [_]
  #{[:kixi.collect/collection-requested "1.0.0"]
    [:kixi.collect/collection-request-rejected "1.0.0"]})

(defmethod comms/command-type->event-types
  [:kixi.collect.process-manager.collection-request/complete-process "1.0.0"]
  [_]
  #{[:kixi.collect.process-manager.collection-request/process-completed "1.0.0"]
    [:kixi.collect.process-manager.collection-request/complete-process-rejected "1.0.0"]})
