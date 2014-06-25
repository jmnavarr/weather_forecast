define([
    'backbone',
    'forecast/forecast'
], function (Backbone, Forecast) {
    return Backbone.Collection.extend({
        model: Forecast,

        loadFromJSON: function (city) {
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&mode=json&units=imperial&cnt=10',
                crossDomain: true,
                success: _(this.parseFromJSON).bind(this),
                error: function (e) {
                    console.log("error: " + JSON.stringify(e));
                }
            });
        },

        parseFromJSON: function (response) {
            this.reset();
            console.log('response received', response);
            this.add(response.list);
        },

        getAll: function () {
            return this.models;
        },
    });
});