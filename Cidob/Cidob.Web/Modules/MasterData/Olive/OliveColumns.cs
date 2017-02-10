
namespace Cidob.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.Olive")]
    [BasedOnRow(typeof(Entities.OliveRow))]
    public class OliveColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdOlive { get; set; }
        public String IdProductDescription { get; set; }
        public Int32 Order { get; set; }
        [EditLink]
        public String Description { get; set; }
        public String PrintName { get; set; }
    }
}