

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Base", typeof(Cidob.MasterData.Pages.BaseController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Base"), Route("{action=index}")]
    public class BaseController : Controller
    {
        [PageAuthorize("Administration:General")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Base/BaseIndex.cshtml");
        }
    }
}