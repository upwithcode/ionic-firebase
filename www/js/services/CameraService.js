(function () {
  "use strict";

  angular.module('app')
    .factory('CameraService', CameraService);

  /******/

  function CameraService($cordovaCamera) {
    return {
      takePicture: takePicture
    };

    /******/

    function takePicture() {
	    var cameraOptions = {
		    quality: 75,
		    destinationType: Camera.DestinationType.DATA_URL,
		    sourceType: Camera.PictureSourceType.CAMERA,
		    allowEdit: true,
		    encodingType: Camera.EncodingType.JPEG,
		    targetWidth: 300,
		    targetHeight: 300,
		    popoverOptions: CameraPopoverOptions,
		    saveToPhotoAlbum: false
	    };

      return $cordovaCamera.getPicture(cameraOptions);
    }
  }

  CameraService.$inject = ['$cordovaCamera'];
})();