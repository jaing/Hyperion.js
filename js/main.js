window.Hyperion = {
    _translations: {

    },
    language: 'EN',
    routers: {},
    app: {},
    collections: {},
    models: {},
    views: {}
};

require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'vendor/jquery-2.1.1',
        underscore: 'vendor/lodash.underscore',
        backbone: 'vendor/backbone',
        text: 'vendor/text',
        bootstrap: 'vendor/bootstrap',
        handlebars: 'vendor/handlebars-v2.0.0',
        'handlebars-helpers': 'vendor/handlebars-helpers',
        'backbone-forms': 'vendor/backbone-forms'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['underscore', 'jquery', 'text', 'bootstrap', 'handlebars', 'handlebars-helpers']
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'handlebars-helpers': {
            deps: ['handlebars']
        }
    }
});

/**
 * Starting application
 * 1. Loading default language file.
 * 2. Loading application.
 */
require(['routers/Router', 'backbone', 'jquery', 'plugins'], function (Router, Backbone, $) {
    'use strict';
    $.ajax({
        url: 'json/' + Hyperion.language + '.json',
        type: 'GET'
    }).success(function (data) {
        Hyperion._translations[Hyperion.language] = data;
        Hyperion.routers = new Router();
        Backbone.history.start();
    });
});