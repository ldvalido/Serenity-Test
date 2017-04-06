
namespace Cidob.MasterData.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Gender"), InstanceName("Gender"), TwoLevelCached]
    [ReadPermission("MasterData:Gender")]
    [ModifyPermission("MasterData:Gender")]
    [LookupScript("MasterData.GenderRow")]
    public sealed class GenderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Gender"), Column("idGender"), Identity]
        public Int32? IdGender
        {
            get { return Fields.IdGender[this]; }
            set { Fields.IdGender[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdGender; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public GenderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdGender;
            public StringField Description;

            public RowFields()
                : base("[dbo].[Gender]")
            {
                LocalTextPrefix = "MasterData.Gender";
            }
        }
    }
}
