﻿

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Cover", typeof(Cidob.MasterData.Pages.CoverController))]

namespace Cidob.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Cover"), Route("{action=index}")]
    public class CoverController : Controller
    {
        [PageAuthorize("MasterData:Cover")]
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Cover/CoverIndex.cshtml");
        }
    }
}