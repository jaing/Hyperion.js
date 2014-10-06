module.exports = function (grunt) {
    'use strict';

    var config = {
        less: {},
        jslint: {
            client: {
                src: ['js/**/*.js'],
                exclude: ['js/vendor/**/*.js', 'js/build/**/*.js', 'js/r.js'],
                directives: {
                    plusplus: true,
                    regexp: true,
                    browser: true,
                    nomen: true,
                    vars: true,
                    unparam: true,
                    predef: ['Hyperion', 'require', 'define', '_']
                }
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-jslint');
};