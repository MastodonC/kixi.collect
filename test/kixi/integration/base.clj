(ns kixi.integration.base
  (:require [amazonica.aws.dynamodbv2 :as ddb]
            [environ.core :refer [env]]
            [clj-http.client :as client]
            [clojure.spec.test.alpha :as stest]
            [kixi.comms.components.kinesis :as kinesis]
            [kixi.comms.components.coreasync :as coreasync]
            [clojure.core.async :as async]
            [clojure.java.io :as io]
            [kixi.comms :as c]
            [kixi.spec :as sh]
            [kixi.collect.test-spec]
            [kixi.collect.application :as app]
            [kixi.collect.system :as system]
            [user :as user]
            [clojure data
             [test :refer :all]]))

(sh/alias 'cmd 'kixi.command)
(sh/alias 'event 'kixi.event)

(sh/alias 'ms 'kixi.datastore.metadatastore)
(sh/alias 'ss 'kixi.datastore.schemastore)
(sh/alias 'cr 'kixi.collect.request)

(def wait-tries (Integer/parseInt (env :wait-tries "300")))
(def wait-per-try (Integer/parseInt (env :wait-per-try "100")))
(def wait-emit-msg (Integer/parseInt (env :wait-emit-msg "5000")))
(def run-against-staging (Boolean/parseBoolean (env :run-against-staging "false")))
(def profile (env :system-profile "local"))
(def every-count-tries-emit (int (/ wait-emit-msg wait-per-try)))
(def teardown-kinesis (Boolean/parseBoolean (env :teardown-kinesis "false")))
(def teardown-dynamo (Boolean/parseBoolean (env :teardown-dynamo "false")))

(def comms (atom nil))
(def event-channel (atom nil))

(defn uuid
  []
  (str (java.util.UUID/randomUUID)))

(defn random-uuid-set
  ([]
   (random-uuid-set 10))
  ([n]
   (random-uuid-set n (inc n)))
  ([n m]
   {:pre [(> m n)]}
   (set (repeatedly (rand-nth (range n m)) uuid))))

(defn vec-if-not
  [x]
  (if (vector? x)
    x
    (vector x)))

(defn encode-kw
  [kw]
  (str (namespace kw)
       "_"
       (name kw)))

(defn file-size
  [^String file-name]
  (.length (io/file file-name)))

(defn table-exists?
  [endpoint table]
  (try
    (ddb/describe-table {:endpoint endpoint} table)
    (catch Exception e false)))

(defn delete-tables
  [endpoint table-names]
  (doseq [sub-table-names (partition-all 10 table-names)]
    (doseq [table-name sub-table-names]
      (ddb/delete-table {:endpoint endpoint} :table-name table-name))
    (loop [tables sub-table-names]
      (when (not-empty tables)
        (recur (doall (filter (partial table-exists? endpoint) tables)))))))

(defn tear-down-kinesis
  [{:keys [endpoint dynamodb-endpoint streams
           profile app]}]
  (when teardown-dynamo
    (delete-tables dynamodb-endpoint [(kinesis/event-worker-app-name app profile)
                                      (kinesis/command-worker-app-name app profile)]))
  (when teardown-kinesis
    (kinesis/delete-streams! {:endpoint endpoint} (vals streams))))

(defn cycle-system-fixture
  ([]
   (cycle-system-fixture nil))
  ([{:keys [spec subset]}]
   (fn [all-tests]
     (if run-against-staging
       (user/start {} [:communications])
       (if subset
         (user/start {} subset)
         (user/start)))
     ;; We cannot understand why event generation is currently failing.
     ;; Until we understand why, and how it can be fixed, property-based tests using
     ;; spec will remain disabled - this requires instrumentation be OFF.
     (try #_(if spec
              (stest/instrument {:spec spec})
              (stest/instrument))
          (all-tests)
          (finally
            (let [kinesis-conf (select-keys (:communications @app/system)
                                            [:endpoint :dynamodb-endpoint :streams
                                             :profile :app])]
              (user/stop)
              (tear-down-kinesis kinesis-conf)
              (stest/unstrument)))))))

