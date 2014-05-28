'use strict';

angular.module('yeomanProjApp')
    .controller('ExampledetailCtrl', [
        '$scope', '$sce', function($scope, $sce) {
            $scope.result = $sce.trustAsResourceUrl('about:blank');

            $scope.run = function() {
                var html = $scope.htmlEditor.getValue();
                var js = '<script>' + $scope.jsEditor.getValue() + '</script>';

                var htmlResult = html.replace('{{script}}', js);
                htmlResult = 'data:text/html;charset=utf-8,' + escape(htmlResult);

                $scope.result = $sce.trustAsResourceUrl(htmlResult);
            };
        }
    ]);
