
namespace Cidob.Relationship.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Relationship.BaseTransversalArch")]
    [BasedOnRow(typeof(Entities.BaseTransversalArchRow))]
    public class BaseTransversalArchForm
    {
        public Int32 IdTransversalArch { get; set; }
    }
}