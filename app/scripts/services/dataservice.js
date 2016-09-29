'use strict';

/**
 * @ngdoc service
 * @name zycusApp.dataService
 * @description
 * # dataService
 * Service in the zycusApp.
 */
angular.module('zycusApp')
  .service('dataService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;
    self.getData = function () {
      return $http.get("data.json")
    }
    return self;
  });
