
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
        public String Name { get; set; }
        public String Email { get; set; }
        public String IdBaseDescription { get; set; }
        public String IdCoverDescription { get; set; }
        public Int32 Quantity { get; set; }
        public String IdUserCreationDisplayName { get; set; }
        public DateTime? CreationDate { get; set; }
    }
}