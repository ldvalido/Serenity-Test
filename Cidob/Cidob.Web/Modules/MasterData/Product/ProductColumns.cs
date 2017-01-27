
namespace Cidob.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.Product")]
    [BasedOnRow(typeof(Entities.ProductRow))]
    public class ProductColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdProduct { get; set; }
        [EditLink]
        public String Description { get; set; }
        public String Code { get; set; }
    }
}