
namespace XTier.VHR.Views {
    var memCtrl: Controllers.IAuthorizationRecordController;
    var mem: SMC.XTier.VHR.DTO.Results.Members
    "tpl";
    export var members = `
  <div>
    <div>
        <div>Members Record</div>
    </div>
    <div>
     <table>
            <thead>
                <tr>
                    <th>Company ID</th>
                    <th>Member First Name</th>
                    <th>Member Last Name</th>
                    <th>Member ID</th>
                    <th>Age</th>
                    <th>PCP Name</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="${mem} in memCtrl.authorizationRecords">
                    <td>{{${mem.Companyid}}}</td>
                    <td>{{${mem.MemberFirstName}}}</td>
                    <td>{{${mem.MemberLastName}}}</td>
                    <td>{{${mem.Memberid}}}</td>
                    <td>{{${mem.Age}}}</td>
                    <td>{{${mem.PCPName}}}</td>
                    </div>
               </tr>
            </tbody>
        </table>
    </div>
</div>  
    `
    "/tpl";
}