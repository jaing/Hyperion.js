define(['jquery', 'backbone', 'text!views/Global/tpl/header.tpl'], function($, Backbone, tpl) {

    return Backbone.View.extend({

        events: {
            'click #select-language a': 'changeLanguage'
        },

        initialize: function(options) {
	        this.options = options;
            this.render(tpl)
        },

        render: function(template) {
            this.$el.html(_.template(template, this.getData())).translate();
        },

        getData: function () {
            return {
	            options: this.options
            };
        },

        changeLanguage: function (e) {
            e.preventDefault();
            var lang = $(e.currentTarget).data('lang');
            Hyperion.language = lang;
            Hyperion.app.ajax('json/' + Hyperion.language + '.json',{},function(data){
                Hyperion._translations[Hyperion.language] = data;
                $('body').translate();
            });
        }
    });
});