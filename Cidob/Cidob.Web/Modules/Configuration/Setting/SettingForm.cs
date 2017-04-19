
namespace Cidob.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.Setting")]
    [BasedOnRow(typeof(Entities.SettingRow))]
    public class SettingForm
    {
        public String SettingName { get; set; }
        public String SettingValue { get; set; }
    }
}