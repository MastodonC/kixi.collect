(ns kixi.collect.encode
  (:require [taoensso.timbre :as log]
            [cognitect.transit :as tr]
            [clojure.java.io :as io]
            [byte-transforms :as bt]
            [byte-streams :as bs])
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream]
           [org.httpkit.BytesInputStream]
           [java.lang.String]))

(def regex-write-handler
  (tr/write-handler "regex" (fn [o] (str o))))

(def transit-encoding-level :json-verbose) ;; DO NOT CHANGE

(defn transit-decode-bytes [in]
  (let [reader (tr/reader in transit-encoding-level)]
    (tr/read reader)))

(defn transit-decode [^String s]
  (let [sbytes (.getBytes s)
        in (ByteArrayInputStream. sbytes)
        reader (tr/reader in transit-encoding-level)]
    (tr/read reader)))

(defn transit-encode [s]
  (let [out (ByteArrayOutputStream. 4096)
        writer (tr/writer out transit-encoding-level
                          {:handlers {java.util.regex.Pattern regex-write-handler}})]
    (tr/write writer s)
    (.toString out)))

(defn base64-encode [^String s]
  (bs/to-string (bt/encode s :base64 {:url-safe? true})))

(defn base64-decode [^String s]
  (bs/to-string (bt/decode s :base64)))
