
<div class="container">
    <div class="row">
        <div class="col-md-3">
            <nav id="examples-nav">
                <ul>
                    <li data-translate="label.examples.menu" class="li-label"></li>
                    <li>
                        <a href="#jquery">jQuery functions</a>
                        <ul>
                            <li>
                                <a href="#jquery-translate">translate()</a>
                            </li>
                            <li>
                                <a href="#jquery-toJson">toJSON()</a>
                            </li>
                            <li>
                                <a href="#jquery-onAvailable">onAvailable(callback)</a>
                            </li>
                            <li>
                                <a href="#jquery-are">are(selector)</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="col-md-9">


    <h1 id="jquery">jQuery functions</h1>

    <h2 id="jquery-translate">translate()</h2>

    <h2 id="jquery-toJson">toJSON()</h2>

    <p>toJSON() function is used to create an JavaScript object based on a form data. Object keys are gathered from names of the form inputs and object values are input values.</p>

    <p>Example usage:</p>

    <ul class="nav nav-tabs" role="tablist">
        <li class="active"><a href="#jquery-toJson-js" role="tab" data-toggle="tab">JS</a></li>
        <li><a href="#jquery-toJson-html" role="tab" data-toggle="tab">HTML</a></li>
        <li><a href="#jquery-toJson-result" role="tab" data-toggle="tab">Result</a></li>
    </ul>

    <div class="tab-content">
        <div class="tab-pane active" id="jquery-toJson-js">
            <pre><code data-language="javascript">Backbone.View.extend({

    events: {
        'submit #sample-form' : 'handleSubmit'
    },

    /*...*/

    handleSubmit: function(e) {
        e.preventDefault();
        var result = $(e.currentTarget).toJSON();
    }
});</code></pre>
        </div>
        <div class="tab-pane" id="jquery-toJson-html">
            <pre><code data-language="html"><form class="form-horizontal" id="sample-form">
    <fieldset>
        <input name="email" type="text" value="test@test.com">
        <textarea name="someTextArea">test</textarea>
        <input type="radio" name="optionsRadios" value="1">
        <input type="radio" name="optionsRadios" value="2" checked="checked">
        <select name="select1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <button type="submit"></button>
    </fieldset>
</form></code></pre>
        </div>
        <div class="tab-pane" id="jquery-toJson-result">
            <pre><code data-language="javascript">{
  "email": "test@test.com",
  "someTextArea": "test",
  "optionsRadios": "1",
  "select1": "1"
}</code></pre>
        </div>
    </div>

    <p>Please check the demo <a href="#page/Examples/toJson">here</a>.</p>

    <h2 id="jquery-onAvailable">onAvailable(callback)</h2>

    <p>This function is used to execute provided callback once the element mentioned by html selector is available in DOM.</p>

    <p>Example usage:</p>

    <ul class="nav nav-tabs" role="tablist">
        <li class="active"><a href="#jquery-onAvailable-js" role="tab" data-toggle="tab">JS</a></li>
        <li><a href="#jquery-onAvailable-html" role="tab" data-toggle="tab">HTML</a></li>
        <li><a href="#jquery-onAvailable-result" role="tab" data-toggle="tab">Result</a></li>
    </ul>

    <div class="tab-content">
        <div class="tab-pane active" id="jquery-onAvailable-js">
            <pre><code data-language="javascript">$('#test').onAvailable(function(element) {
    element.translate();
});

setTimeout(function() { //simulates ajax call, template grab or anything
    $('#test-container').append('<div id="test"><span data-translate="label.sample.test"></span></div>');
}, 1000);</code></pre>
        </div>
        <div class="tab-pane" id="jquery-onAvailable-html">
            <pre><code data-language="html"><div id="test-container"></div></code></pre>
        </div>
        <div class="tab-pane" id="jquery-onAvailable-result">
            <pre><code data-language="html"><div id="test-container">
    <div id="test">
        <span data-translate="label.sample.test">Sample test</span>
    </div>
</div></code></pre>
        </div>
    </div>

    <h2 id="jquery-are">are(selector)</h2>

    <p>Simple function which expands <a href="http://api.jquery.com/is/">jQuery is()</a> functionality. is() returns true if at least one of elements matches the given arguments. are() returns true if all of them matches the given arguments.</p>

    <ul class="nav nav-tabs" role="tablist">
        <li class="active"><a href="#jquery-are-js" role="tab" data-toggle="tab">JS</a></li>
        <li><a href="#jquery-are-html" role="tab" data-toggle="tab">HTML</a></li>
    </ul>

    <div class="tab-content">
        <div class="tab-pane active" id="jquery-are-js">
            <pre><code data-language="javascript">$('input[type=checkbox]').is(':checked'); //returns true
$('input[type=checkbox]').are(':checked'); //returns false, will return true if all checkboxes are checked
$('#container > *').is(':input'); //returns true
$('#container > *').are(':input'); //returns false, will return true if all elements are inputs</code></pre>
        </div>
        <div class="tab-pane" id="jquery-are-html">
            <pre><code data-language="html"><div id="container">
    <input type="checkbox" checked="checked">
    <input type="checkbox" checked="checked">
    <input type="checkbox">
    <label></label>
    <input type="checkbox">
</div></code></pre>
        </div>
    </div>
        </div>
    </div>
</div>