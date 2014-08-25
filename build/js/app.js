'use strict';

var app = angular.module('coursegom', ['ngRoute'], function($routeProvider){
    $routeProvider.
        when('/', {
        	templateUrl: '../partials/homepage.html',
        	controller: 'homepageCtrl'
        }).
        otherwise({
        	redirectTo: '/'
        });
}).config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

angular.module('coursegom').controller('homepageCtrl', [
	'$scope',
	'$http', 
	function($scope, $http){
		$scope.test = 'bbb';
		var url = 'http://localhost:3000/api';
		$http.post(url, {})
			.success(function(data){
				console.log(data.temp);
				$scope.msg = data.temp;
			});
	}]);