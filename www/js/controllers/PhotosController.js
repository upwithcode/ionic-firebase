(function () {
	"use strict";

	angular.module('app')
		.controller('PhotosController', PhotosController);

	/******/

	function PhotosController($firebaseArray, FB_URL) {
		this.photos = $firebaseArray(new Firebase(FB_URL));
	}

	PhotosController.$inject = ['$firebaseArray', 'FB_URL'];
})();