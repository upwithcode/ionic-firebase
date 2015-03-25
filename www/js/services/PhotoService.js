(function () {
	"use strict";

	angular.module('app')
		.factory('PhotoService', PhotoService);

	/******/

	function PhotoService($q, $timeout) {
		return {
			savePhoto: function () {
				var dfd = $q.defer();

				$timeout(function () {
					dfd.resolve();
				}, 0);

				return dfd.promise;
			}
		};

		/******/
	}

	PhotoService.$inject = ['$q', '$timeout'];
})();