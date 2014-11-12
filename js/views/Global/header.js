define(['jquery', 'backbone', 'underscore', 'handlebars', 'text!views/Global/tpl/header.hbs'], function ($, Backbone, _, Handlebars, tpl) {
    'use strict';

    return Backbone.View.extend({

        events: {
            'click #select-language a': 'changeLanguage'
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
        },

        changeLanguage: function (e) {
            e.preventDefault();
            Hyperion.language = $(e.currentTarget).data('lang');
            Hyperion.app.ajax('json/' + Hyperion.language + '.json', {}, function (data) {
                Hyperion._translations[Hyperion.language] = data;
                $('body').translate();
            });
        }
    });
});