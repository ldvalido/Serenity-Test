
namespace Cidob.Templates.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Templates.OnlineTemplate")]
    [BasedOnRow(typeof(Entities.OnlineTemplateRow))]
    public class OnlineTemplateForm
    {
        public String Reference { get; set; }
        public Int32 Number { get; set; }
        public Boolean Urgent { get; set; }
        public Int32 IdGender { get; set; }
        public Int32 IdBase { get; set; }
        public Boolean Is34 { get; set; }
        public Int32 IdShape { get; set; }
        public Int32 IdCover { get; set; }
        public String Observations { get; set; }
        public Int32 Quantity { get; set; }
        public Int32 IdUserCreation { get; set; }
    }
}