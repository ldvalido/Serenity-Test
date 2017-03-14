
namespace Cidob.Relationship.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Relationship.BaseArch")]
    [BasedOnRow(typeof(Entities.BaseArchRow))]
    public class BaseArchColumns
    {
        [EditLink, AlignRight]
        public String IdBaseDescription { get; set; }
        public String IdArchDescription { get; set; }
    }
}