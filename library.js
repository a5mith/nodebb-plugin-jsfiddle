(function (module) {
	"use strict";

	var jsFiddle = {},
		embed = '<iframe width="100%" height="300" src="http://jsfiddle.net/$2/embedded/result,js,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>',
		embedJsBin = '<iframe width="100%" height="300" src="http://jsbin.com/$2" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'


	jsFiddle.parse = function (postContent, callback) {
		postContent.postData.content = postContent.postData.content
			.replace(/<a(.?|.+)href=["|']http[s]?:\/\/jsfiddle\.net\/(\w+)\/?["|'](.?|.+)>.+<\/a>/g, embed)
			.replace(/<a(.?|.+)href=["|']http[s]?:\/\/jsbin\.com\/(\w+\/edit\?[\w|,]+)\/?["|'](.?|.+)>.+<\/a>/g, embedJsBin);
		callback(null, postContent);
	};

	module.exports = jsFiddle;
}(module));
