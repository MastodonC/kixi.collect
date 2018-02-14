(ns kixi.unit.request.aggregate-test
  {:unit true}
  (:require [kixi.collect.request.aggregate :as agr]
            [kixi.spec :refer [alias]]
            [kixi.collect.definitions]
            [clojure.spec.alpha :as s]
            [clojure.test :refer :all]
            [clojure.spec.test.alpha :as stest]
            [clojure.spec.gen.alpha :as gen]
            [clojure.test.check :as tc]))

(alias 'cr 'kixi.collect.request)

(def sample-size 100)

(defn check
  [sym]
  (-> sym
      (stest/check {:clojure.spec.test.alpha.check/opts {:num-tests sample-size}})
      first
      stest/abbrev-result
      :failure))

(def types    (set (map first  (keys (methods kixi.comms/command-payload)))))
(def versions (set (map second (keys (methods kixi.comms/command-payload)))))

(s/def :kixi.command/type types)
(s/def :kixi.command/version versions)

(deftest check-create-request-collection-handler-inner
  (is (nil? (check `agr/create-request-collection-handler-inner))))

(deftest check-valid-command
  (is (nil? (check `agr/check-valid-command))))
