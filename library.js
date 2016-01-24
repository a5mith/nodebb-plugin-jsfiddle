(function (module) {
	"use strict";

	var jsFiddle = {},
		embed = '<iframe width="100%" height="300" src="http://jsfiddle.net/$1/embedded/html,css,js,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>',
		embedJsBin = '<iframe width="100%" height="300" src="http://jsbin.com/$1" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'


	jsFiddle.parse = function (postContent, callback) {
		postContent.postData.content = postContent.postData.content
			//We just want the first one or two segments after host name
			.replace(/<a.+?href=["|']http[s]?:\/\/jsfiddle\.net((\/\w+){0,2}).+?["|'].+?>.+<\/a>/g, embed)
			//We just the first one or more segments after host name
			.replace(/<a.+?href=["|']http[s]?:\/\/jsbin\.com\/([\w|\/|\,|?]+)+["|'].+?>.+<\/a>/g, embedJsBin);
		callback(null, postContent);
	};

	module.exports = jsFiddle;
}(module));
