

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/TemplateType", typeof(Cidob.MasterData.Pages.TemplateTypeController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/TemplateType"), Route("{action=index}")]
    public class TemplateTypeController : Controller
    {
        [PageAuthorize("MasterData:TemplateType")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/TemplateType/TemplateTypeIndex.cshtml");
        }
    }
}