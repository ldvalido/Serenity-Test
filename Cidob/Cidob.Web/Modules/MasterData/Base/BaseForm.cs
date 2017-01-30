﻿
namespace Cidob.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.Base")]
    [BasedOnRow(typeof(Entities.BaseRow))]
    public class BaseForm
    {
        public Int32 IdProduct { get; set; }
        public Int32 Order { get; set; }
        public String Description { get; set; }
        public String PrintName { get; set; }
        public Int32 From { get; set; }
        public Int32 To { get; set; }
        public Boolean Escatola { get; set; }
        public Boolean NeedArch { get; set; }
        public Boolean NeedTransversalArch { get; set; }
        public List<Int32> GroupList { get; set; } 
    }
}