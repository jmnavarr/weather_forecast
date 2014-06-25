define([
    'backbone',
    'forecast/templates',
    'moment'
], function (Backbone, Templates, moment) {
    return Backbone.View.extend({
        template: Templates.listView,

        initialize: function (options) {
            this.model.on('add change remove reset', this.render, this);
            this.render();
        },

        viewModel: function () {
            var headers = [];

            if (this.model.length !== 0)
                headers = this.model.first().keys();

            _.each(this.model.models, function (model) {
                model.set("datetime", moment.unix(model.get("dt")).format("MMMM DD, YYYY"));
            });

            var rows = this.model.toJSON();

            return {
                headers: headers,
                rows: rows
            };
        },

        render: function () {
            this.$el.html(this.template(this.viewModel()));
        }
    });
});