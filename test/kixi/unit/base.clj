(ns kixi.unit.base
  (:require [kixi.collect.test-spec]
            [clojure.spec.alpha :as s]
            [clojure.test :refer :all]
            [clojure.spec.test.alpha :as stest]
            [clojure.spec.gen.alpha :as gen]
            [clojure.test.check :as tc]
            [kixi.spec :refer [event-dispatch]]))

(defmacro is-spec
  [spec r]
  `(do
     (println "Checking spec validity " ~spec " V: " ~r)
     (is (s/valid? ~spec ~r)
         (str (s/explain-data ~spec ~r)))))

(defn check
  ([sym]
   (check sym 100))
  ([sym samples]
   (-> sym
       (stest/check {:clojure.spec.test.check/opts {:num-tests samples}})
       first
       stest/abbrev-result
       :failure)))

(defn generate-event
  [t v]
  (gen/generate (s/gen (s/and :kixi/event #(= [t v] (event-dispatch %))))))
