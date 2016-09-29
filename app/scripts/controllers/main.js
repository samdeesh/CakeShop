'use strict';

/**
 * @ngdoc function
 * @name zycusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zycusApp
 */
angular.module('zycusApp')
  .controller('MainCtrl', function (dataService) {
    var self = this;
    function successHandle(response) {
      console.log(response);
      self.response = response;
    }

    function errorHandle(response) {
      console.error(response);
    }
    dataService.getData().then(successHandle, errorHandle);
  });
