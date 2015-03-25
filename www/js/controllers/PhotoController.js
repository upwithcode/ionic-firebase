(function () {
	"use strict";

	angular.module('app')
		.controller('PhotoController', PhotoController);

	/******/

	function PhotoController($scope, $stateParams, $firebaseObject, FB_URL) {
		var photoRef = new Firebase(FB_URL + '/' + $stateParams.photoId),
			photo = $firebaseObject(photoRef);

		photo.$bindTo($scope, 'photo');
		$scope.like = like;

		/******/

		function like() {
			$scope.photo.like++;
		}
	}
})();