angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'MainController'
		})
		// face data page
		.when('/filing',{
			templateUrl: 'filing.html',
			controller: 'FilingController'
		})
		// face data page
		.when('/finalize',{
			templateUrl: 'finalize.html',
			controller: 'FinalizeController'
		})
		// Redirect to home page
		.otherwise({
			templateUrl: 'home.html',
			controller: 'MainController'
		});

		$locationProvider.html5Mode(true);

	}]);
