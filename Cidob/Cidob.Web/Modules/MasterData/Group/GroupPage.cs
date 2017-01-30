

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Group", typeof(Cidob.MasterData.Pages.GroupController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Group"), Route("{action=index}")]
    public class GroupController : Controller
    {
        [PageAuthorize("MasterData:Group")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Group/GroupIndex.cshtml");
        }
    }
}