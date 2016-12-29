
namespace Cidob.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.Brand")]
    [BasedOnRow(typeof(Entities.BrandRow))]
    public class BrandForm
    {
        public String Description { get; set; }
        public Boolean Enabled { get; set; }
    }
}