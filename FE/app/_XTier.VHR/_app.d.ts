declare namespace XTier.VHR {
    function registerDirectives(moduleName: string, ngModule: angular.IModule): void;
}
declare namespace XTier.VHR {
    function registerFilters(moduleName: string, ngModule: angular.IModule): void;
}
declare namespace XTier.VHR {
    function registerComponents(moduleName: string, ngModule: angular.IModule): void;
}
declare namespace XTier.VHR.Views {
    var details: string;
}
declare namespace XTier.VHR {
    function registerRoutes(moduleName: string, ngModule: angular.IModule, parentStateName?: string): void;
}
declare namespace XTier.VHR {
    var moduleName: string;
    var ngModule: ng.IModule;
}
