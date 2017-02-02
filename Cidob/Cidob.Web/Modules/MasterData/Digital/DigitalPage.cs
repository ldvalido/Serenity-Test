

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Digital", typeof(Cidob.MasterData.Pages.DigitalController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Digital"), Route("{action=index}")]
    public class DigitalController : Controller
    {
        [PageAuthorize("MasterData:Digital")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Digital/DigitalIndex.cshtml");
        }
    }
}