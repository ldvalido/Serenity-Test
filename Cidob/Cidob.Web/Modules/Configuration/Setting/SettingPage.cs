

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Configuration/Setting", typeof(Cidob.Configuration.Pages.SettingController))]

namespace Cidob.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/Setting"), Route("{action=index}")]
    public class SettingController : Controller
    {
        [PageAuthorize("Configuration:Setting")]
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/Setting/SettingIndex.cshtml");
        }
    }
}