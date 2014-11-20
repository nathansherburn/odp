'use strict';

/**
 * @ngdoc overview
 * @name monashODP
 * @description
 * # monashODP
 * Check
 * Main module of the application.
 */
angular
  .module('monashODP', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
