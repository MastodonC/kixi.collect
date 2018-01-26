(ns kixi.collect.events
  (:require [clojure.spec.alpha :as s]
            [kixi.comms :as comms]
            [kixi.spec :refer [alias]]))

(alias 'c 'kixi.collect)
(alias 'ms 'kixi.datastore.metadatastore)
(alias 'c-reject 'kixi.event.collect.rejection)

(defmethod comms/event-payload
  [:kixi.collect/collection-requested "1.0.0"]
  [_]
  (s/keys :req [::c/message
                ::c/groups
                ::c/sender
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
