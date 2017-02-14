

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Relationship/BaseArch", typeof(Cidob.Relationship.Pages.BaseArchController))]

namespace Cidob.Relationship.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Relationship/BaseArch"), Route("{action=index}")]
    public class BaseArchController : Controller
    {
        [PageAuthorize("Relationship:Base-Arch")]
        public ActionResult Index()
        {
            return View("~/Modules/Relationship/BaseArch/BaseArchIndex.cshtml");
        }
    }
}