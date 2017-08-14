namespace XTier.VHR.Controllers {
    import Models = SMC.XTier.VHR.DTO.Results;

    export class VHRDetailController implements IVHRDetailController {
        constructor(public vhrDetail: Models.HealthRecord) {

        }

    }
}