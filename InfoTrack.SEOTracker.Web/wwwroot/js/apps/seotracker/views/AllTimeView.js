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