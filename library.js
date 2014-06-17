(function(module) {
    "use strict";

    var jsFiddle = {},
        embed = '<iframe width="100%" height="300" src="http://jsfiddle.net/$1embedded/result,js,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>';


    jsFiddle.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:http?:\/\/)?(?:jsfiddle\.net)\/?(.+)">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = jsFiddle;
}(module));
