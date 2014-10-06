define(['jquery', 'dateFormat', 'backbone'], function($, DateFormat) {

    _.templateSettings = {
        evaluate: /\{\{(.+?)\}\}/g,
        interpolate: /\{\{=(.+?)\}\}/g,
        escape: /\{\{-(.+?)\}\}/g
    };

    var bodyHtml = $('body,html');

    var translateElement = function(element) {
        var dateFormat = element.data('date-format');
        var translate = function(key) {
            if(dateFormat){
                translation = DateFormat.format(DateFormat.parse(element.data('translate')), { format: dateFormat });
            } else {
                var args = key.split('|'), translation;
                key = args.shift();
                translation = Hyperion._translations[Hyperion.language][key] || key;
                while (args.length) {
                    translation = translation.replace('{}', this.translate(args.shift()));
                }
            }
            return translation;
        };

        var translation = translate(element.data('translate'));

        if (element.is('input')) {
            element.attr('placeholder', translation);
        } else if(element.is('optgroup')) {
            element.attr('label', translation);
        } else {
            element.html(translation);
        }
    };

    $.fn.extend({
        translate: function() {
            var toTranslate = this.find('[data-translate]').not('.do-not-translate');
            if (toTranslate.length === 0 && this.data('translate')) {
                translateElement(this);
            } else {
                $.each(toTranslate, function() {
                    translateElement($(this));
                });
            }

            return this;
        },
        toJSON: function(attr) {
            attr = attr || 'name';
            var elements = this.find('input, select, textarea'), json = {};
            $.each(elements, function() {
                var tmp = $(this);
                if ((!tmp.is(':disabled') && tmp.attr(attr) && !tmp.is(':radio') && !tmp.is(':checkbox')) || (tmp.is(':radio') && tmp.is(':checked')) || (tmp.is(':checkbox') && tmp.is(':checked'))) {
                    json[tmp.attr(attr)] = tmp.val();
                }
            });
            return json;
        },
        onAvailable: function(fn) {
            var selector = this.selector, element = $(selector), timer;
            if (this.length > 0) {
                fn.call(this, element);
            } else {
                timer = setInterval(function() {
                    element = $(selector);
                    if (element.length > 0) {
                        fn.call(element, element);
                        clearInterval(timer);
                    }
                }, 150);
            }
        },
        scrollTo: function(delay) {
            delay = delay || 500;
            $(bodyHtml).animate({
                scrollTop: this.offset().top
            }, delay, 'swing');
        },
        are: function(selector) {
            return !!selector && this.filter(selector).length === this.length;
        }
    });
});