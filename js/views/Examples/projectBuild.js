define([
    'jquery',
    'backbone',
    'underscore',
    'text!./tpl/projectBuild.tpl',
    'rainbow',
    'vendor/language/javascript',
    'vendor/language/html'
], function ($, Backbone, _, tpl, Rainbow) {

    'use strict';

    return Backbone.View.extend({

        events: {

        },

        initialize: function (options) {
            this.render(tpl);
        },

        render: function (template) {
            this.$el.html(_.template(template, this.getData())).translate();
            Rainbow.color();
        },

        getData: function () {
            return {};
        }
    });
});