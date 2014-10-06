define(['jquery', 'backbone',
    'text!views/Page/tpl/index.tpl'
], function($, Backbone, tpl) {

    return Backbone.View.extend({

        events: {
            'click .click-me' : 'handleClick',
            'click .img-thumbnail': 'handleImgClick'
        },

        initialize: function() {
            this.render(tpl)
        },

        render: function(template) {
            this.$el.html(_.template(template, this.getData())).translate();
        },

        getData: function () {
            return {};
        },

        handleClick: function(e) {
            e.preventDefault();
            alert('Clicked!')
        },

        handleImgClick: function (e) {
            alert(321)
        }
    });
});