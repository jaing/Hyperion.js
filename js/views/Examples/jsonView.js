define([
    'jquery',
    'backbone',
    'text!./tpl/jsonView.tpl',
    'vendor/language/javascript',
    'vendor/language/html'
], function ($, Backbone, tpl) {

    'use strict';

    return Backbone.View.extend({

        events: {

        },

        initialize: function (options) {
            this.getData();
        },

        render: function (data) {
            this.$el.html(_.template(
                tpl,
                data
            )).translate();

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