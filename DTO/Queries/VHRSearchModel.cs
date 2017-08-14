using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeLite;

namespace SMC.XTier.VHR.DTO.Queries
{
    [TsClass]
    public class VHRSearchModel
    {
        public string ipa { get; set; }
        public string membid { get; set; }
    }
}
