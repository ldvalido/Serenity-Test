

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Brand", typeof(Cidob.MasterData.Pages.BrandController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Brand"), Route("{action=index}")]
    public class BrandController : Controller
    {
        [PageAuthorize("Administration:General")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Brand/BrandIndex.cshtml");
        }
    }
}