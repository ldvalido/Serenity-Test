
namespace Cidob.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.Group")]
    [BasedOnRow(typeof(Entities.GroupRow))]
    public class GroupColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdBrands { get; set; }
        [EditLink]
        public String Description { get; set; }
        public Boolean Enabled { get; set; }
    }
}