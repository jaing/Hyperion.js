module.exports = function (grunt) {
    'use strict';

    var config = {
        less: {},
        jslint: {
            client: {
                src: ['js/**/*.js'],
                exclude: ['js/vendor/**/*.js', 'js/build/**/*.js'],
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
        },
        clean: {
            build: ['js/build']
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'js',
                    dir: 'js/build',
                    name: 'main',
                    fileExclusionRegExp: /^css/,
                    paths: {
                        jquery: 'vendor/jquery-2.1.1',
                        underscore: 'vendor/underscore',
                        backbone: 'vendor/backbone',
                        text: 'vendor/text',
                        bootstrap: 'vendor/bootstrap',
                        rainbow: 'vendor/rainbow'
                    },
                    shim: {
                        'bootstrap': {
                            'deps': ['jquery']
                        },
                        'backbone': {
                            'deps': ['underscore', 'jquery', 'text', 'bootstrap']
                        },
                        'vendor/language/javascript': {
                            'deps': ['vendor/language/generic']
                        },
                        'vendor/language/html': {
                            'deps': ['vendor/language/generic']
                        },
                        'vendor/language/generic': {
                            'deps': ['rainbow']
                        },
                        'rainbow': {
                            'exports': 'Rainbow'
                        }
                    },
                    include: [
                        'views/Global/header',
                        'views/Global/error',
                        'views/Examples/jsonView',
                        'views/Examples/simpleView',
                        'views/Examples/main',
                        'views/Examples/toJson',
                        'views/Page/about',
                        'views/Page/main'
                    ]
                }
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jslint');
};