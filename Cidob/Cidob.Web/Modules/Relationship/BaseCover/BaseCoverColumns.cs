
namespace Cidob.Relationship.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Relationship.BaseCover")]
    [BasedOnRow(typeof(Entities.BaseCoverRow))]
    public class BaseCoverColumns
    {
        [EditLink, AlignRight]
        public String IdBaseDescription { get; set; }
        public String IdCoverDescription { get; set; }
    }
}