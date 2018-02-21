(ns kixi.unit.campaign.aggregate-test
  {:unit true}
  (:require [kixi.collect.campaign.aggregate :as agr]
            [kixi.unit.base :refer :all]
            [clojure.test :refer :all]))

;; We cannot understand why event generation is currently failing.
;; Until we understand why, and how it can be fixed, property-based tests using
;; spec will remain disabled.

#_(deftest check-process-collection-requested-event
    (is (nil? (check `agr/process-collection-requested-event))))
