define(['jquery', 'backbone', 'underscore', 'handlebars', 'text!views/Page/tpl/index.hbs'], function ($, Backbone, _, Handlebars, tpl) {
    'use strict';

    return Backbone.View.extend({

        events: {

        },

        initialize: function () {
            this.render(tpl);
        },

        render: function () {
            var template = Handlebars.compile(tpl);
            this.$el.html(template()).translate();
        },

        getData: function () {
            return {};
        }
    });
});