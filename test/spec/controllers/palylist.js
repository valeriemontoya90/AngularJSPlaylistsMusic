'use strict';

describe('Controller: PalylistCtrl', function () {

  // load the controller's module
  beforeEach(module('playlistAngularApp'));

  var PalylistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PalylistCtrl = $controller('PalylistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
