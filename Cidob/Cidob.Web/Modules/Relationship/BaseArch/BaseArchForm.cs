
namespace Cidob.Relationship.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Relationship.BaseArch")]
    [BasedOnRow(typeof(Entities.BaseArchRow))]
    public class BaseArchForm
    {
        public Int32 IdBase { get; set; }
        public Int32 IdArch { get; set; }
    }
}