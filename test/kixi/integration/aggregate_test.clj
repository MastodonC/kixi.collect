(ns kixi.integration.aggregate-test
  {:integration true}
  (:require [clj-http.client :as client]
            [clojure.test :refer :all]
            [clojure.spec.test.alpha :as stest]
            [clojure.spec.alpha :as s]
            [kixi.integration.base :refer :all]
            [kixi.spec :as sh]
            [kixi.comms :as comms]))

(sh/alias 'ms 'kixi.datastore.metadatastore)

(use-fixtures :once
  (cycle-system-fixture)
  extract-comms)

(deftest collect-request-invalid-cmd
  (let [uid (uuid)
        dr (empty-datapack uid)
        message :not-a-string
        groups (random-uuid-set)]
    (when-success dr
      (stest/unstrument)
      (binding [comms/*validate-commands* false]
        (send-request-cmd uid message groups (get-in dr [:body ::ms/id])))
      (let [event (wait-for-events uid :kixi.collect/collection-request-rejected)]
        (is (= :invalid-cmd (:kixi.collect.request.rejection/reason event))))
      (stest/instrument))))

(deftest collect-request-unauthorised-1
  (let [uid (uuid)
        uid2 (uuid)
        dr (empty-datapack uid)
        message "unauthorised 1"
        groups (random-uuid-set)]
    (when-success dr
      (send-request-cmd uid2 message groups (get-in dr [:body ::ms/id]))
      (let [event (wait-for-events uid2 :kixi.collect/collection-request-rejected)]
        (is (= :unauthorised (:kixi.collect.request.rejection/reason event)))))))

(deftest collect-request-unauthorised-2
  (let [uid (uuid)
        dr (empty-datapack uid)
        message "unauthorised 2"
        groups (random-uuid-set 3)]
    (when-success dr
      (let [id (get-in dr [:body ::ms/id])]
        ;; no meta-update means can't change bundle sharing permissions
        (send-sharing-change uid id ::ms/sharing-disj ::ms/meta-update)
        ;;
        (Thread/sleep 2000)
        (let [md (get-metadata uid id)]
          (send-request-cmd uid message groups (get-in dr [:body ::ms/id]))
          (let [event (wait-for-events uid :kixi.collect/collection-request-rejected)]
            (is (= :unauthorised (:kixi.collect.request.rejection/reason event)))))))))

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
