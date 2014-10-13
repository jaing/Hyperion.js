define([
    'jquery',
    'backbone',
    'underscore',
    'handlebars',
    'text!./tpl/handlebars.hbs',
    'rainbow',
    'vendor/language/javascript',
    'vendor/language/html'
], function ($, Backbone, _, Handlebars, tpl, Rainbow) {

    'use strict';

    return Backbone.View.extend({

        events: {

        },

        initialize: function (options) {
            this.getData();
        },

        render: function (data) {
            var template = Handlebars.compile(tpl);
            this.$el.html(template(data)).translate();
            Rainbow.color();
        },

        getData: function () {
            var me = this;
            Hyperion.app.ajax('json/Test_json.json', {}, function (data) {
                me.render({
                    users: data
                });
            });
        }
    });
});