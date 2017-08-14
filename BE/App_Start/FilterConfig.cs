using System.Web;
using System.Web.Mvc;

namespace SMC.XTier.VHR.BE
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
