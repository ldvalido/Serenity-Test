

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Olive", typeof(Cidob.MasterData.Pages.OliveController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Olive"), Route("{action=index}")]
    public class OliveController : Controller
    {
        [PageAuthorize("MasterData:Olive")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Olive/OliveIndex.cshtml");
        }
    }
}