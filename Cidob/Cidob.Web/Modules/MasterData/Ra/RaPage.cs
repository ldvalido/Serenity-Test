

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Ra", typeof(Cidob.MasterData.Pages.RaController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Ra"), Route("{action=index}")]
    public class RaController : Controller
    {
        [PageAuthorize("MasterData:RA")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Ra/RaIndex.cshtml");
        }
    }
}