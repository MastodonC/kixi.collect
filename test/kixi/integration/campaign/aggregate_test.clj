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

(def campaign-aggregate (atom nil))

(use-fixtures :once
  (cycle-system-fixture {:spec {:kixi.event/type #{:kixi.collect/collection-requested}}})
  (extract-component :campaign-aggregate campaign-aggregate)
  extract-comms)

(deftest happy-campaign
  (let [uid (uuid)
        message "happy campaign"
        groups (random-uuid-set)]
    (when-let [event (send-collection-request uid message groups)]
      ;; check the campaign made it into the aggregate
      (let [c (agc/get-by-id @campaign-aggregate (::cc/id event))]
        (is (s/valid? ::cc/db-item c)
            (with-out-str (s/explain ::cc/db-item c)))))))
