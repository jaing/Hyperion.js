define([
    'jquery',
    'backbone',
    'underscore',
    'text!./tpl/jsonView.tpl',
    'rainbow',
    'vendor/language/javascript',
    'vendor/language/html'
], function ($, Backbone, _, tpl, Rainbow) {

    'use strict';

    var UsersCollection = Backbone.Collection.extend();

    return Backbone.View.extend({

        events: {

        },

        initialize: function (options) {
            this.collection = new UsersCollection();
            this.getData();
        },

        render: function (data) {
            this.$el.html(_.template(
                tpl,
                data
            )).translate();

            Rainbow.color();
        },

        getData: function () {
            var me = this;
            Hyperion.app.ajax('json/Test_json.json', {}, function (data) {
                $.each(data, function (index, val) {
                    me.collection.add(val);
                });
                me.render({
                    users: me.collection.toJSON()
                });
            });
        }
    });
});