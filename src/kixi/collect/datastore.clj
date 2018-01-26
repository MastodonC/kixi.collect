(ns kixi.collect.datastore
  (:require [clj-http.client :as http]
            [clojure.spec.alpha :as s]
            [kixi.user]
            [kixi.datastore.metadatastore :as ms]
            [taoensso.timbre :as log]))

(defn directory-url
  [k s & params]
  (apply str "http://"
         (get-in s [k :host]) ":"
         (get-in s [k :port]) "/"
         (clojure.string/join "/" params)))

(defn user-header
  [{:keys [kixi.user/id kixi.user/groups] :as u}]
  {"user-groups" (clojure.string/join "," groups)
   "user-id" id})

(defn bundle?
  [{:keys [kixi.datastore.metadatastore/type]}]
  (= "bundle" type))

(s/fdef get-metadata
        :args (s/cat :user :kixi/user
                     :directory (s/keys)
                     :id ::ms/id)
        :fn (fn [{{:keys [id]} :args
                  md :ret}]
              true)
        :ret (s/or :metadata ::ms/file-metadata
                   :nil nil?))

(defn get-metadata
  [u d id]
  (let [uri (directory-url :datastore d "metadata" id)
        _ (log/info "Getting metadata" uri)
        r (http/get uri
                    {:content-type :transit+json
                     :accept :transit+json
                     :throw-exceptions false
                     :as :transit+json
                     :headers (user-header u)})]
    (if (= 200 (:status r))
      (:body r)
      (log/warn "Failed to get metadata" id r))))
