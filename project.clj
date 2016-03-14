(defproject rustyspoon "0.0.1"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [re-frame "0.7.0-alpha-3"]
                 [garden "1.3.2"]]

  :plugins [[lein-figwheel "0.5.0-6"]]

  :figwheel {:server-port 3499}

  :cljsbuild {:builds
              [{:id "dev"
                :figwheel true
                :source-paths ["src"]
                :compiler {:main rustyspoon.core
                           :asset-path "/js/dev"
                           :output-to "resources/public/js/dev.js"
                           :output-dir "resources/public/js/dev"
                           :verbose true}}]})