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

(s/fdef process-collection-requested-event
        :args (s/cat :event (s/and :kixi/event
                                   #(= [:kixi.collect/collection-requested "1.0.0"]
                                       ((juxt ::event/type ::event/version) %))))
        :fn (fn [{{:keys [event]} :args
                  db-item :ret}]
              (and (= (::cc/id event) (::cc/id db-item))
                   (= (::cr/message event) (::cr/message db-item))
                   (= (::ms/id event) (::ms/id db-item))
                   (= (set (vals (::cr/group-collection-requests event))) (::cr/ids db-item))
                   (= (:kixi.user/id (::cr/sender event)) (::cr/requester-id db-item))
                   (if (:kixi.event/created-at event)
                     (= (:kixi.event/created-at event) (::cc/created-at db-item))
                     true)))
        :ret ::cc/db-item)

(defn process-collection-requested-event
  [{:keys [::cr/sender
           ::cr/message
           ::cr/group-collection-requests
           :kixi.event/created-at] :as event}]
  {::cc/id (::cc/id event)
   ::cc/created-at (or created-at (t/timestamp))
   ::cr/requester-id (:kixi.user/id sender)
   ::cr/message message
   ::cr/ids (set (vals group-collection-requests))
   ::ms/id (::ms/id event)})

;;

(defmulti process-event
  (fn [_ e] ((juxt ::event/type ::event/version) e)))

(defmethod process-event
  [:kixi.collect/collection-requested "1.0.0"]
  [_ event]
  (process-collection-requested-event event))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn aggregate-event-handler
  [handle-event-fn]
  (agr/aggregate-event-handler handle-event-fn process-event))
