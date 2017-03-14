

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Relationship/BaseGroup", typeof(Cidob.Relationship.Pages.BaseGroupController))]

namespace Cidob.Relationship.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Relationship/BaseGroup"), Route("{action=index}")]
    public class BaseGroupController : Controller
    {
        [PageAuthorize("Relationship:Base-Group")]
        public ActionResult Index()
        {
            return View("~/Modules/Relationship/BaseGroup/BaseGroupIndex.cshtml");
        }
    }
}