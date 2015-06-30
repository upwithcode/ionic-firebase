(function () {
	"use strict";

	angular.module('app')
		.constant('GoogleGeocode', 'http://maps.googleapis.com/maps/api/geocode/json?latlng=:lat,:long')
		.factory('GeoLocationService', GeoLocationService);

	/******/

	function GeoLocationService($q, $http, $resource, $cordovaGeolocation, GoogleGeocode) {
		var GoogleGeocodeResource = $resource(GoogleGeocode, {
				lat: '@lat',
				long: '@long'
			},
			{
				query: {
					method: 'GET',
					isArray: false,
					transformResponse: $http.defaults.transformResponse.concat(geoCodeToAddress)
				}
			});

		return {
			getCurrentPosition: getCurrentPosition,
			getAddress: getAddress
		};

		/******/

		function getCurrentPosition() {
			var posOptions = {maximumAge: 10, timeout: 10000, enableHighAccuracy: false},
				dfd = $q.defer();

			$cordovaGeolocation
				.getCurrentPosition(posOptions)
				.then(function (position) {
					dfd.resolve({
						lat: position.coords.latitude,
						long: position.coords.longitude
					});
				});

			return dfd.promise;
		}

		function getAddress(coords) {
			var dfd = $q.defer();

			GoogleGeocodeResource.query({
				lat: coords.lat,
				long: coords.long
			})
				.$promise
				.then(function (result) {
					dfd.resolve(result.location);
				});

			return dfd.promise;
		}

		function geoCodeToAddress(result) {
			return {location: result.results.shift().formatted_address};
		}
	}

	GeoLocationService.$inject = ['$q', '$http', '$resource', '$cordovaGeolocation', 'GoogleGeocode'];
})();
