

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Heel", typeof(Cidob.MasterData.Pages.HeelController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Heel"), Route("{action=index}")]
    public class HeelController : Controller
    {
        [PageAuthorize("MasterData:Heel")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Heel/HeelIndex.cshtml");
        }
    }
}