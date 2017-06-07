

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Synchro/Synchronization", typeof(Cidob.Synchro.Pages.SynchronizationController))]

namespace Cidob.Synchro.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Synchro/Synchronization"), Route("{action=index}")]
    public class SynchronizationController : Controller
    {
        [PageAuthorize("Synchro:Synchro")]
        public ActionResult Index()
        {
            return View("~/Modules/Synchro/Synchronization/SynchronizationIndex.cshtml");
        }
    }
}