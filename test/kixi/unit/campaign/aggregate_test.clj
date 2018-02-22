(ns kixi.unit.campaign.aggregate-test
  {:unit true}
  (:require [kixi.collect.campaign.aggregate :as agr]
            [kixi.unit.base :refer :all]
            [clojure.test :refer :all]))

(deftest check-process-collection-requested-event
  (is (nil? (check `agr/process-collection-requested-event))))
