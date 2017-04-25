;
(function (App) {

    App.Router = Backbone.Router.extend({
        routes: {
            "seotracker/latest": "latestResult",
            "seotracker/all-time": "allTimeResults"
        },

        initialize: function () {
            this.renderMenu();
        },

        latestResult: function () {
            var collection = new App.Collections.SearchPositionCollection();
            var view = new App.Views.PositionListView({el: "#seotracker-app .body-container", collection: collection});

            view.render();
            collection.fetch();
        },

        allTimeResults: function () {
            var collection = new App.Collections.DataPointCollection();
            var view = new App.Views.AllTimeView({el: "#seotracker-app .body-container", collection: collection});

            view.render();
            collection.fetch();
        },

        renderMenu: function () {
            var view = new App.Views.MenuView({el: "#seotracker-app .menu-container"});

            view.render();
        }
    });

})(InfoTrack.SEOTracker);