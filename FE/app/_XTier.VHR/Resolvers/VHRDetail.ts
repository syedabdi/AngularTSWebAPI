namespace XTier.VHR.Resolvers.VHRDetail {
    import searchModel = SMC.XTier.VHR.DTO.Queries;

    export var VHRSearchModel = (sp) => {
        return <searchModel.VHRSearchModel>{
            ipa: sp.xvhripa,
            membid: sp.xvhrmembid
        }
    }

    export var vhrDetail = (svc: Services.IVirtualHealthRecordService) => {
        var result = svc.get().then(response => response).then(x => x.data);
        return result;
    }
}