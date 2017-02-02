

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Ct", typeof(Cidob.MasterData.Pages.CtController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Ct"), Route("{action=index}")]
    public class CtController : Controller
    {
        [PageAuthorize("MasterData:CT")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Ct/CtIndex.cshtml");
        }
    }
}