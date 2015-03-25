(function () {
	"use strict";

	angular.module('app')
		.controller('PhotosController', PhotosController);

	/******/

	function PhotosController($firebaseArray, FB_URL) {
		var fbRef = (new Firebase(FB_URL)).limitToLast(5);
		this.photos = $firebaseArray(fbRef);
	}

	PhotosController.$inject = ['$firebaseArray', 'FB_URL'];
})();