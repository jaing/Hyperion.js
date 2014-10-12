<div class="container">
    <h1>How to build your project using Grunt</h1>
    <p>In state when our application is ready and we would like to create a RC it's a good time to build your project. To do this we will use <strong>Grunt</strong>.</p>
    <p>With hyperion.js we provide some useful Grunt tasks including requireJS job that is responsible for:</p>
    <ul>
        <li><strong>clean</strong> - removing build folder</li>
        <li><strong>requirejs</strong> - building project</li>
    </ul>
    <p>Since Grunt operates on node it will load dynamically custom views. You will need to edit <code>Gruntfile.js</code> only in case you want to add additional libraries.</p>
    <p>Apart from that you simply start requirejs Grunt job and inside <code>index.html</code> you will need to change:</p>

    <code>data-main="js/main" src="js/vendor/require.js"</code>
    <p>to:</p>
    <code>data-main="js/build/main" src="js/vendor/require.js"</code>
</div>