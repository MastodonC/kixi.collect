(ns kixi.collect.aggregate
  (:require [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]))

(defprotocol IAggregateEventDataHandler
  (get [this event])
  (put! [this event output]))

(defn satisfies-event-data-handler?
  [handler]
  (satisfies? IAggregateEventDataHandler handler))

(s/fdef aggregate-event-handler-inner
        :args (s/cat :event :kixi/event
                     :create-handler-fn
                     (s/fspec :args (s/cat :event :kixi/event)
                              :ret (s/with-gen
                                     satisfies-event-data-handler?
                                     #(gen/return (reify IAggregateEventDataHandler
                                                    (get [_ _])
                                                    (put! [_ _ _])))))
                     :process-event-fn
                     (s/fspec :args (s/cat :data any?
                                           :event :kixi/event)
                              :ret any?))
        :ret nil?)

(defn aggregate-event-handler-inner
  [event create-event-data-handler-fn process-event-fn]
  (let [handler (create-event-data-handler-fn event)]
    (if (satisfies-event-data-handler? handler)
      (let [aggregated-data (get handler event)
            output (process-event-fn aggregated-data event)]
        (put! handler event output))
      (throw (ex-info (str "Event handler does not satisfy IAggregateEventDataHandler") {:handler handler})))))

(defn aggregate-event-handler
  [handle-event-fn process-event-fn]
  (partial aggregate-event-handler-inner handle-event-fn process-event-fn))
