'use strict';

angular.module('yeomanProjApp')
    .controller('ExampledetailCtrl', [
        '$scope', '$routeParams', '$sce', 'examples', function($scope, $routeParams, $sce, examples) {
            $scope.result = $sce.trustAsResourceUrl('about:blank');

        examples.find($routeParams.exampleId, function(example) {

            examples.getFiles(example, function (data) {
                var html = data.html;
                var js = data.js;

                if (html) {
                    $scope.htmlEditor.setValue(html.trim());
                }

                if (js) {
                    $scope.jsEditor.setValue(js.trim());
                }
                //$scope.readme = $sce.trustAsHtml(marked(md));
            });

            $scope.example = example;
        });

            $scope.run = function() {
                var html = $scope.htmlEditor.getValue();
                var js = '<script>' + $scope.jsEditor.getValue() + '</script>';

                var htmlResult = html.replace('{{script}}', js);
                htmlResult = 'data:text/html;charset=utf-8,' + escape(htmlResult);

                $scope.result = $sce.trustAsResourceUrl(htmlResult);
            };
        }
    ]);
