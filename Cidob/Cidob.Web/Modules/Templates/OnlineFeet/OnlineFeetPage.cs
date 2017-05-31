

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Templates/OnlineFeet", typeof(Cidob.Templates.Pages.OnlineFeetController))]

namespace Cidob.Templates.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Templates/OnlineFeet"), Route("{action=index}")]
    public class OnlineFeetController : Controller
    {
        [PageAuthorize("Template:LoadFeet")]
        public ActionResult Index()
        {
            return View("~/Modules/Templates/OnlineFeet/OnlineFeetIndex.cshtml");
        }
    }
}