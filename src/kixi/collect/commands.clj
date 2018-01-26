(ns kixi.collect.commands
  (:require [clojure.spec.alpha :as s]
            [kixi.comms :as comms]
            [kixi.spec :refer [alias]]))

(alias 'c  'kixi.collect)
(alias 'ms 'kixi.datastore.metadatastore)

(defmethod comms/command-payload
  [:kixi.collect/request-collection "1.0.0"]
  [_]
  (s/keys :req [::c/message
                ::c/groups
                ::ms/id]))
