﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeLite;

namespace SMC.XTier.VHR.DTO.Results
{
    [TsClass]
    public class HealthRecord
    {
        public List<Members> MembersData { get; set; }

    }
}
