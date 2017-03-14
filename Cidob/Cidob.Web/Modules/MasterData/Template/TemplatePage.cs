

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Template", typeof(Cidob.MasterData.Pages.TemplateController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Template"), Route("{action=index}")]
    public class TemplateController : Controller
    {
        [PageAuthorize("MasterData:Template")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Template/TemplateIndex.cshtml");
        }
    }
}