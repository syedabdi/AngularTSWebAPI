/// <reference path="../../constants/urls.ts" />

namespace XTier.VHR.Services {
    import url = Constants.URLs.VHRAPI;
    import searchModel = SMC.XTier.VHR.DTO.Queries;

    export class VirtualHealthRecordService implements IVirtualHealthRecordService {
        constructor(private $http: angular.IHttpService, private cache: angular.ICacheObject) { }

        get(): angular.IHttpPromise<SMC.XTier.VHR.DTO.Results.HealthRecord> {
            return this.$http.get(url, { cache: this.cache });
        }
    }
}