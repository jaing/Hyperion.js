/*global module*/
module.exports = function (grunt) {
    'use strict';

    var fs = require('fs');

    var walk = function (dir, filter) {
        var results = [];
        var list = fs.readdirSync(dir);
        list.forEach(function (file) {
            file = dir + '/' + file;
            var stat = fs.statSync(file);
            if (stat && stat.isDirectory()) {
                results = results.concat(walk(file, filter));
            } else if (file.match(filter)) {
                results.push(file);
            }
        });
        return results;
    };

    var includes = walk('js/views', /.*\.js$/).map(function (fileName) {
        return fileName.substr(3, fileName.length - 6);
    });

    var config = {
        less: {
            main: {
                options: {
                    compress: true
                },
                files: {
                    'css/main.css': ['css/main.less']
                }
            }
        },
        watch: {
            main: {
                options: {
                    nospawn: true
                },
                files: ['css/main.less'],
                tasks: ['less:main']
            },
            reload: {
                options: {
                    livereload: true
                },
                files: ['css/**/*.css']
            }
        },
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
                    predef: ['Hyperion', 'require', 'define']
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
                    include: includes
                }
            }
        }
    };

    grunt.initConfig(config);

    grunt.registerTask('default', ['less', 'watch']);

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};