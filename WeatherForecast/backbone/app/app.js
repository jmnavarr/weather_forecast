define([
    "backbone",
], function (Backbone) {
    return Backbone.View.extend({
        initialize: function (options) {
            this.forecastCollection = options.forecastCollection;

            this.forecastListView = options.forecastListView;

            this.$el.append(this.forecastListView.el);
        },

        events: {
            "keyup #citybox": "didChangeCitybox",
            "click .switchtheme": "switchTheme"
        },

        didChangeCitybox: function (evt) {
            if (evt.keyCode == 13) {
                var val = evt.currentTarget.value;
                this.showByWhere({ city: val });
            }
        },

        showByWhere: function (params) {
            this.forecastCollection.loadFromJSON(params.city);
        },

        switchTheme: function (evt) {
            $('body').removeClassRegex(/-theme/);

            var theme = $(evt.target).attr("data-theme");
            $("body").addClass(theme);
        }
    });
});