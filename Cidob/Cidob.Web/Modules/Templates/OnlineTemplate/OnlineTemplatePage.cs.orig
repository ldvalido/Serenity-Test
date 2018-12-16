[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Templates/OnlineTemplate", typeof(Cidob.Templates.Pages.OnlineTemplateController))]

namespace Cidob.Templates.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Templates/OnlineTemplate"), Route("{action=index}")]
    public class OnlineTemplateController : Controller
    {
        [PageAuthorize("Template:LoadTemplate")]
        public ActionResult Index()
        {
            return View("~/Modules/Templates/OnlineTemplate/OnlineTemplateIndex.cshtml");
        }
    }
}