(ns kixi.collect.campaign.aggregate
  (:require [clojure.spec.alpha :as s]
            [kixi.spec :refer [alias]]
            [kixi.spec.conformers :as sc]
            [kixi.comms.time :as t]
            [kixi.collect.definitions]
            [kixi.collect.datastore :as datastore]
            [kixi.collect.aggregate :as agr]))

(alias 'event 'kixi.event)
(alias 'cr 'kixi.collect.request)
(alias 'cc 'kixi.collect.campaign)
(alias 'ms 'kixi.datastore.metadatastore)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;

(defprotocol ICampaignAggregate
  (get-by-id [this id]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; EVENTS

(defmulti process-event
  (fn [_ e] ((juxt ::event/type ::event/version) e)))

(defmethod process-event
  [:kixi.collect/collection-requested "1.0.0"]
  [_ {:keys [::cr/sender
             ::cr/message
             ::cr/group-collection-requests] :as event}]
  {::cc/id (::cc/id event)
   ::cc/created-at (or (:kixi.event/created-at event) (t/timestamp))
   ::cr/requester-id (:kixi.user/id sender)
   ::cr/message message
   ::cr/ids (set (vals group-collection-requests))
   ::ms/id (::ms/id event)})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn aggregate-event-handler
  [handle-event-fn]
  (agr/aggregate-event-handler handle-event-fn process-event))
