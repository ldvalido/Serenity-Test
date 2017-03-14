

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Gender", typeof(Cidob.MasterData.Pages.GenderController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Gender"), Route("{action=index}")]
    public class GenderController : Controller
    {
        [PageAuthorize("MasterData:Gender")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Gender/GenderIndex.cshtml");
        }
    }
}