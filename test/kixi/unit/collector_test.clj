(ns kixi.unit.collector-test
  {:unit true}
  (:require [kixi.collect.command-handler :as cch]
            [kixi.collect.datastore :as datastore]
            [clojure.spec.alpha :as s]
            [clojure.test :refer :all]
            [clojure.spec.test.alpha :as stest]
            [clojure.test.check :as tc]))

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

(deftest check-create-delete-file-handler-inner
  (is (nil? (check `cch/create-request-collection-handler-inner))))

(deftest check-valid-command
  (is (nil? (check `cch/check-valid-command))))
