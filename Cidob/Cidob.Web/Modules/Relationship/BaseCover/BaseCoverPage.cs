

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Relationship/BaseCover", typeof(Cidob.Relationship.Pages.BaseCoverController))]

namespace Cidob.Relationship.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Relationship/BaseCover"), Route("{action=index}")]
    public class BaseCoverController : Controller
    {
        [PageAuthorize("Relationship:Base-Cover")]
        public ActionResult Index()
        {
            return View("~/Modules/Relationship/BaseCover/BaseCoverIndex.cshtml");
        }
    }
}