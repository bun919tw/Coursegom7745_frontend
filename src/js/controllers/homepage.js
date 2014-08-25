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