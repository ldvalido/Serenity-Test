using System.Web;
using System.Web.Http;
using Autofac.Integration.WebApi;
using Cidob.IOC;

namespace Cidob.API
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            var config = GlobalConfiguration.Configuration;
            var builder = new ServiceLocatorWebFluent().CreateContainer(config).Build();
            // Set the dependency resolver to be Autofac.
            config.DependencyResolver = new AutofacWebApiDependencyResolver(builder.GetRawContainer());
        }
    }
}
