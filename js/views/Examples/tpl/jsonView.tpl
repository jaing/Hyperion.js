<div class="container">
    <h1 data-translate="label.menu.jsonView"></h1>
    <h2 data-translate="label.jsonView.howToCreateJsonView"></h2>
    <p data-translate="label.jsonView.text"></p>
    <p data-translate="label.jsonView.text2"></p>
    <p data-translate="label.jsonView.text3"></p>
    <h2 data-translate="label.example"></h2>
    <table class="table">
        <thead>
            <tr>
                <th>no.</th>
                <th>name</th>
                <th></th>
                <th>balance</th>
                <th>email</th>
                <th>tags</th>
            </tr>
        </thead>
        <tbody>
            {{ _.each(users, function(user,key) { }}
                <tr>
                    <td>{{=key}}</td>
                    <td>{{=user.name}}</td>
                    <td>
                        {{ if (user.isActive) { }}
                            <span class="label label-success">Active</span>
                        {{ } else { }}
                            <span class="label label-danger">Not active</span>
                        {{}}}
                    </td>
                    <td>{{=user.balance}}</td>
                    <td><a href="mailto:{{=user.email}}">{{=user.email}}</a></td>
                    <td>
                        {{ _.each(user.tags, function(tag,key) { }}
                            <span class="label label-info">{{=tag}}</span>
                        {{ }); }}
                    </td>
                </tr>
            {{ }); }}
        </tbody>
    </table>
    <ul class="nav nav-tabs" role="tablist">
        <li class="active"><a href="#jsonView-js" role="tab" data-toggle="tab">JS</a></li>
        <li><a href="#jsonView-tpl" role="tab" data-toggle="tab">TPL</a></li>
        <li><a href="#jsonView-json" role="tab" data-toggle="tab">JSON</a></li>
    </ul>

    <div class="tab-content">
        <div class="tab-pane active" id="jsonView-js">
            <pre><code data-language="javascript">
define([
    'jquery',
    'backbone',
    'text!./tpl/jsonView.tpl'
], function ($, Backbone, tpl) {

    'use strict';

    return Backbone.View.extend({

        initialize: function (options) {
            this.getData();
        },

        render: function (data) {
            this.$el.html(_.template(
                tpl,
                data
            )).translate();
        },

        getData: function () {
            var me = this;
            Hyperion.app.ajax('json/Test_json.json', {}, function (data) {
                me.render({
                    users: data
                });
            });
        }
    });
});
            </code></pre>
        </div>
        <div class="tab-pane" id="jsonView-tpl">
            <pre><code data-language="html">
&#60;table class="table"&#62;
    &#60;thead&#62;
    &#60;tr&#62;
        &#60;th&#62;no.&#60;/th&#62;
        &#60;th&#62;name&#60;/th&#62;
        &#60;th&#62;&#60;/th&#62;
        &#60;th&#62;balance&#60;/th&#62;
        &#60;th&#62;email&#60;/th&#62;
        &#60;th&#62;tags&#60;/th&#62;
    &#60;/tr&#62;
    &#60;/thead&#62;
    &#60;tbody&#62;
    &#123;&#123; _.each(users, function(user,key) { &#125;&#125;
        &#60;tr&#62;
            &#60;td&#62;&#123;&#123;=key&#125;&#125;&#60;/td&#62;
            &#60;td&#62;&#123;&#123;=user.name&#125;&#125;&#60;/td&#62;
            &#60;td&#62;
                &#123;&#123; if (user.isActive) { &#125;&#125;
                    &#60;span class="label label-success"&#62;Active&#60;/span&#62;
                &#123;&#123; } else { &#125;&#125;
                    &#60;span class="label label-danger"&#62;Not active&#60;/span&#62;
                &#123;&#123;&#125;&#125;}
            &#60;/td&#62;
            &#60;td&#62;&#123;&#123;=user.balance&#125;&#125;&#60;/td&#62;
            &#60;td&#62;&#60;a href="mailto:&#123;&#123;=user.email&#125;&#125;"&#62;&#123;&#123;=user.email&#125;&#125;&#60;/a&#62;&#60;/td&#62;
            &#60;td&#62;
                &#123;&#123; _.each(user.tags, function(tag,key) { &#125;&#125;
                    &#60;span class="label label-info"&#62;&#123;&#123;=tag&#125;&#125;&#60;/span&#62;
                &#123;&#123; }); &#125;&#125;
            &#60;/td&#62;
        &#60;/tr&#62;
    &#123;&#123; }); &#125;&#125;
    &#60;/tbody&#62;
&#60;/table&#62;
            </code></pre>
        </div>
        <div class="tab-pane" id="jsonView-json">
            <pre><code data-language="javascript">
    {
        "_id": "543273d3b5d2352d766d0205",
        "index": 0,
        "guid": "0472b03f-384b-4797-9582-07dd3342c8ee",
        "isActive": false,
        "balance": "$1,106.10",
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "eyeColor": "green",
        "name": "Virginia Peck",
        "gender": "female",
        "company": "ACCEL",
        "email": "virginiapeck@accel.com",
        "phone": "+1 (857) 445-2075",
        "address": "470 Louisiana Avenue, Chical, Alaska, 7663",
        "about": "Nisi est ipsum Lorem officia et dolore et ea. Nisi officia aute ea et anim in. Labore labore culpa ex aute reprehenderit occaecat magna id dolor Lorem tempor excepteur tempor. Velit cillum quis ut aliqua minim eu enim et dolore exercitation ipsum mollit. Id enim eu dolor aliqua laborum nostrud esse.\r\n",
        "registered": "2014-05-21T17:28:19 -02:00",
        "latitude": 62.170086,
        "longitude": 114.75104,
        "tags": [
            "anim",
            "sint",
            "velit",
            "in",
            "magna",
            "consectetur",
            "tempor"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Penny Puckett"
            },
            {
                "id": 1,
                "name": "Glenn Curtis"
            },
            {
                "id": 2,
                "name": "Amelia Washington"
            }
        ],
        "greeting": "Hello, Virginia Peck! You have 8 unread messages.",
        "favoriteFruit": "strawberry"
    }
    </code></pre>
        </div>
    </div>


</div>