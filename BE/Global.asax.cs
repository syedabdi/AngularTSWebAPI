#if DEBUG
using Microsoft.Practices.Unity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace SMC.XTier.VHR.BE
{
    public class WebApiApplication : System.Web.HttpApplication
{
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            IUnityContainer container = new UnityContainer();
            XTierConfig.Initialize<DummyValidatesIpas, DummyUserInfo>(container);//this is the entry point to your XTier Package's configuration.
        }
    }
    //This dummy implementation always allows an IPA.
    public class DummyValidatesIpas 
    {
        public bool IsAllowedIpa(string ipa)
        {
            return true;
        }
    }
    public class DummyUserInfo 
    {
        public string UserId
        {
            get
            {
                return "80869";
            }
        }
    }
}
#endif