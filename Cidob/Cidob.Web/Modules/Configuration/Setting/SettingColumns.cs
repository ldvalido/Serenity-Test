
namespace Cidob.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.Setting")]
    [BasedOnRow(typeof(Entities.SettingRow))]
    public class SettingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdSetting { get; set; }
        [EditLink]
        public String SettingName { get; set; }
        public String SettingValue { get; set; }
    }
}