(function () {
	"use strict";

	angular.module('app')
		.controller('PhotosController', PhotosController);

	/******/

	function PhotosController() {
		this.photos = [
			{
				id: 1,
				url: 'http://lorempixel.com/800/400/',
				lon: '',
				lat: ''
			},
			{
				id: 2,
				url: 'http://lorempixel.com/800/400/',
				lon: '',
				lat: ''
			},
			{
				id: 3,
				url: 'http://lorempixel.com/800/400/',
				lon: '',
				lat: ''
			},
			{
				id: 4,
				url: 'http://lorempixel.com/800/400/',
				lon: '',
				lat: ''
			}
		];
	}
})();