(ns figwheel.connect (:require [figwheel.client] [rustyspoon.core] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:3499/figwheel-ws"})

