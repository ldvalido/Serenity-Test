

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Product", typeof(Cidob.MasterData.Pages.ProductController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Product"), Route("{action=index}")]
    public class ProductController : Controller
    {
        [PageAuthorize("Administration:General")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Product/ProductIndex.cshtml");
        }
    }
}