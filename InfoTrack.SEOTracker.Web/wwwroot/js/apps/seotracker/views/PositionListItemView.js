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