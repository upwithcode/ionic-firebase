(function () {
	"use strict";

	angular.module('app')
		.controller('CameraController', CameraController);

	/******/

	function CameraController($ionicLoading, CameraService, PhotoService, GeoLocationService) {
		var takenPicture;

		this.takePicture = takePicture;
		this.showPopup = showPopup;

		/******/

		function takePicture() {
			CameraService
				.takePicture()
				.then(function (picture) {
					takenPicture = picture;

					return GeoLocationService.getCurrentPosition();
				})
				.then(function (position) {
					return PhotoService.savePhoto({
						picture: takenPicture,
						position: position
					});
				})
				.then(function () {
					this.showPopup();
				}.bind(this));
		}

		function showPopup() {
			$ionicLoading.show({
				template: 'Photo has been saved!',
				duration: 1000
			});
		}
	}

	CameraController.$inject = ['$ionicLoading', 'CameraService', 'PhotoService', 'GeoLocationService'];
})();