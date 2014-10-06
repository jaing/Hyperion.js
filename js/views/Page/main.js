define(['jquery', 'backbone',
    'text!views/Page/tpl/index.tpl'
    ], function ($, Backbone, tpl) {
    'use strict';

    return Backbone.View.extend({

        events: {

        },

        initialize: function () {
            this.render(tpl);
        },

        render: function (template) {
            this.$el.html(_.template(template, this.getData())).translate();
        },

        getData: function () {
            return {};
        }
    });
});