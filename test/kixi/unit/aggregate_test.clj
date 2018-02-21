(ns kixi.unit.aggregate-test
  {:unit true}
  (:require [kixi.collect.aggregate :as agr]
            [kixi.unit.base :refer :all]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as st]
            [clojure.spec.gen.alpha :as gen]
            [clojure.test :refer :all]))

;; We cannot understand why event generation is currently failing.
;; Until we understand why, and how it can be fixed, property-based tests using
;; spec will remain disabled.

#_(deftest check-aggregate-event-handler-inner-1
    (is (nil? (check `agr/aggregate-event-handler-inner 20))))