(defn cycle-system-fixture-local-comms
  [all-tests]
  (if run-against-staging
    (user/start {} [:communications])
    (user/start {:communications (coreasync/map->CoreAsync
                                  {:profile profile})} nil))
  (try
    ;; We cannot understand why event generation is currently failing.
    ;; Until we understand why, and how it can be fixed, property-based tests using
    ;; spec will remain disabled - this requires instrumentation be OFF.
    #_(stest/instrument)
    (all-tests)
    (finally
      (user/stop)
      (stest/unstrument))))

(defn sink-to
  [a]
  #(do
     (async/>!! @a %)
     nil))

(defn extract-comms
  [all-tests]
  (reset! comms (:communications @app/system))
  (let [_ (reset! event-channel (async/chan 100))
        handler-1 (c/attach-event-with-key-handler!
                   @comms
                   :collect-integration-tests-1
                   :kixi.comms.event/id
                   (sink-to event-channel))
        handler-2 (c/attach-event-with-key-handler!
                   @comms
                   :collect-integration-tests-2
                   :kixi.event/id
                   (sink-to event-channel))]
    (try
      (all-tests)
      (finally
        (c/detach-handler! @comms handler-1)
        (c/detach-handler! @comms handler-2)
        (async/close! @event-channel)
        (reset! event-channel nil))))
  (reset! comms nil))

(defn extract-component
  [k a]
  (fn [all-tests]
    (reset! a (get @app/system k))
    (all-tests)
    (reset! a nil)))

(defn event-for
  [uid event]
  (or (= uid
         (get-in event [:kixi/user
                        :kixi.user/id]))
      (= uid
         (get-in event [:kixi.comms.event/payload
                        :kixi.user/id]))
      (= uid
         (get-in event [:kixi.comms.event/payload
                        :kixi/user
                        :kixi.user/id]))
      (= uid
         (get-in event [:kixi.comms.event/payload
                        :kixi.datastore.metadatastore/file-metadata
                        :kixi.datastore.metadatastore/provenance
                        :kixi.user/id]))))

(defn wait-for-pred
  ([p]
   (wait-for-pred p wait-tries))
  ([p tries]
   (wait-for-pred p tries wait-per-try))
  ([p tries ms]
   (loop [try tries]
     (when (and (pos? try))
       (let [result (p)]
         (if (not result)
           (do
             (Thread/sleep ms)
             (recur (dec try)))
           result))))))

(defn wait-for-events
  [uid & event-types]
  (let [event-types (set event-types)]
    (first
     (async/alts!!
      (mapv (fn [c]
              (async/go-loop
                  [event (async/<! c)]
                (when event
                  (println "...observing event " (or (:kixi.comms.event/key event)
                                                     (:kixi.event/type event)
                                                     event) uid))
                (if (and (event-for uid event)
                         (or (event-types (:kixi.comms.event/key event))
                             (event-types (:kixi.event/type event))))
                  event
                  (when event
                    (recur (async/<! c))))))
            [@event-channel
             (async/timeout (* wait-tries
                               wait-per-try))])))))

(defn service-url
  []
  (env :service-url "localhost:8083"))

(defn datastore-url
  []
  (let [{:keys [host port]}
        (:datastore (:directory (system/config "config.edn" (or @app/profile :local))))]
    (str host ":" port)))

(defn metadata-query-url
  []
  (str "http://" (datastore-url) "/metadata"))

(defn file-url
  ([]
   (str "http://" (datastore-url) "/file"))
  ([id]
   (str (file-url) "/" id)))

(defn metadata-url
  [id]
  (str (file-url) "/" id "/meta"))

(defn get-metadata
  [ugroup id]
  (client/get (metadata-url id)
              {:as :transit+json
               :accept :transit+json
               :throw-exceptions false
               :headers {"user-id" (uuid)
                         "user-groups" (vec-if-not ugroup)}}))

