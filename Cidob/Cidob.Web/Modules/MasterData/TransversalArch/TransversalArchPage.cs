

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/TransversalArch", typeof(Cidob.MasterData.Pages.TransversalArchController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/TransversalArch"), Route("{action=index}")]
    public class TransversalArchController : Controller
    {
        [PageAuthorize("Administration:General")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/TransversalArch/TransversalArchIndex.cshtml");
        }
    }
}