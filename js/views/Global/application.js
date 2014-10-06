define(['jquery', 'backbone', 'views/Global/header'

], function($, Backbone, HeaderView) {

    return Backbone.View.extend({

        events: {

        },

        initialize: function() {
            new HeaderView({
                el: $('#app-header')
            });
        },

        loading: function (on) {
            if (on) {
                $('#loading').fadeIn();
            } else {
                $('#loading').fadeOut();
            }
        },

        ajax: function(url, data, done, type) {

            data = data || {};
            done = done || function(){};
            type = type || 'GET';
            
            Hyperion.app.loading(true);
            $.ajax({
                url: url,
                type: type,
                data: data,
            })
            .done(done).always(function(){
                Hyperion.app.loading(false);
            });
        }
    });
});