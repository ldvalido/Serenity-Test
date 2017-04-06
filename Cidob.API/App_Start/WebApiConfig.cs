using System.Web.Http;
using Swashbuckle.Application;

namespace Cidob.API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Formatters.Remove(config.Formatters.XmlFormatter);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Routes.MapHttpRoute(
           name: "swagger_root",
           routeTemplate: "",
           defaults: null,
           constraints: null,
           handler: new RedirectHandler((message => message.RequestUri.ToString()), "swagger"));
        }
    }
}
