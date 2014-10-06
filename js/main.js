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