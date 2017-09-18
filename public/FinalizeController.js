var app = angular.module('FinalizeCtrl', [])

app.controller('FinalizeController',
		function($scope, $rootScope){
			$scope.filing = $rootScope.filing;
		});