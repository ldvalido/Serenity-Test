
namespace Cidob.Templates.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Templates.FeaturedTemplate")]
    [BasedOnRow(typeof(Entities.FeaturedTemplateRow))]
    public class FeaturedTemplateForm
    {
        public String Title { get; set; }
        public String Description { get; set; }
        public String Content { get; set; }
        public Int32 IdUserCreation { get; set; }
    }
}