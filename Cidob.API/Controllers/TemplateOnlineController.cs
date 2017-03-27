using System.Web.Http;

namespace Cidob.API.Controllers
{
    [RoutePrefix("")]
    public class TemplateOnlineController : ApiController
    {
        [Route("OnlineTemplates")]
        [HttpGet]

        public string List()
        {
            return "pepe";
        }
    }
}
