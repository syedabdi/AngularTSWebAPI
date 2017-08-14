var XTier;
(function (XTier) {
    var Theme;
    (function (Theme) {
        function registerDirectives(moduleName, ngModule) {
        }
        Theme.registerDirectives = registerDirectives;
    })(Theme = XTier.Theme || (XTier.Theme = {}));
})(XTier || (XTier = {}));
var XTier;
(function (XTier) {
    var Theme;
    (function (Theme) {
        function registerFilters(moduleName, ngModule) {
        }
        Theme.registerFilters = registerFilters;
    })(Theme = XTier.Theme || (XTier.Theme = {}));
})(XTier || (XTier = {}));
var XTier;
(function (XTier) {
    var Theme;
    (function (Theme) {
        function registerComponents(moduleName, ngModule) {
        }
        Theme.registerComponents = registerComponents;
    })(Theme = XTier.Theme || (XTier.Theme = {}));
})(XTier || (XTier = {}));
var XTier;
(function (XTier) {
    var Theme;
    (function (Theme) {
        //import serverModels = SMC.XTier.Theme.DTO;
        function registerRoutes(moduleName, ngModule, parentStateName) {
            if (parentStateName === void 0) { parentStateName = ""; }
            parentStateName = parentStateName ? parentStateName + "." : "";
            ngModule
                .config(['stateHelperProvider', '$urlRouterProvider', function configRoutes(stateHelperProvider, $urlRouterProvider) {
                    stateHelperProvider
                        .state({
                        name: parentStateName + 'xtier-Theme',
                        url: '/xtier-Theme',
                        abstract: true,
                        templateUrl: 'app/_XTier.Theme/ngViews/wiki.html',
                        children: [
                            {
                                name: 'wiki',
                                url: '/wiki',
                                views: {
                                    'mainMenu': {
                                        templateUrl: 'app/_XTier.Theme/ngViews/menu/mainMenu.html'
                                    },
                                    'info': {
                                        template: '<div ui-view class="themeWiki-content"></div>'
                                    }
                                },
                                children: [
                                    {
                                        name: 'simpleElements',
                                        url: '/simpleElements',
                                        template: '<div ui-view></div>',
                                        children: [
                                            {
                                                name: 'blankBox',
                                                url: '/blankbox',
                                                templateUrl: 'app/_XTier.Theme/ngViews/simpleElements/blankBox.html'
                                            },
                                            {
                                                name: 'blankBoxTitle',
                                                url: '/blankboxTitle',
                                                templateUrl: 'app/_XTier.Theme/ngViews/simpleElements/blankBoxTitle.html'
                                            },
                                            {
                                                name: 'labeledContainer',
                                                url: '/labeledContainer',
                                                templateUrl: 'app/_XTier.Theme/ngViews/simpleElements/labeledContainer.html'
                                            },
                                            {
                                                name: 'horizontalKvps',
                                                url: '/horizontalKvps',
                                                templateUrl: 'app/_XTier.THeme/ngViews/simpleElements/horizontalKvps.html'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'formElements',
                                        url: '/formElements',
                                        template: '<div ui-view></div>',
                                        children: [
                                            {
                                                name: 'textInput',
                                                url: '/textInput',
                                                templateUrl: 'app/_XTier.Theme/ngViews/formElements/formElements.html#textInput'
                                            },
                                            {
                                                name: 'textArea',
                                                url: '/textArea',
                                                templateUrl: 'app/_XTier.Theme/ngViews/formElements/formElements.html#textArea'
                                            },
                                            {
                                                name: 'submitButton',
                                                url: '/submitButton',
                                                templateUrl: 'app/_XTier.Theme/ngViews/formElements/formElements.html#submitButton'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    });
                }]);
        }
        Theme.registerRoutes = registerRoutes;
    })(Theme = XTier.Theme || (XTier.Theme = {}));
})(XTier || (XTier = {}));
/// <reference path="directives.ts" />
/// <reference path="filters.ts" />
/// <reference path="ioc.ts" />
/// <reference path="routing.ts" />
var XTier;
(function (XTier) {
    var Theme;
    (function (Theme) {
        Theme.moduleName = 'XTier.Theme';
        Theme.ngModule = angular.module(Theme.moduleName, ['ui.router', 'ui.router.stateHelper']);
        Theme.registerRoutes(Theme.moduleName, Theme.ngModule);
        Theme.registerComponents(Theme.moduleName, Theme.ngModule);
        Theme.registerDirectives(Theme.moduleName, Theme.ngModule);
        Theme.registerFilters(Theme.moduleName, Theme.ngModule);
    })(Theme = XTier.Theme || (XTier.Theme = {}));
})(XTier || (XTier = {}));
var XTier;
(function (XTier) {
    var Theme;
    (function (Theme) {
        var Views;
        (function (Views) {
            "---";
            Views.details = "\n\n    <p>Hello world!</p>\n    \n    ";
            "/---";
        })(Views = Theme.Views || (Theme.Views = {}));
    })(Theme = XTier.Theme || (XTier.Theme = {}));
})(XTier || (XTier = {}));
var XTier;
(function (XTier) {
    var VHR;
    (function (VHR) {
        function registerDirectives(moduleName, ngModule) {
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
                }]);
        }
        VHR.registerDirectives = registerDirectives;
    })(VHR = XTier.VHR || (XTier.VHR = {}));
})(XTier || (XTier = {}));
var XTier;
(function (XTier) {
    var VHR;
    (function (VHR) {
        function registerFilters(moduleName, ngModule) {
        }
        VHR.registerFilters = registerFilters;
    })(VHR = XTier.VHR || (XTier.VHR = {}));
})(XTier || (XTier = {}));
var XTier;
(function (XTier) {
    var VHR;
    (function (VHR) {
        var Constants;
        (function (Constants) {
            var URLs;
            (function (URLs) {
                URLs.VHRAPI = 'api/GetMemberDetails';
            })(URLs = Constants.URLs || (Constants.URLs = {}));
        })(Constants = VHR.Constants || (VHR.Constants = {}));
    })(VHR = XTier.VHR || (XTier.VHR = {}));
})(XTier || (XTier = {}));
/// <reference path="../../constants/urls.ts" />
var XTier;
(function (XTier) {
    var VHR;
    (function (VHR) {
        var Services;
        (function (Services) {
            var url = VHR.Constants.URLs.VHRAPI;
            var VirtualHealthRecordService = (function () {
                function VirtualHealthRecordService($http, cache) {
                    this.$http = $http;
                    this.cache = cache;
                }
                VirtualHealthRecordService.prototype.get = function () {
                    return this.$http.get(url, { cache: this.cache });
                };
                return VirtualHealthRecordService;
            }());
            Services.VirtualHealthRecordService = VirtualHealthRecordService;
        })(Services = VHR.Services || (VHR.Services = {}));
    })(VHR = XTier.VHR || (XTier.VHR = {}));
})(XTier || (XTier = {}));
var XTier;
(function (XTier) {
    var VHR;
    (function (VHR) {
        var Controllers;
        (function (Controllers) {
            var VHRDetailController = (function () {
                function VHRDetailController(vhrDetail) {
                    this.vhrDetail = vhrDetail;
                }
                return VHRDetailController;
            }());
            Controllers.VHRDetailController = VHRDetailController;
        })(Controllers = VHR.Controllers || (VHR.Controllers = {}));
    })(VHR = XTier.VHR || (XTier.VHR = {}));
})(XTier || (XTier = {}));
var XTier;
(function (XTier) {
    var VHR;
    (function (VHR) {
        var Controllers;
        (function (Controllers) {
            var AuthorizationRecordController = (function () {
                function AuthorizationRecordController(authorizationRecords) {
                    this.authorizationRecords = authorizationRecords;
                }
                return AuthorizationRecordController;
            }());
            Controllers.AuthorizationRecordController = AuthorizationRecordController;
        })(Controllers = VHR.Controllers || (VHR.Controllers = {}));
    })(VHR = XTier.VHR || (XTier.VHR = {}));
})(XTier || (XTier = {}));
/// <reference path="services/classes/virtualhealthrecordservice.ts" />
/// <reference path="controllers/classes/vhrdetailcontroller.ts" />
/// <reference path="controllers/classes/authorizationrecordcontroller.ts" />
var XTier;
(function (XTier) {
    var VHR;
    (function (VHR) {
        function registerComponents(moduleName, ngModule) {
            ngModule
                .controller(moduleName + ".IVHRDetailController", ['hrDetail', VHR.Controllers.VHRDetailController])
                .controller(moduleName + ".IAuthorizationRecordController", ['memData', VHR.Controllers.AuthorizationRecordController])
                .service(moduleName + ".IVirtualHealthRecordService", ['$http', VHR.Services.VirtualHealthRecordService]);
        }
        VHR.registerComponents = registerComponents;
    })(VHR = XTier.VHR || (XTier.VHR = {}));
})(XTier || (XTier = {}));
var XTier;
(function (XTier) {
    var VHR;
    (function (VHR) {
        var Resolvers;
        (function (Resolvers) {
            var VHRDetail;
            (function (VHRDetail) {
                VHRDetail.VHRSearchModel = function (sp) {
                    return {
                        ipa: sp.xvhripa,
                        membid: sp.xvhrmembid
                    };
                };
                VHRDetail.vhrDetail = function (svc) {
                    var result = svc.get().then(function (response) { return response; }).then(function (x) { return x.data; });
                    return result;
                };
            })(VHRDetail = Resolvers.VHRDetail || (Resolvers.VHRDetail = {}));
        })(Resolvers = VHR.Resolvers || (VHR.Resolvers = {}));
    })(VHR = XTier.VHR || (XTier.VHR = {}));
})(XTier || (XTier = {}));
var XTier;
(function (XTier) {
    var VHR;
    (function (VHR) {
        var Views;
        (function (Views) {
            var memCtrl;
            var mem;
            "---";
            Views.members = "\n  <div>\n    <div>\n        <div>Members Record</div>\n    </div>\n    <div>\n     <table>\n            <thead>\n                <tr>\n                    <th>Company ID</th>\n                    <th>Member First Name</th>\n                    <th>Member Last Name</th>\n                    <th>Member ID</th>\n                    <th>Age</th>\n                    <th>PCP Name</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr ng-repeat=\"    mem     in memCtrl.authorizationRecords\">\n                    <td>{{    mem.Companyid    }}</td>\n                    <td>{{    mem.MemberFirstName    }}</td>\n                    <td>{{    mem.MemberLastName    }}</td>\n                    <td>{{    mem.Memberid    }}</td>\n                    <td>{{    mem.Age    }}</td>\n                    <td>{{    mem.PCPName    }}</td>\n                    </div>\n               </tr>\n            </tbody>\n        </table>\n    </div>\n</div>  \n    ";
            "/---";
        })(Views = VHR.Views || (VHR.Views = {}));
    })(VHR = XTier.VHR || (XTier.VHR = {}));
})(XTier || (XTier = {}));
/// <reference path="resolvers/vhrdetail.ts" />
/// <reference path="views/memberdetails.ts" />
var XTier;
(function (XTier) {
    var VHR;
    (function (VHR) {
        function registerRoutes(moduleName, ngModule, parentStateName) {
            if (parentStateName === void 0) { parentStateName = ""; }
            parentStateName = parentStateName ? parentStateName + "." : "";
            ngModule
                .config(['stateHelperProvider', '$urlRouterProvider', function configRoutes(stateHelperProvider, $urlRouterProvider) {
                    stateHelperProvider
                        .state({
                        name: parentStateName + 'xtier-vhr',
                        url: '/xtier-vhr',
                        abstract: true,
                        templateUrl: 'App/_XTier.VHR/Views/details.html',
                        resolve: {
                            hrDetail: [moduleName + '.IVirtualHealthRecordService', VHR.Resolvers.VHRDetail.vhrDetail]
                        },
                        children: [
                            {
                                name: 'VHRdetail',
                                url: '',
                                controller: moduleName + '.IVHRDetailController as vhrCtrl',
                                views: {
                                    'members': {
                                        controller: moduleName + '.IAuthorizationRecordController as memCtrl',
                                        template: VHR.Views.members,
                                        resolve: {
                                            memData: ['hrDetail', function (md) { return md.MembersData; }]
                                        }
                                    }
                                }
                            }
                        ]
                    });
                }])
                .run(['$rootScope', '$state', function ($rootScope, $state) {
                    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                        //  if (toState.name === 'xtier-vhr') {
                        //    event.preventDefault();
                        //    $state.go('xtier-vhr.VHRdetail');
                        //}
                        console.log(arguments);
                    });
                }]);
        }
        VHR.registerRoutes = registerRoutes;
    })(VHR = XTier.VHR || (XTier.VHR = {}));
})(XTier || (XTier = {}));
/// <reference path="directives.ts" />
/// <reference path="filters.ts" />
/// <reference path="ioc.ts" />
/// <reference path="routing.ts" />
var XTier;
(function (XTier) {
    var VHR;
    (function (VHR) {
        VHR.moduleName = 'XTier.VHR';
        VHR.ngModule = angular.module(VHR.moduleName, ['ui.router', 'ui.router.stateHelper']);
        VHR.registerRoutes(VHR.moduleName, VHR.ngModule);
        VHR.registerComponents(VHR.moduleName, VHR.ngModule);
        VHR.registerDirectives(VHR.moduleName, VHR.ngModule);
        VHR.registerFilters(VHR.moduleName, VHR.ngModule);
    })(VHR = XTier.VHR || (XTier.VHR = {}));
})(XTier || (XTier = {}));
//# sourceMappingURL=_app.js.map