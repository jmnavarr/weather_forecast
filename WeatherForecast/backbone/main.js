
requirejs.config({
    baseUrl: 'backbone',

    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        handlebars: 'lib/handlebars',
        moment: 'lib/moment',
        plugins: 'lib/plugins'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        moment: {
            exports: 'moment'
        }
    }

});

require([
    'jquery',
    'underscore',
    'backbone',
    'app/app',
	'forecast/forecastCollection',
    'forecast/listView',
    'plugins'
], function ($, _, Backbone, WeatherForecast, forecastCollection, forecastListView) {

    var forecastCollection = new forecastCollection();

    var forecastListView = new forecastListView({
        model: forecastCollection
    });

    window.app = new WeatherForecast({
        el: $('body'),
        forecastCollection: forecastCollection,
        forecastListView: forecastListView
    });

    $(function () {
        if (!!window.location.search) {
            var result = /.*?debug.*?/.exec(window.location.search);
            if (result) {
                $('#qunit').show();
                QUnit.start();
            }
        } else {
            $('#qunit').hide();
        }
    });
});

