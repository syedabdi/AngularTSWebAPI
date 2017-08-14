using SMC.XTier.VHR.DTO.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SMC.XTier.VHR.Services
{
    public class MembersDummyData
    {
        public static List<Members> _membersInfo
        {
            get
            {
                return Enumerable.Range(0, 10)
                                  .Select(i => new Members
                                  {
                                      Memberid = "A" + i,
                                      MemberFirstName = "syed" + i,
                                      MemberLastName = "test" + i,
                                      PCPName = "testing" + i,
                                      Companyid = "ABC" + i,
                                      Age = i + 25
                                  })
                                  .ToList<Members>();
            }
        }
    }
}

 