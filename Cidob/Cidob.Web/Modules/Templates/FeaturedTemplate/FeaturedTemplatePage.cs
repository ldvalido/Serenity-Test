

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Templates/FeaturedTemplate", typeof(Cidob.Templates.Pages.FeaturedTemplateController))]

namespace Cidob.Templates.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Templates/FeaturedTemplate"), Route("{action=index}")]
    public class FeaturedTemplateController : Controller
    {
        [PageAuthorize("Template:FeaturedTemplate")]
        public ActionResult Index()
        {
            return View("~/Modules/Templates/FeaturedTemplate/FeaturedTemplateIndex.cshtml");
        }
    }
}