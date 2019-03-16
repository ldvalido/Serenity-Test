
namespace Cidob.Relationship.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Relationship.BaseTransversalArch")]
    [BasedOnRow(typeof(Entities.BaseTransversalArchRow))]
    public class BaseTransversalArchColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdBase { get; set; }
        public Int32 IdTransversalArch { get; set; }
    }
}