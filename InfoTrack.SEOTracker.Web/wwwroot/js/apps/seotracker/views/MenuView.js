;
(function (App) {

    App.Views.MenuView = Backbone.View.extend({
        template: App.Templates.Menu,

        events: {
            "click #latest": "latest",
            "click #all-time": "allTime"
        },

        latest: function (e) {
            e.preventDefault();

            InfoTrack.Router.navigate("seotracker/latest", {trigger: true});
        },

        allTime: function (e) {
            e.preventDefault();

            InfoTrack.Router.navigate("seotracker/all-time", {trigger: true});
        },

        render: function () {
            this.$el.html(this.template());

            return this;
        }
    });

})(InfoTrack.SEOTracker);