;
(function (App) {

    App.Models.DataPoint = Backbone.Model.extend({
        idAttribute: "timestamp",

        defaults: {
            position: null,
            timestamp: null
        }
    });

})(InfoTrack.SEOTracker);