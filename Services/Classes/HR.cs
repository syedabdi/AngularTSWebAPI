using SMC.XTier.VHR.DTO.Results;
using SMC.XTier.VHR.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;


namespace SMC.XTier.VHR.Services.Classes
{
    class HR : IHR
    {


        public async Task<HealthRecord> GetHealthRecords()
        {
            try
            {
                var records = Task.Run(() => GetmembersData());
                return await Task.Run(() => SMC.XTier.VHR.Fns.Result.VHR.converttoHealthRecord(records.Result));

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }

        public async Task<IList<Members>> GetmembersData()
        {
            try
            {
                return await Task.Run(() => MembersDummyData._membersInfo);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }

    }
    

}
