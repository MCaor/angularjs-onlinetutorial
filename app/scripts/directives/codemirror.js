'use strict';

angular.module('yeomanProjApp')
  .directive('codemirror', function () {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            editor: '=',
            mode: '@',
            height: '@',
            lineNumbers: '@linenumbers',
            enableFullScreen: '@enablefullscreen'
        },
        link: function(scope, elem, attrs) {
            var extraKeys = {
                "F11": function (cm) {
                    cm.setOption("fullScreen", !cm.getOption("fullScreen"));
                },
                "Esc": function (cm) {
                    if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
                }
            };

            var enableFullscreen = scope.enableFullScreen ? scope.enableFullScreen === 'true' : true;
            var lineNumbers = scope.lineNumbers ? scope.lineNumbers === 'true' : true;

            var codeContainer = elem.children()[0];
            scope.editor = new CodeMirror(codeContainer, {
                height: scope.height || "300px",
                mode: scope.mode,
                lineNumbers: lineNumbers,
                extraKeys: enableFullscreen ? extraKeys : undefined
            });
        }
    };
});
