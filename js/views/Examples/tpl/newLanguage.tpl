<div class="container">
    <h1 data-translate="label.menu.newLanguage"></h1>
    <p data-translate="label.newLang.text"></p>
    <strong>i.e. AR.json</strong>
    <pre><code data-language="javascript">
{
    "label.EN": "English",
    "label.PL": "Polish",
    "label.example": "Example",
    "label.menu.demo": "Demo examples",
    "label.menu.newLanguage": "How to add new language",
    "label.language.select": "Select language",
    "label.menu.home": "Home"
}
    </code></pre>
    <p data-translate="label.newLang.text2"></p>
    <pre><code data-language="html">
<ul class="dropdown-menu" role="menu" id="select-language-dd">
    <li>
        <a data-lang="EN" data-translate="label.EN" href="#"></a>
    </li>
    <li>
        <a data-lang="PL" data-translate="label.PL" href="#"></a>
    </li>
</ul>
    </code></pre>
    <p data-translate="label.newLang.text3"></p>
    <pre>
        <code data-language="javascript">
define(['jquery', 'backbone', 'underscore'], function ($, Backbone, _) {
    'use strict';

    return Backbone.View.extend({

        events: {
            'click #select-language a': 'changeLanguage'
        },


        changeLanguage: function (e) {
            e.preventDefault();
            Hyperion.language = $(e.currentTarget).data('lang');
            Hyperion.app.ajax('json/' + Hyperion.language + '.json', {}, function (data) {
                Hyperion._translations[Hyperion.language] = data;
                $('body').translate();
            });
        }
    });
});
        </code>
    </pre>
    <p data-translate="label.newLang.text4"></p>
</div>