define(['jquery', 'backbone', 'underscore', 'text!./tpl/toJson.tpl', 'rainbow', 'vendor/language/javascript'], function ($, Backbone, _, tpl, Rainbow) {
    'use strict';

    return Backbone.View.extend({

        events: {
            'submit #sample-form': 'handleSubmit'
        },

        initialize: function () {
            this.render(tpl);
        },

        render: function (template) {
            this.$el.html(_.template(template, this.getData())).translate();
        },

        getData: function () {
            return {};
        },

        handleSubmit: function (e) {
            e.preventDefault();
            var me = this;
            Rainbow.color(JSON.stringify($(e.currentTarget).toJSON(), null, 2), 'javascript', function (highlightedCode) {
                me.$el.find('#toJsonResult').html(highlightedCode);
            });
        }
    });
});