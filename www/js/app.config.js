(function () {
	"use strict";

	angular.module('app')
		.config(config);

	/******/

	function config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('app', {
				url: "/app",
				abstract: true,
				templateUrl: "templates/menu.html"
			})
			.state('app.photos', {
				url: "/photos",
				views: {
					'menuContent': {
						templateUrl: "templates/photos.html",
						controller: 'PhotosController as Photos'
					}
				}

			})
			.state('app.photo', {
				url: "/photos/:photoId",
				views: {
					'menuContent': {
						templateUrl: "templates/photo.html",
						controller: 'PhotoController as Photo'
					}
				}
			})
			.state('app.scoreboard', {
				url: "/scoreboard",
				views: {
					'menuContent': {
						templateUrl: "templates/scoreboard.html"
					}
				}
			});

		$urlRouterProvider.otherwise('/app/photos');
	}

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
})();
