/// <reference path="directives.ts" />
/// <reference path="filters.ts" />
/// <reference path="ioc.ts" />
/// <reference path="routing.ts" />
namespace XTier.Theme {
    export var moduleName = 'XTier.Theme';
    export var ngModule = angular.module(moduleName, ['ui.router', 'ui.router.stateHelper'])

    registerRoutes(moduleName, ngModule);
    registerComponents(moduleName, ngModule);
    registerDirectives(moduleName, ngModule);
    registerFilters(moduleName, ngModule);
}