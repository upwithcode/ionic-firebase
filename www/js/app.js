(function () {
	"use strict";

	angular.module('app', ['ionic', 'ngCordova', 'ngResource', 'firebase'])
		.constant('FB_URL', 'https://ionic-photos.firebaseio.com')
		.run(run);

	/******/

	function run($ionicPlatform) {
		$ionicPlatform.ready(function () {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}
		});
	}

	run.$inject = ['$ionicPlatform'];
})();

