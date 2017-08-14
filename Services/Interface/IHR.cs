using SMC.XTier.VHR.DTO.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SMC.XTier.VHR.Services.Interface
{
    public interface IHR
    {
        Task<HealthRecord> GetHealthRecords();
        Task<IList<Members>> GetmembersData();
    }
}
