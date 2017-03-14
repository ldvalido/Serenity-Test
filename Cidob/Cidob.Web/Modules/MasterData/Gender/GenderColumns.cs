
namespace Cidob.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.Gender")]
    [BasedOnRow(typeof(Entities.GenderRow))]
    public class GenderColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdGender { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}