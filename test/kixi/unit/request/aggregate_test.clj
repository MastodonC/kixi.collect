(ns kixi.unit.request.aggregate-test
  {:unit true}
  (:require [kixi.collect.request.aggregate :as agr]
            [kixi.unit.base :refer :all]
            [clojure.test :refer :all]))

(deftest check-create-request-collection-handler-inner
  (is (nil? (check `agr/create-request-collection-handler-inner))))

(deftest check-valid-command
  (is (nil? (check `agr/check-valid-command))))
