
namespace Cidob.Relationship.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Relationship.BaseCover")]
    [BasedOnRow(typeof(Entities.BaseCoverRow))]
    public class BaseCoverForm
    {
        public Int32 IdBase { get; set; }
        public Int32 IdCover { get; set; }
    }
}