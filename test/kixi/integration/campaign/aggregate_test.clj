(ns kixi.integration.campaign.aggregate-test
  {:integration true}
  (:require [clj-http.client :as client]
            [clojure.test :refer :all]
            [clojure.spec.test.alpha :as stest]
            [clojure.spec.alpha :as s]
            [kixi.integration.base :refer :all]
            [kixi.collect.campaign.aggregate :as agc]
            [kixi.spec :as sh]))

(sh/alias 'cc 'kixi.collect.campaign)
(sh/alias 'ms 'kixi.datastore.metadatastore)

(use-fixtures :once
  cycle-system-fixture
  extract-comms
  extract-campaign-aggregate)

(deftest happy-collect-request-campaign
  (let [uid (uuid)
        message "happy"
        groups (random-uuid-set)]
    (when-let [event (send-collection-request uid message groups)]
      ;; check the campaign made it into the aggregate
      (let [c (agc/get-by-id @campaign-aggregate (::cc/id event))]
        (is (s/valid? ::cc/db-item c)
            (with-out-str (s/explain ::cc/db-item c)))))))
