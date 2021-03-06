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

    [ConnectionKey("Default"), DisplayName("Cover"), InstanceName("Cover"), TwoLevelCached]
    [ReadPermission("MasterData:Cover")]
    [ModifyPermission("MasterData:Cover")]
    [LookupScript("MasterData.Cover")]

    public sealed class CoverRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Cover"), Identity]
        public Int32? IdCover
        {
            get { return Fields.IdCover[this]; }
            set { Fields.IdCover[this] = value; }
        }

        [DisplayName("Id Product"), NotNull, ForeignKey("[dbo].[Product]", "IdProduct"), LeftJoin("jIdProduct"), TextualField("IdProductDescription")]
        [LookupEditor(typeof(ProductRow))]
        public Int32? IdProduct
        {
            get { return Fields.IdProduct[this]; }
            set { Fields.IdProduct[this] = value; }
        }

        [DisplayName("Order")]
        public Int32? Order
        {
            get { return Fields.Order[this]; }
            set { Fields.Order[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Print Name"), Size(50),NotNull]
        public String PrintName
        {
            get { return Fields.PrintName[this]; }
            set { Fields.PrintName[this] = value; }
        }

        [DisplayName("Id Product Description"), Expression("jIdProduct.[Description]")]
        public String IdProductDescription
        {
            get { return Fields.IdProductDescription[this]; }
            set { Fields.IdProductDescription[this] = value; }
        }

        [DisplayName("Id Product Code"), Expression("jIdProduct.[Code]")]
        public String IdProductCode
        {
            get { return Fields.IdProductCode[this]; }
            set { Fields.IdProductCode[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdCover; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CoverRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdCover;
            public Int32Field IdProduct;
            public Int32Field Order;
            public StringField Description;
            public StringField PrintName;

            public StringField IdProductDescription;
            public StringField IdProductCode;

            public RowFields()
                : base("[dbo].[Cover]")
            {
                LocalTextPrefix = "MasterData.Cover";
            }
        }
    }
}
