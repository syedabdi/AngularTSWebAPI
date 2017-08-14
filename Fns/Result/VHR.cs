using SMC.XTier.VHR.DTO.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SMC.XTier.VHR.Fns.Result
{
    public class VHR
    {
        public static HealthRecord converttoHealthRecord (IList<Members> rec)
        {
            var result = new HealthRecord
            {
                MembersData = rec.Select(x => new Members
                {
                   Age=x.Age,
                   Companyid=x.Companyid,
                   MemberFirstName=x.MemberFirstName,
                   MemberLastName=x.MemberLastName,
                   PCPName=x.PCPName,
                   Memberid=x.Memberid 
                }).ToList()                

            };
            return result; 
        }
    }
}
