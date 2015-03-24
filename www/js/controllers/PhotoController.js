(function () {
	"use strict";

	angular.module('app')
		.controller('PhotoController', PhotoController);

	/******/

	function PhotoController() {
		this.photo = {
			url: 'http://lorempixel.com/800/400/',
			lon: '',
			lat: ''
		};
	}
})();