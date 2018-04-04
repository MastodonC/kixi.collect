(ns kixi.collect.process-manager.collection-request.spec
  (:require [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]
            [kixi.spec.conformers :as sc]
            [kixi.spec :as ks]))

(ks/alias 'cr 'kixi.collect.request)
(ks/alias 'cc 'kixi.collect.campaign)
(ks/alias 'pmcr 'kixi.collect.process-manager.collection-request)

(s/def ::pmcr/batch
  (s/keys :req [::pmcr/id
                ::cc/id
                ::cr/id
                ::cr/ids
                ::pmcr/action
                ::pmcr/created-at]))
