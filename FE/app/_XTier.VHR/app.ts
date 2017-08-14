/// <reference path="directives.ts" />
/// <reference path="filters.ts" />
/// <reference path="ioc.ts" />
/// <reference path="routing.ts" />
namespace XTier.VHR {
    export var moduleName = 'XTier.VHR';
    export var ngModule = angular.module(moduleName, ['ui.router', 'ui.router.stateHelper'])

    registerRoutes(moduleName, ngModule);
    registerComponents(moduleName, ngModule);
    registerDirectives(moduleName, ngModule);
    registerFilters(moduleName, ngModule);
}