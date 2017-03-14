
namespace Cidob.Relationship.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Relationship.BaseGroup")]
    [BasedOnRow(typeof(Entities.BaseGroupRow))]
    public class BaseGroupColumns
    {
        [EditLink, AlignRight]
        public String IdBaseDescription { get; set; }
        public String IdGroupDescription { get; set; }
    }
}