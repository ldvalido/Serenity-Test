
namespace Cidob.Relationship.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Relationship.BaseGroup")]
    [BasedOnRow(typeof(Entities.BaseGroupRow))]
    public class BaseGroupForm
    {
        public Int32 IdBase { get; set; }
        public Int32 IdGroup { get; set; }
    }
}