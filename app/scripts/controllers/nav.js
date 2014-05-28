'use strict';

angular.module('yeomanProjApp')
    .controller('NavCtrl', [
        '$scope', '$location', function($scope, $location) {
            $scope.isActive = function(route) {
                $scope.path = $location.path();
                return $location.path() === route;
            };
        }
    ]);
