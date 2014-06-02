'use strict';

describe('Service: examples', function () {

  // load the service's module
  beforeEach(module('yeomanProjApp'));

  // instantiate service
  var examples;
  beforeEach(inject(function (_examples_) {
    examples = _examples_;
  }));

  it('should do something', function () {
    expect(!!examples).toBe(true);
  });

});
