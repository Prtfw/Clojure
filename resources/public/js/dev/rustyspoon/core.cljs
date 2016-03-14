(ns rustyspoon.core
  (:require [reagent.core :as r]
            [garden.core :as garden]))

(enable-console-print!)


(def styles
  (garden/css
   (let [h "5em"]
     [:.app
      [:.header
       {:background "#CD5C5C",
        :margin-bottom "1em",
        :padding "1em"}
       [:.search
        {:width "100%",
         :border-radius "5px",
         :border "none",
         :padding "0.5em",
         :margin-bottom "1em",
         :box-sizing "border-box"}]]
      [:.restaurant
       {:height h, :margin "1em"}
       [:img
        {:width h,
         :height h,
         :float "left",
         :margin-right "0.5em"}]
       [:.name {:font-weight "bold"}]
       [:.price-range {:color "green"}]]])))

(defn id->image [id]
  (str
   "https://s3-media2.fl.yelpcdn.com/bphoto/"
   id
   "/ls.jpg"))

(def restaurants
  [{:name "Byblos",
    :address "11 Duncan Street",
    :image "kgXfBW9csGml_ZicwCB5Xg",
    :rating 4.5,
    :price-range 3}
   {:name "George",
    :address "111 Queen St. E",
    :image "gH783lm_UYR8b78s3Ul5Rg",
    :rating 4.4,
    :price-range 4}
   {:name "Kaiju",
    :address "384 Yonge St.",
    :image "WQvsAGnWJcjUQQH3DMw8gA",
    :rating 4.3,
    :price-range 1}
   {:name "Richmond Station",
    :address "1 Richmond St West",
    :image "AGtyni4gZtoWSRz_U0Axwg",
    :rating 4.2,
    :price-range 3}
   {:name "Banh Mi Boys",
    :address "392 Queen St. West",
    :image "S1JS93tjQLqSwXMeWz0z7g",
    :rating 4,
    :price-range 1}
   {:name "Canoe",
    :address "66 Wellington St.",
    :image "g0lZAilNKqlfQTNLUtWp3Q",
    :rating 3.9,
    :price-range 4}])

(println "Hello Console!")

(defn header-view []
  [:div.header
   [:input.search {:placeholder "Search"}]
   [:div.price-range
    [:button "$"]
    [:button "$$"]
    [:button "$$$"]
    [:button "$$$$"]]
   [:div.sort
    [:button.name "Name"]
    [:button.rating "Rating"]]])

(defn restaurant-view [r]
  [:div.restaurant
   [:img {:src (id->image (r :image))}]
   [:div.name (r :name)]
   [:div.address (r :address)]
   [:div.rating (r :rating)]
   [:div.price-range
    (repeat (r :price-range) "$")]])


 (defn app-view []
  [:div.app
   [:style styles]
      [header-view]
   (for [r restaurants] [restaurant-view r])])

(r/render
 [app-view]
 (js/document.getElementById "app"))