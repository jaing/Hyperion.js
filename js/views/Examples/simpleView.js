define(['jquery', 'backbone', 'text!./tpl/simpleView.tpl', 'vendor/language/javascript', 'vendor/language/html'], function ($, Backbone, tpl) {

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