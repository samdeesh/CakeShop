'use strict';

/**
 * @ngdoc function
 * @name zycusApp.controller:BuyCtrl
 * @description
 * # BuyCtrl
 * Controller of the zycusApp
 */
angular.module('zycusApp')
  .controller('BuyCtrl', function (dataService, $routeParams) {
    var self = this;
    function successHandle(response) {
      console.log($routeParams);
      self.response = response.data.cakelist[$routeParams['cakeid']];
    }

    function errorHandle(response) {
      console.error(response);
    }
    dataService.getData().then(successHandle, errorHandle);
  });
