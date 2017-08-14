/// <reference path="services/classes/virtualhealthrecordservice.ts" />
/// <reference path="controllers/classes/vhrdetailcontroller.ts" />
/// <reference path="controllers/classes/authorizationrecordcontroller.ts" />


namespace XTier.VHR {
    export function registerComponents(moduleName: string, ngModule: angular.IModule) {
        ngModule
            .controller(`${moduleName}.IVHRDetailController`, ['hrDetail', Controllers.VHRDetailController])
            .controller(`${moduleName}.IAuthorizationRecordController`, ['memData', Controllers.AuthorizationRecordController])
             .service(`${moduleName}.IVirtualHealthRecordService`, ['$http', Services.VirtualHealthRecordService])

    }
}