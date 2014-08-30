'use strict';

describe('Service: Deezer', function () {

  // load the service's module
  beforeEach(module('playlistAngularApp'));

  // instantiate service
  var Deezer;
  beforeEach(inject(function (_Deezer_) {
    Deezer = _Deezer_;
  }));

  it('should do something', function () {
    expect(!!Deezer).toBe(true);
  });

});
