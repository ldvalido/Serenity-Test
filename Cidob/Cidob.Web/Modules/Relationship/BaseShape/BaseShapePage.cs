

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Relationship/BaseShape", typeof(Cidob.Relationship.Pages.BaseShapeController))]

namespace Cidob.Relationship.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Relationship/BaseShape"), Route("{action=index}")]
    public class BaseShapeController : Controller
    {
        [PageAuthorize("Relationship:Base-Shape")]
        public ActionResult Index()
        {
            return View("~/Modules/Relationship/BaseShape/BaseShapeIndex.cshtml");
        }
    }
}