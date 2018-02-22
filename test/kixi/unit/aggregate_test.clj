(ns kixi.unit.aggregate-test
  {:unit true}
  (:require [kixi.collect.aggregate :as agr]
            [kixi.unit.base :refer :all]
            [clojure.test :refer :all]))

(deftest check-aggregate-event-handler-inner
  (is (nil? (check `agr/aggregate-event-handler-inner 20))))
