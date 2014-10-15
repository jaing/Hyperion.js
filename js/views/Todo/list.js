define([
    'jquery',
    'backbone',
    'underscore',
    'handlebars',
    'text!./tpl/list.hbs',
    'text!./tpl/task.hbs'
], function ($, Backbone, _, Handlebars, tpl, tplTask) {

    'use strict';

    var TodoModel = Backbone.Model.extend({
            defaults: {
                'date': new Date()
            },
            validate: function (attrs) {
                if (!attrs.title) {
                    return 'title';
                }
                if (!attrs.body) {
                    return 'body';
                }
            }
        }),
        TodoCollection = Backbone.Collection.extend({
            model: TodoModel
        });

    return Backbone.View.extend({

        events: {
            'click #add-task button' : 'submitForm'
        },

        initialize: function () {
            this.collection = new TodoCollection();
            this.collection.on('add', this.addTodo, this);
            this.collection.on('invalid', this.showError, this);
            this.render();
        },

        render: function () {
            var template = Handlebars.compile(tpl);
            this.$el.html(template()).translate();
            this.getData();
        },

        getData: function () {
            var me = this;
            Hyperion.app.ajax('json/todo.json', {}, function (data) {
                me.collection.add(data, {validate: true});
            });
        },

        addTodo: function (e) {
            this.$el.find('#add-task').find('input,textarea').val('');
            var template = Handlebars.compile(tplTask);
            this.$el.find('.todo-list').append(template(e.toJSON()));
        },

        showError: function (collection, field) {
            this.$el.find('#add-task [name=' + field + ']').parent().addClass('has-error');
        },

        submitForm: function (e) {
            e.preventDefault();
            this.$el.find('#add-task').find('.form-group').removeClass('has-error');
            var data = this.$el.find('#add-task').toJSON();
            this.collection.add(data, {validate: true});
        }
    });
});