(ns kixi.unit.request.aggregate-test
  {:unit true}
  (:require [kixi.collect.request.aggregate :as agr]
            [kixi.unit.base :refer :all]
            [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]))

(deftest check-create-request-collection-handler-inner
  (is (nil? (check `agr/create-request-collection-handler-inner))))

(deftest check-valid-command
  (is (nil? (check `agr/check-valid-command))))

(deftest process-event-test
  (let [event (generate-event :kixi.collect/collection-requested "1.0.0")
        result (agr/process-event nil event)]
    (is-spec (s/coll-of :kixi.collect.request/db-item :distinct true) result)))

(deftest rejected-event?-test
  (is (agr/rejected-event? (generate-event :kixi.collect/collection-request-rejected "1.0.0"))))
