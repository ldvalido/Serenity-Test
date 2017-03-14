
namespace Cidob.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.Gender")]
    [BasedOnRow(typeof(Entities.GenderRow))]
    public class GenderForm
    {
        public String Description { get; set; }
    }
}