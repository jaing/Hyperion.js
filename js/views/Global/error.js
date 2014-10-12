define(['jquery', 'backbone', 'underscore', 'text!views/Global/tpl/error.tpl'], function ($, Backbone, _, tpl) {
    'use strict';

    return Backbone.View.extend({

        events: {

        },

        initialize: function (options) {
            this.options = options;
            this.render(tpl);
        },

        render: function (template) {
            this.$el.html(_.template(template, this.getData())).translate();
        },

        getData: function () {
            return {
                options: this.options
            };
        }
    });
});