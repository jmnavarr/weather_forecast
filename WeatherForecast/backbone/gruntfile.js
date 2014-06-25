module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        handlebars: {
            compile: {

                options: {
                    namespace: 'Weather.Forecast',
                    amd: true,
                    processName: function (filePath) {
                        var parts = filePath.split('/');
                        var dirName = parts[parts.length - 2];
                        var fileName = parts[parts.length - 1];

                        var templateName = fileName.replace(/\.handlebars/ig, '');

                        return templateName;
                    }
                },

                files: {
                    'forecast/templates.js': [
                        'forecast/*.handlebars'
                    ]
                }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.registerTask('default', 'handlebars');
    grunt.loadNpmTasks('handlebars-helper-moment');

};