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