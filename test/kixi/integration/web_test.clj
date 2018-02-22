(ns kixi.integration.web-test
  {:integration true}
  (:require [clj-http.client :as client]
            [clojure.test :refer :all]
            [kixi.integration.base :refer :all]))

(use-fixtures :once (cycle-system-fixture) extract-comms)

(deftest healthcheck-check
  (let [hc-resp (client/get (str "http://" (service-url) "/healthcheck"))]
    (is (= (:status hc-resp)
           200))))
