<div class="container">
    <div class="text-center e-m">
        <h1>This is not the page you're looking for.</h1>
        <h2>Move along... Move along...</h2>
    </div>
    <div class="alert fade in" role="alert">
        {{ _.each(options.id.requireModules, function(item,key) { }}
            <strong>Script Error:</strong> {{=item}}. Please make sure the VIEW file exist.
        {{ }); }}
        <p></p>
        <ul>
            <li></li>
        </ul>
    </div>
    <div class="clearfix e-c">
        <button class="btn btn-success pull-right" onclick="window.history.back()">Go to previous page</button>
    </div>
    <br/><br/>
</div>