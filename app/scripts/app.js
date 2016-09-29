'use strict';

/**
 * @ngdoc overview
 * @name zycusApp
 * @description
 * # zycusApp
 *
 * Main module of the application.
 */
angular
  .module('zycusApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/buy/:cakeid', {
        templateUrl: 'views/buy.html',
        controller: 'BuyCtrl',
        controllerAs: 'buy'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
