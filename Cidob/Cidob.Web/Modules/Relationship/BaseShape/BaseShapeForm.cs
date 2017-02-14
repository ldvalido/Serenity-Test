
namespace Cidob.Relationship.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Relationship.BaseShape")]
    [BasedOnRow(typeof(Entities.BaseShapeRow))]
    public class BaseShapeForm
    {
        public Int32 IdBase { get; set; }
        public Int32 IdShape { get; set; }
    }
}