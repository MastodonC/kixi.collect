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
        :args (s/cat :create-handler-fn
                     (s/fspec :args (s/cat :event :kixi/event)
                              :ret (s/with-gen
                                     satisfies-event-data-handler?
                                     #(gen/return (reify IAggregateEventDataHandler
                                                    (get [_ _])
                                                    (put! [_ _ _])))))
                     :process-event-fn
                     (s/fspec :args (s/cat :data any?
                                           :event :kixi/event)
                              :ret any?)
                     :event :kixi/event)
        :ret nil?)

(defn aggregate-event-handler-inner
  [create-event-data-handler-fn process-event-fn event]
  (println (:kixi.event/type event))
  (let [handler (create-event-data-handler-fn event)]
    (if (satisfies-event-data-handler? handler)
      (let [aggregated-data (get handler event)
            output (process-event-fn aggregated-data event)]
        (put! handler event output))
      (throw (ex-info (str "Event handler does not satisfy IAggregateEventDataHandler")
                      {:handler handler
                       :create-fn create-event-data-handler-fn})))))

(defn aggregate-event-handler
  [create-event-data-handler-fn process-event-fn]
  (partial aggregate-event-handler-inner create-event-data-handler-fn process-event-fn))
