﻿

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Arch", typeof(Cidob.MasterData.Pages.ArchController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Arch"), Route("{action=index}")]
    public class ArchController : Controller
    {
        [PageAuthorize("MasterData:Arch")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Arch/ArchIndex.cshtml");
        }
    }
}