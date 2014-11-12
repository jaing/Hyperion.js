define(['jquery', 'backbone', 'underscore', 'text!./tpl/backboneForm.tpl', 'list'], function ($, Backbone, _, tpl) {
    'use strict';

    return Backbone.View.extend({

        events: {

        },

        initialize: function () {
            this.render(tpl);
        },

        render: function (template) {
            this.$el.html(_.template(template, this.getData())).translate();
            var UserModel = Backbone.Model.extend({
                    schema: {
                        title: {
                            type: 'Select',
                            options: ['Mr', 'Mrs', 'Ms']
                        },
                        name: 'Text',
                        email: {
                            validators: ['required', 'email']
                        },
                        birthday: 'Date',
                        password: 'Password',
                        notes: {
                            type: 'List',
                            itemType: 'Text'
                        }
                    }
                }),
                user = new UserModel(),
                form = new Backbone.Form({
                    model: user
                }).render();

            form.on('name:blur email:blur', function (form, editor) {
                form.fields[editor.key].validate();
            });


            this.$el.find('.form').append(form.el);
        },

        getData: function () {
            return {};
        }
    });
});