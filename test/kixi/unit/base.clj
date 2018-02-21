(ns kixi.unit.base
  (:require [kixi.collect.definitions]
            [clojure.spec.alpha :as s]
            [clojure.test :refer :all]
            [clojure.spec.test.alpha :as stest]
            [clojure.spec.gen.alpha :as gen]
            [clojure.test.check :as tc]))

(defn check
  ([sym]
   (check 100))
  ([sym samples]
   (-> sym
       (stest/check {:clojure.spec.test.check/opts {:num-tests samples}})
       first
       stest/abbrev-result
       :failure)))

(def c-types    (set (map first  (keys (methods kixi.comms/command-payload)))))
(def c-versions (set (map second (keys (methods kixi.comms/command-payload)))))
(def e-types    (set (map first  (keys (methods kixi.comms/event-payload)))))
(def e-versions (set (map second (keys (methods kixi.comms/event-payload)))))

(s/def :kixi.command/type c-types)
(s/def :kixi.command/version c-versions)
(s/def :kixi.event/type e-types)
(s/def :kixi.event/version e-versions)
