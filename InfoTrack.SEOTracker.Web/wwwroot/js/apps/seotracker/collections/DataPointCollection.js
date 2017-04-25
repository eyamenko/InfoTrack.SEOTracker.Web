;
(function (App) {

    App.Collections.DataPointCollection = Backbone.Collection.extend({
        url: "/api/searchresults/datapoints",
        model: App.Models.DataPoint,

        initialize: function() {
            this.listenTo(this, "sync", this.resetLoading);
            this.listenTo(this, "request", this.setLoading);
        },

        isLoading: function() {
            return this._loading;
        },

        setLoading: function() {
            this._loading = true;
        },

        resetLoading: function() {
            this._loading = false;
        }
    });

})(InfoTrack.SEOTracker);