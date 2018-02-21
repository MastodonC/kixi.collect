(ns kixi.integration.process-manager.collection-request-test
  {:integration true}
  (:require [kixi.collect.process-manager.collection-request :as pmcr]
            [kixi.collect.process-manager :as pm]
            [clojure.test :refer :all]
            [clojure.spec.test.alpha :as stest]
            [clojure.spec.alpha :as s]
            [kixi.integration.base :refer :all]
            [kixi.spec :as sh]
            [taoensso.faraday :as far]))

(sh/alias 'ms 'kixi.datastore.metadatastore)

(def pmcr (atom nil))

(use-fixtures :once
  (cycle-system-fixture {:spec {:kixi.event/type #{:kixi.collect/collection-requested}}})
  (extract-component :process-manager-collection-request pmcr)
  extract-comms)

(deftest happy-process-manager
  (let [uid (uuid)
        message "happy process manager"
        groups (random-uuid-set 3)]
    (when-let [event (send-collection-request uid message groups)]
      (let [pmevent (wait-for-events uid :kixi.collect.process-manager.collection-request/process-completed)]
        (is (= :kixi.collect.process-manager.collection-request/process-completed
               (:kixi.event/type pmevent)))
        (is (= (:kixi.collect.request/group-collection-requests event)
               (:kixi.collect.request/group-collection-requests pmevent)))
        (is (every? #(= #{:update-sharing-permission :send-group-email :complete} %)
                    (vals (:kixi.collect.process-manager.collection-request/results pmevent))))))))

(deftest sad-process-manager-1
  (let [uid (uuid)
        dr (empty-datapack uid)
        message "sad process manager 1"
        groups (random-uuid-set)]
    (when-success dr
      (let [id (get-in dr [:body ::ms/id])]
        (send-request-cmd uid message groups id)
        (send-sharing-change uid id ::ms/sharing-disj ::ms/meta-update)
        (when-let [event (wait-for-events uid :kixi.collect/collection-requested)]
          (let [pmevent (wait-for-events uid :kixi.collect.process-manager.collection-request/process-completed)]
            (is (= :kixi.collect.process-manager.collection-request/process-completed
                   (:kixi.event/type pmevent)))
            (is (= (:kixi.collect.request/group-collection-requests event)
                   (:kixi.collect.request/group-collection-requests pmevent)))
            (is (some (partial = #{:update-sharing-permission :fail})
                      (vals (:kixi.collect.process-manager.collection-request/results pmevent))))))))))

;; Ideally we'd find a way to cause a group-mail-rejected event, which would
;; cause the process manager to switch to `:fail` actions.
#_(deftest sad-process-manager-2
    (let [uid (uuid)
          dr (empty-datapack uid)
          message "sad process manager 2"
          groups (random-uuid-set)]
      (when-success dr
        (let [id (get-in dr [:body ::ms/id])]
          (send-request-cmd uid message groups id)
          (when-let [event (wait-for-events uid :kixi.collect/collection-requested)]
            (let [pmevent (wait-for-events uid :kixi.collect.process-manager.collection-request/process-completed)]
              (is (= :kixi.collect.process-manager.collection-request/process-completed
                     (:kixi.event/type pmevent)))
              (is (= (:kixi.collect.request/group-collection-requests event)
                     (:kixi.collect.request/group-collection-requests pmevent)))
              (is (every? #(= #{:update-sharing-permission :fail} %)
                          (vals (:kixi.collect.process-manager.collection-request/results pmevent))))))))))
