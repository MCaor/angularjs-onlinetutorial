'use strict';

describe('Controller: ExampleslistCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanProjApp'));

  var ExampleslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExampleslistCtrl = $controller('ExampleslistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
