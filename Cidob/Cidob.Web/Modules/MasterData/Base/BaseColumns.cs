
namespace Cidob.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.Base")]
    [BasedOnRow(typeof(Entities.BaseRow))]
    public class BaseColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdBase { get; set; }
        public String IdProductDescription { get; set; }
        public Int32 Order { get; set; }
        [EditLink]
        public String Description { get; set; }
        public String PrintName { get; set; }
        public Int32 From { get; set; }
        public Int32 To { get; set; }
        public Boolean Escatola { get; set; }
    }
}