(function () {
	"use strict";

	angular.module('app')
		.controller('ScoreBoardController', ScoreBoardController);

	/******/

	function ScoreBoardController($firebaseArray, FB_URL) {
		var fbRef = new Firebase(FB_URL);

		this.photos = $firebaseArray(fbRef);
		this.photos.sort(compare);

		this.photos.$watch(function () {
			this.photos.sort(compare);
		}.bind(this));

		/******/

		function compare(a, b) {
			return a.like < b.like;
		}
	}

	ScoreBoardController.$inject = ['$firebaseArray', 'FB_URL'];
})();