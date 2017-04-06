
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

    [ConnectionKey("Default"), DisplayName("Digital"), InstanceName("Digital"), TwoLevelCached]
    [ReadPermission("MasterData:Digital")]
    [ModifyPermission("MasterData:Digital")]
    [LookupScript("MasterData.DigitalRow")]
    public sealed class DigitalRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Digital"), Identity]
        public Int32? IdDigital
        {
            get { return Fields.IdDigital[this]; }
            set { Fields.IdDigital[this] = value; }
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

        [DisplayName("Print Name"), Size(50), NotNull]
        public String PrintName
        {
            get { return Fields.PrintName[this]; }
            set { Fields.PrintName[this] = value; }
        }

        [DisplayName("Is Valenti"), NotNull]
        public Boolean? IsValenti
        {
            get { return Fields.IsValenti[this]; }
            set { Fields.IsValenti[this] = value; }
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
            get { return Fields.IdDigital; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DigitalRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdDigital;
            public Int32Field IdProduct;
            public Int32Field Order;
            public StringField Description;
            public StringField PrintName;
            public BooleanField IsValenti;

            public StringField IdProductDescription;
            public StringField IdProductCode;

            public RowFields()
                : base("[dbo].[Digital]")
            {
                LocalTextPrefix = "MasterData.Digital";
            }
        }
    }
}
