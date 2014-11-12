define(['jquery', 'backbone', 'underscore', 'handlebars', 'text!views/Global/tpl/error.hbs'], function ($, Backbone, _, Handlebars, tpl) {
    'use strict';

    return Backbone.View.extend({

        events: {

        },

        initialize: function (options) {
            this.options = options;
            this.render(tpl);
        },

        render: function () {
            var template = Handlebars.compile(tpl);
            this.$el.html(template(this.getData())).translate();
        },

        getData: function () {
            return {
                options: this.options
            };
        }
    });
});