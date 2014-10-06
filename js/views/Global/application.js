define(['jquery', 'backbone', 'views/Global/header'], function ($, Backbone, HeaderView) {
    'use strict';

    return Backbone.View.extend({

        events: {

        },

        initialize: function () {
            this.header = new HeaderView({
                el: $('#app-header')
            });
        },

        loading: function (on) {
            if (on) {
                $('#loading').fadeIn();
            } else {
                $('#loading').fadeOut();
            }
        },

        ajax: function (url, data, done, type) {

            data = data || {};
            done = done || function () { return; };
            type = type || 'GET';

            Hyperion.app.loading(true);
            $.ajax({
                url: url,
                type: type,
                data: data
            }).done(done).always(function () {
                Hyperion.app.loading(false);
            });
        }
    });
});