
namespace Cidob.Templates.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Templates.FeaturedTemplate")]
    [BasedOnRow(typeof(Entities.FeaturedTemplateRow))]
    public class FeaturedTemplateColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdFeaturedTemplate { get; set; }
        [EditLink]
        public String Title { get; set; }
        [Width(400)]
        public String Description { get; set; }
        [Hidden]
        public String Content { get; set; }
        [Hidden]
        public Int32 IdUserCreation { get; set; }
    }
}