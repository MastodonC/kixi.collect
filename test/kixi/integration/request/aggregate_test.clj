(ns kixi.integration.request.aggregate-test
  {:integration true}
  (:require [clj-http.client :as client]
            [clojure.test :refer :all]
            [clojure.spec.test.alpha :as stest]
            [clojure.spec.alpha :as s]
            [kixi.integration.base :refer :all]
            [kixi.collect.request.aggregate :as agr]
            [kixi.spec :as sh]))

(sh/alias 'cr 'kixi.collect.request)

(def collection-request-aggregate (atom nil))

(use-fixtures :once
  (cycle-system-fixture {:spec {:kixi.event/type #{:kixi.collect/collection-requested}}})
  (extract-component :collect-request-aggregate collection-request-aggregate)
  extract-comms)

(deftest happy-collect-request
  (let [uid (uuid)
        message "happy request"
        groups (random-uuid-set)]
    (when-let [event (send-collection-request uid message groups)]
      ;; check the collection-requests made it into the aggregate
      (is (= :kixi.collect/collection-requested (:kixi.event/type event)))
      (doseq [cr-id (vals (::cr/group-collection-requests event))]
        (let [cr (agr/get-by-id @collection-request-aggregate cr-id)]
          (is (s/valid? ::cr/db-item cr)
              (with-out-str (s/explain ::cr/db-item cr))))))))
