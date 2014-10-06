<div class="container">
    <h1 data-translate="label.menu.simpleView"></h1>
    <h2 data-translate="label.simpleView.howToCreateSimpleView"></h2>
    <div class="clearfix">
        <img src="images/simpleViewFolder.png" class="img-thumbnail pull-right" alt=""/>
        <p data-translate="label.simpleView.simpleView.text"></p>
        <p data-translate="label.simpleView.simpleView.text2"></p>
        <p data-translate="label.simpleView.simpleView.text3"></p>
        <p>
            <code>
                index.html#page/Examples/simpleView
            </code>
        </p>
        <p data-translate="label.simpleView.simpleView.text4"></p>
    </div>


    <ul class="nav nav-tabs" role="tablist">
        <li class="active"><a href="#simpleView-js" role="tab" data-toggle="tab">JS</a></li>
        <li><a href="#simpleView-tpl" role="tab" data-toggle="tab">TPL</a></li>
    </ul>

    <div class="tab-content">
        <div class="tab-pane active" id="simpleView-js">
            <pre><code data-language="javascript">
define([
    'jquery',
    'backbone',
    // This is how we are adding template file into the view
    'text!./tpl/simpleView.tpl'],
function ($, Backbone, tpl) {
    return Backbone.View.extend({

        initialize: function (options) {
            // Rendering view on initialization
            this.render(tpl);
        },

        render: function (template) {
            this.$el.html(_.template(template, this.getData())).translate();
        },

        getData: function () {
            return {};
        }
    });
});
            </code></pre>
        </div>
        <div class="tab-pane" id="simpleView-tpl">
            <pre><code data-language="html">
<!-- I added do-not-translate class just to avoid translation engine to translate this elements -->
<div class="container">
    <h1 class="do-not-translate" data-translate="label.menu.simpleView"></h1>
    <h2 class="do-not-translate" data-translate="label.simpleView.howToCreateSimpleView"></h2>
    <div class="clearfix">
        <img src="images/simpleViewFolder.png" class="img-thumbnail pull-right" alt=""/>
        <p class="do-not-translate" data-translate="label.simpleView.simpleView.text"></p>
        <p class="do-not-translate" data-translate="label.simpleView.simpleView.text2"></p>
        <p class="do-not-translate" data-translate="label.simpleView.simpleView.text3"></p>
        <p>
            <code>
                index.html#page/Examples/simpleView
            </code>
        </p>
        <p class="do-not-translate" data-translate="label.simpleView.simpleView.text4"></p>
    </div>
</div>
            </code></pre>
        </div>

    </div>

    <p data-translate="label.simpleView.simpleView.text5"></p>

</div>