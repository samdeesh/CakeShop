'use strict';

describe('Controller: BuyCtrl', function () {

  // load the controller's module
  beforeEach(module('zycusApp'));

  var BuyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuyCtrl = $controller('BuyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BuyCtrl.awesomeThings.length).toBe(3);
  });
});
