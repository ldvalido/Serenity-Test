
namespace Cidob.Templates.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Templates.OnlineTemplate")]
    [BasedOnRow(typeof(Entities.OnlineTemplateRow))]
    public class OnlineTemplateColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdOnlineTemplate { get; set; }
        [EditLink]
        public String Reference { get; set; }
        public Boolean Urgent { get; set; }
        public String IdGenderDescription { get; set; }
        public String IdBaseDescription { get; set; }
        public Boolean Is34 { get; set; }
        public String IdShapeDescription { get; set; }
        public String IdCoverDescription { get; set; }
        public Int32 Quantity { get; set; }
        public String IdUserCreationDisplayName { get; set; }
    }
}