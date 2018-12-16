

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Configuration/UserPrefix", typeof(Cidob.Configuration.Pages.UserPrefixController))]

namespace Cidob.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/UserPrefix"), Route("{action=index}")]
    public class UserPrefixController : Controller
    {
        [PageAuthorize("Configuration:UserPrefix")]
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/UserPrefix/UserPrefixIndex.cshtml");
        }
    }
}