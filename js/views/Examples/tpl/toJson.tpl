<div class="container">
    <form class="form-horizontal" id="sample-form">
        <fieldset>
            <legend data-translate="label.legend"></legend>
            <div class="form-group">
                <label for="inputEmail" class="col-lg-2 control-label" data-translate="label.email"></label>

                <div class="col-lg-10">
                    <input name="email" type="text" class="form-control" id="inputEmail" data-translate="label.email">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword" class="col-lg-2 control-label" data-translate="label.password"></label>

                <div class="col-lg-10">
                    <input name="password" type="password" class="form-control" id="inputPassword"
                           data-translate="label.password">

                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="rememberMe"> <span data-translate="label.rememberMe"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="textArea" class="col-lg-2 control-label" data-translate="label.testTextArea"></label>
                <div class="col-lg-10">
                    <textarea name="someTextArea" class="form-control" rows="3" id="textArea"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-2 control-label" data-translate="label.radioButtons"></label>

                <div class="col-lg-10">
                    <div class="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
                            <span data-translate="label.option1"></span>
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                            <span data-translate="label.option2"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="select" class="col-lg-2 control-label" data-translate="label.selectBoxes"></label>

                <div class="col-lg-10">
                    <select name="select1" class="form-control" id="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <br>
                    <select name="select2" multiple="" class="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                    <button class="btn btn-default" data-translate="label.cancel"></button>
                    <button type="submit" class="btn btn-primary" data-translate="label.submit"></button>
                </div>
            </div>
        </fieldset>
    </form>
    <div id="toJsonResultContainer" class="well well-sm">
        <span data-translate="label.toJsonResult"></span>
        <pre><code data-language="javascript" id="toJsonResult"></code></pre>
    </div>
</div>