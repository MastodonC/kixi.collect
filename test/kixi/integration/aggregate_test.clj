(ns kixi.integration.aggregate-test
  {:integration true}
  (:require [clj-http.client :as client]
            [clojure.test :refer :all]
            [clojure.spec.test.alpha :as stest]
            [clojure.spec.alpha :as s]
            [kixi.integration.base :refer :all]
            [kixi.spec :as sh]))

(sh/alias 'ms 'kixi.datastore.metadatastore)

(use-fixtures :once
  cycle-system-fixture
  extract-comms)

;; This is tripping `valid-command?` instrumentation at the moment.
;; Not entirely sure why instrumentation is being applied to it though!
;; Disabling instrumentation is done via thread-local binding also, so doesn't work.
#_(deftest collect-request-invalid-cmd
    ;; we need this so that we can pass in a bad message
    (let [uid (uuid)
          dr (empty-datapack uid)
          message :not-a-string
          groups (random-uuid-set)]
      (when-success dr
        (with-redefs [clojure.spec.alpha/valid? (constantly true)]
          (send-request-cmd uid message groups (get-in dr [:body ::ms/id])))
        (let [event (wait-for-events uid :kixi.collect/request-rejected)]
          (is (= :invalid-cmd (:kixi.event.collect.rejection/reason event)))))))

(deftest collect-request-unauthorised
  (let [uid (uuid)
        uid2 (uuid)
        dr (empty-datapack uid)
        message "unauthorised"
        groups (random-uuid-set)]
    (when-success dr
      (send-request-cmd uid2 message groups (get-in dr [:body ::ms/id]))
      (let [event (wait-for-events uid2 :kixi.collect/collection-request-rejected)]
        (is (= :unauthorised (:kixi.collect.request.rejection/reason event)))))))

(deftest collect-request-incorrect-type
  (let [uid (uuid)
        dr (send-file-and-metadata
            (create-metadata
             uid
             "./test-resources/metadata-one-valid.csv"))
        message "incorrect type"
        groups (random-uuid-set)]
    (when-success dr
      (send-request-cmd uid message groups (get-in dr [:body ::ms/id]))
      (let [event (wait-for-events uid :kixi.collect/collection-request-rejected)]
        (is (= :incorrect-type (:kixi.collect.request.rejection/reason event)))))))
