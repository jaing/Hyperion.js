define(['handlebars'], function (Handlebars) {
    'use strict';

    Handlebars.registerHelper('log', function(data) {
        console.log(data);
    });
});