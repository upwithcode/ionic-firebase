(function () {
	"use strict";

	angular.module('app')
		.controller('CameraController', CameraController);

	/******/

	function CameraController($ionicLoading, CameraService, PhotoService, GeoLocationService) {
		var takenPicture,
			currentPosition;

		this.takePicture = takePicture;
		this.showPopup = showPopup;

		/******/

		function takePicture() {
			CameraService
				.takePicture()
				.then(function (picture) {
					takenPicture = 'data:image/jpeg;base64,' + picture;

					return GeoLocationService.getCurrentPosition();
				})
				.then(function (position) {
					currentPosition = position;

					return GeoLocationService.getAddress(position);
				})
				.then(function (location) {
					return PhotoService.savePhoto({
						picture: takenPicture,
						position: currentPosition,
						location: location,
						like: 0
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