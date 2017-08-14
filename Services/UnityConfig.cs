using Microsoft.Practices.Unity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace SMC.XTier.VHR.Services
{
    public static class UnityConfig
    {
        public static IUnityContainer Initialize(IUnityContainer container)
        {
            //container.RegisterType<MyInterface, MyImplementation>();
            container.RegisterType<Interface.IHR, Classes.HR>();
            return container;
        }
    }
}
