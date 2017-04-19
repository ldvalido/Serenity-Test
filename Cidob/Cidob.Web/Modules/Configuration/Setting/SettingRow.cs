
namespace Cidob.Configuration.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Setting"), InstanceName("Setting"), TwoLevelCached]
    [ReadPermission("Configuration:Setting")]
    [ModifyPermission("Configuration:Setting")]
    public sealed class SettingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Setting"), Identity]
        public Int32? IdSetting
        {
            get { return Fields.IdSetting[this]; }
            set { Fields.IdSetting[this] = value; }
        }

        [DisplayName("Setting Name"), Size(50), NotNull, QuickSearch,ReadOnly(true)]
        public String SettingName
        {
            get { return Fields.SettingName[this]; }
            set { Fields.SettingName[this] = value; }
        }

        [DisplayName("Setting Value"), NotNull]
        public String SettingValue
        {
            get { return Fields.SettingValue[this]; }
            set { Fields.SettingValue[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdSetting; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SettingName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SettingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdSetting;
            public StringField SettingName;
            public StringField SettingValue;

            public RowFields()
                : base("[dbo].[Setting]")
            {
                LocalTextPrefix = "Configuration.Setting";
            }
        }
    }
}
