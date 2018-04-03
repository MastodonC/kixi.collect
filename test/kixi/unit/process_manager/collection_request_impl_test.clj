(ns kixi.unit.process-manager.collection-request-impl-test
  {:unit true}
  (:require [kixi.collect.process-manager.collection-request :as pmcr]
            [kixi.collect.process-manager.collection-request-impl :refer :all]
            [kixi.collect.process-manager :as pm]
            [clojure.test :refer :all]
            [clojure.spec.test.alpha :as stest]
            [clojure.spec.alpha :as s]
            [kixi.unit.base :refer :all]
            [kixi.spec :as sh]))

(deftest happy-state-machine
  (let [fake-backend-atom (atom nil)
        fake-backend (reify
                       pm/IProcessManagerCollectionRequestBackend
                       (get-batch [this _])
                       pm/IProcessManagerBackend
                       (get-state [this event]
                         @fake-backend-atom)
                       (save-state! [this old-state new-state event new-id]
                         (reset! fake-backend-atom new-state)))]
    ;; 1
    (advance-state-machine! fake-backend {:kixi.event/type :kixi.collect/collection-requested
                                          :kixi.event/version "1.0.0"
                                          :kixi.collect.request/message "happy message"}
                            {:start-state :foo})
    ;; 2
    (advance-state-machine! fake-backend {:kixi.event/type :kixi.datastore/sharing-changed
                                          :kixi.event/version "1.0.0"})
    ;; 3
    (advance-state-machine! fake-backend {:kixi.event/type :kixi.mailer/group-mail-accepted
                                          :kixi.event/version "1.0.0"})
    ;;
    (is (= :complete (get-in @fake-backend-atom [:value ::pmcr/action]))
        (pr-str @fake-backend-atom))))

(deftest check-batch-complete?
  (is (nil? (check `batch-complete?))))

(deftest check-extract-event-signal
  (is (nil? (check `extract-event-signal))))
