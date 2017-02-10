
namespace Cidob.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.Olive")]
    [BasedOnRow(typeof(Entities.OliveRow))]
    public class OliveForm
    {
        public Int32 IdProduct { get; set; }
        public Int32 Order { get; set; }
        public String Description { get; set; }
        public String PrintName { get; set; }
    }
}