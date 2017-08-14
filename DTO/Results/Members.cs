using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeLite;

namespace SMC.XTier.VHR.DTO.Results
{
    [TsClass]
    public class Members
    {
        public string Companyid { get; set; }
        public string Memberid { get; set; }
        public string MemberFirstName { get; set; }
        public string MemberLastName { get; set; }
        public int Age { get; set; }
        public string PCPName { get; set; }


    }
}
