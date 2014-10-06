define(['jquery', 'backbone', 'text!./tpl/main.tpl', 'rainbow', 'vendor/language/javascript', 'vendor/language/html'], function ($, Backbone, tpl, Rainbow) {
    'use strict';

    return Backbone.View.extend({

        events: {
            'click #examples-nav a': 'handleNavigation'
        },

        initialize: function (options) {
            this.render(tpl);
            this.navigate(options.id);
        },

        render: function (template) {
            this.$el.html(_.template(template, this.getData())).translate();
            Rainbow.color();
        },

        getData: function () {
            return {};
        },

        handleNavigation: function (e) {
            e.preventDefault();
            this.navigate(e.currentTarget.href.split('#')[1]);
        },

        navigate: function (id) {
            if (id !== undefined) {
                this.$el.find('#' + id).scrollTo();
                var elements = location.href.split('#')[1].split('/');
                elements[3] = id;
                Backbone.history.navigate(elements.join('/'), {replace: true});
            }
        }
    });
});