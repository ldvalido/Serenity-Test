﻿
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

    [ConnectionKey("Default"), DisplayName("Brand"), InstanceName("Brand"), TwoLevelCached]
    [ReadPermission("MasterData:Group")]
    [ModifyPermission("MasterData:Group")]
    [LookupScript("MasterData.GroupRow")]
    public sealed class GroupRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Brands"), Identity]
        public Int32? IdBrands
        {
            get { return Fields.IdBrands[this]; }
            set { Fields.IdBrands[this] = value; }
        }

        [DisplayName("Description"), Size(255), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Enabled"), NotNull]
        public Boolean? Enabled
        {
            get { return Fields.Enabled[this]; }
            set { Fields.Enabled[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdBrands; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public GroupRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdBrands;
            public StringField Description;
            public BooleanField Enabled;

            public RowFields()
                : base("[dbo].[Brand]")
            {
                LocalTextPrefix = "MasterData.Group";
            }
        }
    }
}
