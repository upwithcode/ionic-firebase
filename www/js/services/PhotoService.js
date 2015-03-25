(function () {
	"use strict";

	angular.module('app')
		.factory('PhotoService', PhotoService);

	/******/

	function PhotoService($firebaseArray, FB_URL) {
		var fbRef = new Firebase(FB_URL);

		return {
			savePhoto: function (photo) {
				var photos = $firebaseArray(fbRef);
				return photos.$add(photo);
			}
		};

		/******/
	}

	PhotoService.$inject = ['$firebaseArray', 'FB_URL'];
})();