(defn wait-for-metadata-key
  ([ugroup id k]
   (wait-for-metadata-key ugroup id k wait-tries 1 nil))
  ([ugroup id k tries cnt lr]
   (if (<= cnt tries)
     (let [md (get-metadata ugroup id)]
       (if-not (get-in md [:body k])
         (do
           (when (zero? (mod cnt every-count-tries-emit))
             (println "Waited" cnt "times for" k "to be in metadata for" id ". Getting: " md))
           (Thread/sleep wait-per-try)
           (recur ugroup id k tries (inc cnt) md))
         md))
     (throw (Exception. (str "Metadata key never appeared: " k ". Response: " lr))))))

(defn search-metadata
  ([group-ids activities]
   (search-metadata group-ids activities nil nil))
  ([group-ids activities index]
   (search-metadata group-ids activities index nil nil))
  ([group-ids activities index count]
   (search-metadata group-ids activities index count nil))
  ([group-ids activities index count order]
   (client/get (metadata-query-url)
               {:query-params (merge {:activity (map encode-kw activities)}
                                     (when index
                                       {:index index})
                                     (when count
                                       {:count count})
                                     (when order
                                       {:sort-order order}))
                :accept :transit+json
                :as :transit+json
                :throw-exceptions false
                :coerce :always
                :headers {"user-id" (uuid)
                          "user-groups" (vec-if-not group-ids)}})))

