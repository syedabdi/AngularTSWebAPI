namespace XTier.VHR.Controllers {
    import Models = SMC.XTier.VHR.DTO.Results;

    export class AuthorizationRecordController implements IAuthorizationRecordController {
        constructor(public authorizationRecords: Models.Members[]) {

        }

    }
}