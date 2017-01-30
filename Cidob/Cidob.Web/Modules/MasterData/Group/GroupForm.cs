
namespace Cidob.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.Group")]
    [BasedOnRow(typeof(Entities.GroupRow))]
    public class GroupForm
    {
        public String Description { get; set; }
        public Boolean Enabled { get; set; }
    }
}