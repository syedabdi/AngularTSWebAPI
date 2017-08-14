using SMC.XTier.VHR.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace SMC.XTier.VHR.BE.Controllers.api
{
    public class RecordController : ApiController
    {
        IHR _iHR;

        public RecordController(IHR iHR)
        {
            _iHR = iHR;
        }

        [HttpGet, Route("api/GetMemberDetails")]
        public async Task<IHttpActionResult> Get()
        {
            var result = await _iHR.GetHealthRecords();
            return Ok(result);
        }
    }
}
