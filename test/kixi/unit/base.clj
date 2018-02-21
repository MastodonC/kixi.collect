(ns kixi.unit.base
  (:require [kixi.collect.definitions]
            [clojure.spec.alpha :as s]
            [clojure.test :refer :all]
            [clojure.spec.test.alpha :as stest]
            [clojure.spec.gen.alpha :as gen]
            [clojure.test.check :as tc]))

(def sample-size 100)

(defn check
  [sym]
  (-> sym
      (stest/check {:clojure.spec.test.alpha.check/opts {:num-tests sample-size}})
      first
      stest/abbrev-result
      :failure))

(def c-types    (set (map first  (keys (methods kixi.comms/command-payload)))))
(def c-versions (set (map second (keys (methods kixi.comms/command-payload)))))
(def e-types    (set (map first  (keys (methods kixi.comms/event-payload)))))
(def e-versions (set (map second (keys (methods kixi.comms/event-payload)))))

(s/def :kixi.command/type c-types)
(s/def :kixi.command/version c-versions)
(s/def :kixi.event/type e-types)
(s/def :kixi.event/version e-versions)
