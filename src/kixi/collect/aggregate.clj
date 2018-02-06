(ns kixi.collect.aggregate)

(defprotocol IAggregateEventDataHandler
  (get [this event])
  (put! [this event output]))

(defn aggregate-event-handler
  [handle-event-fn process-event-fn]
  (fn [event]
    (let [handler (handle-event-fn event)]
      (if (satisfies? IAggregateEventDataHandler handler)
        (let [input  (get handler event)
              output (process-event-fn input event)]
          (put! handler event output))
        (throw (ex-info (str "Event handler does not satisfy IAggregateEventDataHandler") {:handler handler}))))))
