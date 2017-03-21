
namespace Cidob.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.Digital")]
    [BasedOnRow(typeof(Entities.DigitalRow))]
    public class DigitalColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdDigital { get; set; }
        public Int32 IdProduct { get; set; }
        public Int32 Order { get; set; }
        [EditLink]
        public String Description { get; set; }
        public String PrintName { get; set; }
        public Boolean IsValenti { get; set; }
    }
}