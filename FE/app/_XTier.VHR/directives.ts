namespace XTier.VHR {
    export function registerDirectives(moduleName: string, ngModule: angular.IModule) {
        ngModule
         .directive('fulldetail', [function () {
            return {
                restrict: 'EA',
                scope: {
                    authorizationRecord: '='
                },
                controller: moduleName + '.IAuthorizationRecordController as autCtrl',
                bindToController: true,
                transclude: true,
                link: function (scope, element) {
                    scope.openWindow = function (url) {
                        window.open(url, '');
                    };
                }
            };
            }])
    }
}