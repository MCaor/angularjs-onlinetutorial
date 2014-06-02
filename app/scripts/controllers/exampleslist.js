'use strict';

angular.module('yeomanProjApp')
  .controller('ExampleslistCtrl', ['$scope', 'examples', function ($scope, examples) {
      examples.list(function(ex) {
          $scope.examples = ex;
      });
  }]);
