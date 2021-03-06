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

    [ConnectionKey("Default"), DisplayName("Product"), InstanceName("Product"), TwoLevelCached]
    [ReadPermission("MasterData:Product")]
    [ModifyPermission("MasterData:Product")]
    [LookupScript("MasterData.ProductRow")]
    public sealed class ProductRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Product"), Identity]
        public Int32? IdProduct
        {
            get { return Fields.IdProduct[this]; }
            set { Fields.IdProduct[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Code"), Size(1), NotNull]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdProduct; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdProduct;
            public StringField Description;
            public StringField Code;

            public RowFields()
                : base("[dbo].[Product]")
            {
                LocalTextPrefix = "MasterData.Product";
            }
        }
    }
}
