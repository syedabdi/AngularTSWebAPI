namespace XTier.VHR.Services {
    import searchModel = SMC.XTier.VHR.DTO.Queries;

    export interface IVirtualHealthRecordService {
        get(): angular.IHttpPromise<SMC.XTier.VHR.DTO.Results.HealthRecord>;
    }
}