(defn wait-for-metadata-to-be-searchable
  ([ugroup id]
   (wait-for-metadata-to-be-searchable ugroup id wait-tries 1 nil))
  ([ugroup id tries cnt lr]
   (if (<= cnt tries)
     (let [md (wait-for-metadata-key ugroup id ::ms/id)
           search-resp (search-metadata ugroup [::ms/meta-read])]
       (if-not (first (get-in search-resp
                              [:body :items]))
         (do
           (when (zero? (mod cnt every-count-tries-emit))
             (println "Waited" cnt "times for " id " to be searchable using: " (keys (get-in md [:body ::ms/sharing])) ". Getting: " search-resp))
           (Thread/sleep wait-per-try)
           (recur ugroup id tries (inc cnt) md))
         md))
     (throw (Exception. (str "Search never worked for: " id ". Response: " lr))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmacro is-submap
  [expected actual & [msg]]
  `(try
     (let [act# ~actual
           exp# ~expected
           [only-in-ex# only-in-ac# shared#] (clojure.data/diff exp# act#)]
       (if only-in-ex#
         (clojure.test/do-report {:type :fail
                                  :message (or ~msg "Missing expected elements.")
                                  :expected only-in-ex# :actual act#})
         (clojure.test/do-report {:type :pass
                                  :message "Matched"
                                  :expected exp# :actual act#})))
     (catch Throwable t#
       (clojure.test/do-report {:type :error :message "Exception diffing"
                                :expected nil :actual t#}))))

(defmacro has-status
  [status resp]
  `(is-submap {:status ~status}
              ~resp))

(defmacro when-status
  [status resp rest]
  `(let [rs# (:status ~resp)]
     (has-status ~status ~resp)
     (when (= ~status
              rs#)
       ~@rest)))

(defmacro when-success
  [resp & rest]
  `(when-status 200 ~resp ~rest))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn create-metadata
  ([uid file-name]
   (create-metadata uid file-name nil))
  ([uid file-name schema-id]
   (create-metadata
    {:file-name file-name
     :type "stored"
     :sharing {::ms/file-read [uid]
               ::ms/meta-read [uid]
               ::ms/meta-update [uid]}
     :provenance {::ms/source "upload"
                  :kixi.user/id uid}
     :size-bytes (file-size file-name)
     :schema-id schema-id
     :header true}))
  ([{:keys [^String file-name type schema-id user-groups sharing header size-bytes provenance]}]
   (merge {}
          (when type
            {::ms/type type})
          (when file-name
            {::ms/name file-name})
          (when-not (nil? header)
            {::ms/header header})
          (when sharing
            {::ms/sharing sharing})
          (when schema-id
            {::ss/id schema-id})
          (when provenance
            {::ms/provenance provenance})
          (when size-bytes
            {::ms/size-bytes size-bytes}))))

(defn strip-protocol
  [^String path]
  (subs path
        (+ 3 (.indexOf path
                       ":"))))

(defn trim-file-name
  [md]
  (update md
          ::ms/name
          #(subs %
                 (inc (or (clojure.string/last-index-of % "/") -1))
                 (or (clojure.string/last-index-of % ".") (count %)))))

(defmulti upload-file
  (fn [^String target file-name]
    (subs target 0
          (.indexOf target
                    ":"))))

(defmethod upload-file "file"
  [target file-name]
  (let [t (io/file (strip-protocol target))
        p (io/file (.getParent t))]
    (when-not (.exists p)
      (println "upload-file:" p "doesn't exist so we're going to create it:" (.mkdir p)))
    (println "Copying" file-name "to" target)
    (io/copy (io/file file-name)
             (doto t (.createNewFile)))))

(defmethod upload-file "https"
  [target file-name]
  (client/put target
              {:body (io/file file-name)}))

(defn send-metadata-cmd
  ([uid metadata]
   (send-metadata-cmd uid uid metadata))
  ([uid ugroup metadata]
   (c/send-command!
    @comms
    :kixi.datastore.filestore/create-file-metadata
    "1.0.0"
    {:kixi.user/id uid
     :kixi.user/groups (vec-if-not ugroup)}
    (trim-file-name metadata)
    {:kixi.comms.command/partition-key uid})))

(defn metadata->user-id
  [metadata]
  (get-in metadata [::ms/provenance :kixi.user/id]))

(defn send-upload-link-cmd
  ([uid]
   (send-upload-link-cmd uid uid))
  ([uid ugroup]
   (c/send-command!
    @comms
    :kixi.datastore.filestore/create-upload-link
    "1.0.0"
    {:kixi.user/id uid
     :kixi.user/groups (vec-if-not ugroup)}
    {}
    {:kixi.comms.command/partition-key uid})))

(defn get-upload-link-event
  [user-id]
  (send-upload-link-cmd user-id)
  (wait-for-events user-id :kixi.datastore.filestore/upload-link-created))

(defn get-upload-link
  [user-id]
  (let [link-event (get-upload-link-event user-id)]
    [(get-in link-event [:kixi.comms.event/payload :kixi.datastore.filestore/upload-link])
     (get-in link-event [:kixi.comms.event/payload :kixi.datastore.filestore/id])]))

(defn send-file-and-metadata-no-wait
  ([metadata]
   (send-file-and-metadata-no-wait
    (metadata->user-id metadata)
    (metadata->user-id metadata)
    metadata))
  ([uid ugroup metadata]
   (let [[link id] (get-upload-link ugroup)]
     (is link)
     (is id)
     (let [md-with-id (assoc metadata ::ms/id id)]
       (when link
         (upload-file link
                      (::ms/name md-with-id))
         (send-metadata-cmd ugroup
                            md-with-id))
       md-with-id))))

(defn send-file-and-metadata
  ([metadata]
   (send-file-and-metadata
    (metadata->user-id metadata)
    (metadata->user-id metadata)
    metadata))
  ([uid ugroup metadata]
   (send-file-and-metadata-no-wait uid ugroup metadata)
   (let [event (wait-for-events uid
                                :kixi.datastore.file-metadata/rejected
                                :kixi.datastore.file-metadata/updated)]
     (if (= :kixi.datastore.file-metadata/updated
            (:kixi.comms.event/key event))
       (wait-for-metadata-to-be-searchable ugroup
                                           (get-in event [:kixi.comms.event/payload
                                                          ::ms/file-metadata
                                                          ::ms/id]))
       event))))

(defn send-datapack-cmd
  ([uid metadata]
   (send-datapack-cmd uid uid metadata))
  ([uid ugroup metadata]
   (c/send-command!
    @comms
    :kixi.datastore/create-datapack
    "1.0.0"
    {:kixi.user/id uid
     :kixi.user/groups (vec-if-not ugroup)}
    (trim-file-name metadata)
    {:kixi.comms.command/partition-key uid})))

(defn create-datapack
  ([uid ugroup pack-name bundled-ids]
   (create-datapack
    {:type "bundle"
     :bundle-type "datapack"
     :pack-name pack-name
     :sharing {::ms/file-read (vec-if-not ugroup)
               ::ms/meta-read (vec-if-not ugroup)
               ::ms/meta-update (vec-if-not ugroup)
               ::ms/bundle-add (vec-if-not ugroup)}
     :bundled-ids bundled-ids
     :provenance {::ms/source "upload"
                  :kixi.user/id uid}}))
  ([{:keys [^String pack-name bundled-ids sharing header provenance id type bundle-type]}]
   (merge {::ms/id (or id (uuid))
           ::ms/type type
           ::ms/bundle-type bundle-type
           ::ms/name pack-name
           ::ms/bundled-ids bundled-ids}
          (when sharing
            {::ms/sharing sharing})
          (when provenance
            {::ms/provenance provenance}))))

(defn send-datapack
  ([uid pack-name bundled-ids]
   (send-datapack uid uid pack-name bundled-ids))
  ([uid ugroup pack-name bundled-ids]
   (send-datapack (create-datapack uid ugroup pack-name bundled-ids)))
  ([metadata]
   (let [ugroup (or (get-in metadata [::ms/sharing ::ms/file-read])
                    (get-in metadata [::ms/sharing ::ms/meta-read])
                    (get-in metadata [::ms/sharing ::ms/meta-update]))
         uid (get-in metadata [::ms/provenance :kixi.user/id])]
     (send-datapack-cmd ugroup metadata)
     (println "Waiting for datapack event..." uid)
     (let [event (wait-for-events uid :kixi.datastore.file-metadata/rejected :kixi.datastore.file-metadata/updated)]
       (println "Datapack event received:" (get-in event [:kixi.comms.event/payload
                                                          ::ms/file-metadata
                                                          ::ms/id]))
       (if (= :kixi.datastore.file-metadata/updated (:kixi.comms.event/key event))
         (do
           (println "Waiting for metadata....")
           (wait-for-metadata-key ugroup (get-in event [:kixi.comms.event/payload
                                                        ::ms/file-metadata
                                                        ::ms/id])
                                  ::ms/id))
         event)))))

(defn empty-datapack
  [uid]
  (let [datapack-response (send-datapack uid "Empty Datapack" #{})]
    datapack-response))

(defn send-request-cmd
  ([uid message groups bid]
   (send-request-cmd uid uid message groups bid))
  ([uid ugroup message groups bid]
   (c/send-valid-command!
    @comms
    {::cmd/type :kixi.collect/request-collection
     ::cmd/version "1.0.0"
     ::cr/message message
     ::cr/groups groups
     ::ms/id bid
     :kixi/user {:kixi.user/id uid
                 :kixi.user/groups (vec-if-not ugroup)}}
    {:partition-key uid})))

(defn send-collection-request
  ([uid message groups]
   (send-collection-request uid uid message groups))
  ([uid uid2 message groups]
   (println "Creating datapack for" uid)
   (let [dr (empty-datapack uid)]
     (when-success dr
       (println "Datapack created")
       (send-request-cmd uid2 message groups (get-in dr [:body ::ms/id]))
       (println "Sent collect request command!")
       (let [event (wait-for-events uid2 :kixi.collect/collection-requested :kixi.collect/collection-request-rejected)]
         (when (= :kixi.collect/collection-requested (:kixi.event/type event))
           (is (= message (::cr/message event)))
           (is (= groups (set (keys (::cr/group-collection-requests event)))))
           (is (= (get-in dr [:body ::ms/id]) (::ms/id event))))
         event)))))

(defn send-sharing-change
  ([uid ms-id sharing-update activity]
   (send-sharing-change uid uid ms-id sharing-update activity))
  ([uid ugroup ms-id sharing-update activity]
   (c/send-valid-command!
    @comms
    {::cmd/type :kixi.datastore/sharing-change
     ::cmd/version "2.0.0"
     ::ms/id ms-id
     ::ms/sharing-update sharing-update
     ::ms/activity activity
     :kixi.group/id ugroup
     :kixi/user {:kixi.user/id uid
                 :kixi.user/groups (vec-if-not ugroup)}}
    {:partition-key ms-id})
   (let [event (wait-for-events uid :kixi.datastore/sharing-changed)]
     event)))
