(function () {
	"use strict";

	angular.module('app')
		.controller('CameraController', CameraController);

	/******/

	function CameraController(CameraService) {
		var takenPicture;

		this.takePicture = takePicture;

		/******/

		function takePicture() {
			CameraService
				.takePicture()
				.then(function (picture) {
					takenPicture = picture;
				});;
		}
	}

	CameraController.$inject = ['CameraService'];
})();