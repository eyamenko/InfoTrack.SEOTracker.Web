;
(function(App) {

    "use strict";

    App.Models.SearchPosition = Backbone.Model.extend({
        idAttribute: "index",

        defaults: {
            url: null,
            index: null
        }
    });

})(InfoTrack.SEOTracker);