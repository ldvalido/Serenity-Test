

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Relationship/BaseTransversalArch", typeof(Cidob.Relationship.Pages.BaseTransversalArchController))]

namespace Cidob.Relationship.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Relationship/BaseTransversalArch"), Route("{action=index}")]
    public class BaseTransversalArchController : Controller
    {
        [PageAuthorize("Relationship:Base-TransversalArch")]
        public ActionResult Index()
        {
            return View("~/Modules/Relationship/BaseTransversalArch/BaseTransversalArchIndex.cshtml");
        }
    }
}