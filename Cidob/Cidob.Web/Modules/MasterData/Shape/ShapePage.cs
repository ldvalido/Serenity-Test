

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Shape", typeof(Cidob.MasterData.Pages.ShapeController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Shape"), Route("{action=index}")]
    public class ShapeController : Controller
    {
        [PageAuthorize("MasterData:Shape")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Shape/ShapeIndex.cshtml");
        }
    }
}