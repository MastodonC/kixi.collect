(ns kixi.collect.request.commands
  (:require [clojure.spec.alpha :as s]
            [kixi.collect.request.spec]
            [kixi.comms :as comms]
            [kixi.spec :refer [alias]]))

(alias 'cr 'kixi.collect.request)
(alias 'ms 'kixi.datastore.metadatastore)

(defmethod comms/command-payload
  [:kixi.collect/request-collection "1.0.0"]
  [_]
  (s/keys :req [::cr/message
                ::cr/groups
                ::ms/id]))
