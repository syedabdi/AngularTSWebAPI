
using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;
using System;

namespace SMC.XTier.VHR.BE
{
    public static class XTierConfig
    {
        public static void Initialize<TValidatesIPAs, TUserInfo>(IUnityContainer container)
        {

            container = Services.UnityConfig.Initialize(container);
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }

}
