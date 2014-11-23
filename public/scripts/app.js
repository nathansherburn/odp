'use strict';

angular.module('odp',[
	'nvd3ChartDirectives',
	'ngRoute',
	'ngAnimate'
	])

 .config(function($routeProvider, $locationProvider) {
    
    /* Where to direct unmatched urls */
    $routeProvider.otherwise({
      redirectTo: '/'
    })

    /* Where to direct urls */
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html'
    })
		.when('/unit/:id', {
			templateUrl: 'views/main.html'
		});

  })

 .factory('unitFactory', ['$http', function($http) {

    var unitFactory = {};

		unitFactory.getUnitData = function () {
			return $http.get('http://localhost:3000/units')
    }

		return unitFactory;

	}]);
