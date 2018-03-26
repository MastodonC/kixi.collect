(ns kixi.collect.process-manager.collection-request.spec
  (:require [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]
            [kixi.spec.conformers :as sc]
            [kixi.spec :as ks]))

(ks/alias 'cr 'kixi.collect.request)
(ks/alias 'pmcr 'kixi.collect.process-manager.collection-request)

(s/def ::pmcr/id sc/uuid?)
(s/def ::pmcr/batch-id sc/uuid?)
(s/def ::pmcr/created-at sc/timestamp?)
(s/def ::pmcr/action (s/with-gen keyword?
                       #(gen/fmap keyword (gen/string-alphanumeric))))
(s/def ::pmcr/results (s/map-of ::pmcr/id
                                (s/coll-of ::pmcr/action :kind set :into #{} :max-count 5)))

(s/def ::pmcr/batch
  (s/keys :req [::pmcr/id
                ::cr/id
                ::cr/ids
                ::pmcr/action
                ::pmcr/created-at
                ::pmcr/batch-id]))
