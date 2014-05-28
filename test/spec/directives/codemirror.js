'use strict';

describe('Directive: codeMirror', function () {

  // load the directive's module
  beforeEach(module('yeomanProjApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<code-mirror></code-mirror>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the codeMirror directive');
  }));
});
