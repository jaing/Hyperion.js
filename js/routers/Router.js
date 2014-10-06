define(['jquery', 'backbone','views/Global/application'], function($, Backbone, ApplicationView) {


    return Backbone.Router.extend({

        routes: {
            '' : 'displayStartPage',
            'page/:page(/):action(/)(:id)' : 'displayPage'
        },
        initialize: function() {
            this.loadApplication();
        },

        loadApplication: function() {
            
            // Translating all labels
            $('body').translate();

            /**
             * Initializing a global application view with application wide methods like loading.
             */
            Hyperion.app = new ApplicationView({
                el: 'body'
            });
        },

        /**
         * Loading page
         * @param  {string} page   id of requested page
         * @param  {string} action default = main
         * @param  {int} id        passing id if needed
         */
        displayPage: function(page, action, id) {
            var me = this;

            action = action || 'main';

            $('#app-container').html('');

            /**
             * Creating page container if it doesn't exist
             */
            if ($('#page-' + page).length < 1) {
                var $page = $("<div>", {
                    id: 'page-' + page + action,
                    class: 'page slideLeft'
                });
                $('#app-container').append($page);
            }


            Hyperion.app.loading(true);

            /**
             * Loading requested view file and passing options if needed.
             */
            require(['views/' + page + '/' + action], function(View) {
                var viewOptions = {
                    el: '#page-' + page + action
                };
                if (id) {
                    _.extend(viewOptions, {
                        id: id
                    })
                }
                Hyperion.app.loading(false);
                Hyperion.views[page] = new View(viewOptions);
            }, function(err) {
                me.displayPage('Global','error',err);
            });
        },

        displayStartPage: function() {
            Backbone.history.navigate('page/Page/main', {
                replace: true,
                trigger: true
            });
        }

    });
});