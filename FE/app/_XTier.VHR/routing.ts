/// <reference path="resolvers/vhrdetail.ts" />
/// <reference path="views/memberdetails.ts" />


namespace XTier.VHR {
    import serverModels = SMC.XTier.VHR.DTO.Results;

    export function registerRoutes(moduleName: string, ngModule: angular.IModule, parentStateName = "") {
        parentStateName = parentStateName ? parentStateName + "." : "";

        ngModule
            .config(['stateHelperProvider', '$urlRouterProvider', function configRoutes(stateHelperProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
                stateHelperProvider
                    .state({
                        name: parentStateName + 'xtier-vhr',
                        url: '/xtier-vhr',
                        abstract: true,
                        templateUrl: 'App/_XTier.VHR/Views/details.html',
                        resolve: {
                            hrDetail: [ moduleName + '.IVirtualHealthRecordService', Resolvers.VHRDetail.vhrDetail]
                        },
                        children: [
                            {
                                name: 'VHRdetail',
                                url: '',
                                controller: moduleName + '.IVHRDetailController as vhrCtrl',
                                views:
                                {
                                    'members': {
                                        controller: moduleName + '.IAuthorizationRecordController as memCtrl',
                                        template: Views.members,
                                        resolve: {
                                            memData: ['hrDetail', (md: serverModels.HealthRecord) => md.MembersData]
                                        }
                                    }                                
                                }
                            }                        
                        ]
                    })
            }])
            .run(['$rootScope', '$state', function ($rootScope: angular.IRootScopeService, $state: angular.ui.IStateService) {
                $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                    //  if (toState.name === 'xtier-vhr') {
                    //    event.preventDefault();
                    //    $state.go('xtier-vhr.VHRdetail');
                    //}
                    console.log(arguments);
                })
            }])
    }
}