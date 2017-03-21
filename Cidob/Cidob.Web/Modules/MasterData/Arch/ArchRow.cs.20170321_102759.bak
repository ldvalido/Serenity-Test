
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

    [ConnectionKey("Default"), DisplayName("Arch"), InstanceName("Arch"), TwoLevelCached]
    [ReadPermission("MasterData:Arch")]
    [ModifyPermission("MasterData:Arch")]
    [LookupScript("MasterData.Arch")]
    public sealed class ArchRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Producto"), NotNull, ForeignKey("[dbo].[Product]", "IdProduct"), LeftJoin("jIdProduct"), TextualField("IdProductDescription")]
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

        [DisplayName("Print Description"), Size(50), NotNull]
        public String PrintDescription
        {
            get { return Fields.PrintDescription[this]; }
            set { Fields.PrintDescription[this] = value; }
        }

        [DisplayName("Producto"), Expression("jIdProduct.[Description]")]
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
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ArchRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdProduct;
            public Int32Field Order;
            public StringField Description;
            public StringField PrintDescription;

            public StringField IdProductDescription;
            public StringField IdProductCode;

            public RowFields()
                : base("[dbo].[Arch]")
            {
                LocalTextPrefix = "MasterData.Arch";
            }
        }
    }
}
