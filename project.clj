(def metrics-version "2.7.0")
(def slf4j-version "1.7.21")
(defproject kixi.collect "0.1.0-SNAPSHOT"
  :description "Microservice for Witan's 'Collect and Share' feature"
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[aero "1.0.0"]
                 [aleph "0.4.5-alpha4"]
                 [bidi "2.0.12"]
                 [clj-http "3.7.0"]
                 [com.amazonaws/aws-java-sdk "1.11.253" :exclusions [joda-time]]
                 [com.mastodonc/faraday "1.10.0" :exclusions [com.amazonaws/aws-java-sdk-dynamodb
                                                              com.taoensso/encore]]
                 [com.rpl/specter "1.0.3"]
                 [com.taoensso/timbre "4.8.0"]
                 [de.ubercode.clostache/clostache "1.4.0"]
                 [kixi/kixi.comms "0.2.35" :upgrade :kixi]
                 [kixi/kixi.log "0.1.6" :upgrade :kixi]
                 [kixi/kixi.metrics "0.4.1" :upgrade :kixi]
                 [kixi/joplin.core "0.3.10-SNAPSHOT" :upgrade :kixi]
                 [kixi/joplin.dynamodb "0.3.10-SNAPSHOT" :upgrade :kixi]
                 [kixi/kixi.spec "0.1.18" :upgrade :kixi]
                 [medley "1.0.0"]
                 [org.clojure/clojure "1.9.0"]
                 [spootnik/signal "0.2.1"]
                 [yada/lean "1.2.2"]]
  :repl-options {:init-ns user}
  :global-vars {*warn-on-reflection* true
                *assert* false}
  :profiles {:dev {:source-paths ["dev"]}
             :uberjar {:aot [kixi.collect.bootstrap]
                       :uberjar-name "kixi.collect-standalone.jar"}}
  :test-selectors {:unit :unit
                   :integration :integration})
