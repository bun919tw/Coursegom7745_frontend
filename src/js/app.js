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