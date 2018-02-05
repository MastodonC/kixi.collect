(ns kixi.collect.collector
  (:require [clojure.spec.alpha :as s]
            [kixi.spec.conformers :as sc]
            [kixi.collect.commands]
            [kixi.collect.events]
            [kixi.collect.command-handler :as ch]
            [kixi.collect.event-handler :as eh]
            [kixi.comms :as comms]
            [com.stuartsierra.component :as component]
            [taoensso.timbre :as log]
            [kixi.spec :refer [alias]]))

(alias 'c 'kixi.collect)

(s/def ::c/message sc/not-empty-string)
(s/def ::c/groups  (s/coll-of :kixi.group/id))
(s/def ::c/sender :kixi/user)

(defmethod comms/command-type->event-types
  [:kixi.collect/request-collection "1.0.0"]
  [_]
  #{[:kixi.collect/collection-requested "1.0.0"]
    [:kixi.collect/collection-request-rejected "1.0.0"]})

(defrecord CollectAndShare [directory communications]
  component/Lifecycle
  (start [component]
    (log/info "Starting Collect + Share" directory)
    ;;
    (comms/attach-validating-command-handler!
     communications
     :kixi.collect/request-collection-handler
     :kixi.collect/request-collection
     "1.0.0"
     (ch/create-request-collection-handler directory))
    ;;
    (comms/attach-validating-event-handler!
     communications
     :kixi.collect/collection-requested-handler
     :kixi.collect/collection-requested
     "1.0.0"
     (eh/create-collection-requested-handler directory))
    component)
  (stop [component]
    (log/info "Stopping Collect + Share")
    component))
