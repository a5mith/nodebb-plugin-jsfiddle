(function (module) {
	"use strict";

	var jsFiddle = {},
		embed = '<iframe width="100%" height="300" src="http://jsfiddle.net/$1" allowfullscreen="allowfullscreen" frameborder="0"></iframe>',
		embedJsBin = '<iframe width="100%" height="300" src="http://jsbin.com/$1" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'


	jsFiddle.parse = function (postContent, callback) {
		postContent.postData.content = postContent.postData.content
			.replace(/<a.+?href=["|']http[s]?:\/\/jsfiddle\.net\/([\w|\/|\,|?]+)+["|'].+?>.+<\/a>/g, embed)
			.replace(/<a.+?href=["|']http[s]?:\/\/jsbin\.com\/([\w|\/|\,|?]+)+["|'].+?>.+<\/a>/g, embedJsBin);
		callback(null, postContent);
		console.log(postContent.postData.content)
	};

	module.exports = jsFiddle;
}(module));
