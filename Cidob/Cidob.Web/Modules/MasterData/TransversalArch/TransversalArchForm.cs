
namespace Cidob.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.TransversalArch")]
    [BasedOnRow(typeof(Entities.TransversalArchRow))]
    public class TransversalArchForm
    {
        public Int32 IdProduct { get; set; }
        public Int32 Order { get; set; }
        public String Description { get; set; }
        public String PrintName { get; set; }
    }
}