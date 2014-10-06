define(['jquery', 'backbone', 'text!views/Global/tpl/error.tpl'], function($, Backbone, tpl) {

    return Backbone.View.extend({

        events: {

        },

        initialize: function(options) {
            this.options = options;
            this.render(tpl)
        },

        render: function(template) {
            console.log(this.options);
            this.$el.html(_.template(template, this.getData())).translate();
        },

        getData: function () {
            return {
                options: this.options
            };
        }
    });
});