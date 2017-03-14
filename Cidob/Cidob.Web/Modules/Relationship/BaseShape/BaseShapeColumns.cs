
namespace Cidob.Relationship.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Relationship.BaseShape")]
    [BasedOnRow(typeof(Entities.BaseShapeRow))]
    public class BaseShapeColumns
    {
        [EditLink, AlignRight]
        public String IdBaseDescription { get; set; }
        public String IdShapeDescription { get; set; }
    }
}