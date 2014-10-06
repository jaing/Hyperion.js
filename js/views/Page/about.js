define(['jquery', 'backbone',
    'text!views/Page/tpl/about.tpl'
], function($, Backbone, tpl) {

    return Backbone.View.extend({

        events: {

        },

        initialize: function() {
            this.render(tpl)
        },

        render: function(template) {
            this.$el.html(_.template(template, this.getData())).translate();
        },

        getData: function () {
            var a = new Date();
            a = a.getDate();
            return {
                no: a
            };
        }
    });
});