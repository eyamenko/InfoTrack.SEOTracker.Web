this["InfoTrack"] = this["InfoTrack"] || {};
this["InfoTrack"]["Shared"] = this["InfoTrack"]["Shared"] || {};
this["InfoTrack"]["Shared"]["Collections"] = this["InfoTrack"]["Shared"]["Collections"] || {};
this["InfoTrack"] = this["InfoTrack"] || {};
this["InfoTrack"]["Shared"] = this["InfoTrack"]["Shared"] || {};
this["InfoTrack"]["Shared"]["Models"] = this["InfoTrack"]["Shared"]["Models"] || {};
this["InfoTrack"] = this["InfoTrack"] || {};
this["InfoTrack"]["Shared"] = this["InfoTrack"]["Shared"] || {};
this["InfoTrack"]["Shared"]["Views"] = this["InfoTrack"]["Shared"]["Views"] || {};
this["InfoTrack"] = this["InfoTrack"] || {};
this["InfoTrack"]["Shared"] = this["InfoTrack"]["Shared"] || {};
this["InfoTrack"]["Shared"]["Utils"] = this["InfoTrack"]["Shared"]["Utils"] || {};
this["InfoTrack"] = this["InfoTrack"] || {};
this["InfoTrack"]["SEOTracker"] = this["InfoTrack"]["SEOTracker"] || {};
this["InfoTrack"]["SEOTracker"]["Collections"] = this["InfoTrack"]["SEOTracker"]["Collections"] || {};
this["InfoTrack"] = this["InfoTrack"] || {};
this["InfoTrack"]["SEOTracker"] = this["InfoTrack"]["SEOTracker"] || {};
this["InfoTrack"]["SEOTracker"]["Models"] = this["InfoTrack"]["SEOTracker"]["Models"] || {};
this["InfoTrack"] = this["InfoTrack"] || {};
this["InfoTrack"]["SEOTracker"] = this["InfoTrack"]["SEOTracker"] || {};
this["InfoTrack"]["SEOTracker"]["Views"] = this["InfoTrack"]["SEOTracker"]["Views"] || {};
this["InfoTrack"] = this["InfoTrack"] || {};
this["InfoTrack"]["SEOTracker"] = this["InfoTrack"]["SEOTracker"] || {};
this["InfoTrack"]["SEOTracker"]["Utils"] = this["InfoTrack"]["SEOTracker"]["Utils"] || {};
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
;
(function(App) {

    "use strict";

    App.Collections.SearchPositionCollection = Backbone.Collection.extend({
        url: "/api/searchresults/latest/positions",
        model: App.Models.SearchPosition,

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
this["InfoTrack"] = this["InfoTrack"] || {};
this["InfoTrack"]["SEOTracker"] = this["InfoTrack"]["SEOTracker"] || {};
this["InfoTrack"]["SEOTracker"]["Templates"] = this["InfoTrack"]["SEOTracker"]["Templates"] || {};
this["InfoTrack"]["SEOTracker"]["Templates"]["Menu"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"btn-group\" role=\"group\">\n    <a href=\"/seotracker/latest\" id=\"latest\" type=\"button\" class=\"btn btn-default\">Latest Result</a>\n    <a href=\"/seotracker/all-time\" id=\"all-time\" type=\"button\" class=\"btn btn-default\">All Time Results</a>\n</div>";
},"useData":true});
this["InfoTrack"]["SEOTracker"]["Templates"]["PositionListItem"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"index-container\">"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "</span><span class=\"text-container\">"
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});
;
(function(App) {

    "use strict";

    App.Views.LoaderView = Backbone.View.extend({
        name: "LoaderView",
        className: "loader-view",

        template: function() {
            return "I'm working hard. Please be patient.";
        },

        render: function() {
            this.$el.html(this.template());

            return this;
        }
    });

})(InfoTrack.Shared);
;
(function (App) {

    App.Views.AllTimeView = Backbone.View.extend({
        initialize: function() {
            this.listenTo(this.collection, "sync request", this.render);
        },

        renderChart: function () {
            var data = this.collection.map(function (dataPoint) {
                var x = Date.parse(dataPoint.get("timestamp"));
                var y = dataPoint.get("position");

                return [x, y];
            });

            Highcharts.chart(this.el, {
                chart: {
                    type: 'spline'
                },

                credits: {
                    enabled: false
                },

                legend: {
                    enabled: false
                },

                title: {
                    text: null
                },

                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        month: '%e. %b',
                        year: '%b'
                    }
                },

                yAxis: {
                    title: {
                        text: null
                    },
                    min: 0
                },

                tooltip: {
                    enabled: false
                },

                plotOptions: {
                    spline: {
                        marker: {
                            enabled: true
                        }
                    }
                },

                series: [{
                    name: false,
                    data: data
                }]
            });
        },

        render: function() {
            this.$el.empty();

            if (this.collection.isLoading())
                this.$el.html(new InfoTrack.Shared.Views.LoaderView().render().el);
            else if (this.collection.isEmpty())
                this.$el.html("Nothing is here yet!");
            else
                this.renderChart();

            return this;
        }
    });

})(InfoTrack.SEOTracker);
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
;
(function(App) {

    "use strict";

    App.Views.PositionListItemView = Backbone.View.extend({
        name: "PositionListItemView",
        className: "position-list-item-view",
        template: App.Templates.PositionListItem,

        render: function() {
            var html = this.template(this.model.toJSON());

            this.$el.html(html);

            return this;
        }
    });

})(InfoTrack.SEOTracker);
;
(function (App) {

    App.Views.PositionListView = Backbone.View.extend({
        name: "PositionListView",
        className: "position-list-view",
        childView: App.Views.PositionListItemView,

        initialize: function() {
            this.listenTo(this.collection, "sync request", this.render);
        },

        addOne: function(item) {
            var view = new this.childView({ model: item });

            this.$el.append(view.render().el);
        },

        render: function() {
            this.$el.empty();

            if (this.collection.isLoading())
                this.$el.html(new InfoTrack.Shared.Views.LoaderView().render().el);
            else if (this.collection.isEmpty())
                this.$el.html("Nothing is here yet!");
            else
                this.collection.each(this.addOne, this);

            return this;
        }
    });

})(InfoTrack.SEOTracker);