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