
namespace Cidob.Templates.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("OnlineTemplate"), InstanceName("OnlineTemplate"), TwoLevelCached]
    [ReadPermission("Template:LoadTemplate")]
    [ModifyPermission("Template:LoadTemplate")]
    public sealed class OnlineTemplateRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Online Template"), Identity]
        public Int32? IdOnlineTemplate
        {
            get { return Fields.IdOnlineTemplate[this]; }
            set { Fields.IdOnlineTemplate[this] = value; }
        }

        [DisplayName("Reference"), Size(50), NotNull, QuickSearch]
        public String Reference
        {
            get { return Fields.Reference[this]; }
            set { Fields.Reference[this] = value; }
        }

        [DisplayName("Number"), NotNull]
        public Int32? Number
        {
            get { return Fields.Number[this]; }
            set { Fields.Number[this] = value; }
        }

        [DisplayName("Id Gender"), NotNull, ForeignKey("[dbo].[Gender]", "idGender"), LeftJoin("jIdGender"), TextualField("IdGenderDescription")]
        public Int32? IdGender
        {
            get { return Fields.IdGender[this]; }
            set { Fields.IdGender[this] = value; }
        }

        [DisplayName("Id Base"), NotNull, ForeignKey("[dbo].[Base]", "IdBase"), LeftJoin("jIdBase"), TextualField("IdBaseDescription")]
        public Int32? IdBase
        {
            get { return Fields.IdBase[this]; }
            set { Fields.IdBase[this] = value; }
        }

        [DisplayName("Is34"), NotNull]
        public Boolean? Is34
        {
            get { return Fields.Is34[this]; }
            set { Fields.Is34[this] = value; }
        }

        [DisplayName("Id Shape"), NotNull, ForeignKey("[dbo].[Shape]", "IdShape"), LeftJoin("jIdShape"), TextualField("IdShapeDescription")]
        public Int32? IdShape
        {
            get { return Fields.IdShape[this]; }
            set { Fields.IdShape[this] = value; }
        }

        [DisplayName("Id Cover"), NotNull, ForeignKey("[dbo].[Cover]", "IdCover"), LeftJoin("jIdCover"), TextualField("IdCoverDescription")]
        public Int32? IdCover
        {
            get { return Fields.IdCover[this]; }
            set { Fields.IdCover[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Comments"), Size(255), NotNull]
        public String Comments
        {
            get { return Fields.Comments[this]; }
            set { Fields.Comments[this] = value; }
        }

        [DisplayName("Id Gender Description"), Expression("jIdGender.[Description]")]
        public String IdGenderDescription
        {
            get { return Fields.IdGenderDescription[this]; }
            set { Fields.IdGenderDescription[this] = value; }
        }

        [DisplayName("Id Base Id Product"), Expression("jIdBase.[IdProduct]")]
        public Int32? IdBaseIdProduct
        {
            get { return Fields.IdBaseIdProduct[this]; }
            set { Fields.IdBaseIdProduct[this] = value; }
        }

        [DisplayName("Id Base Order"), Expression("jIdBase.[Order]")]
        public Int32? IdBaseOrder
        {
            get { return Fields.IdBaseOrder[this]; }
            set { Fields.IdBaseOrder[this] = value; }
        }

        [DisplayName("Id Base Description"), Expression("jIdBase.[Description]")]
        public String IdBaseDescription
        {
            get { return Fields.IdBaseDescription[this]; }
            set { Fields.IdBaseDescription[this] = value; }
        }

        [DisplayName("Id Base Print Name"), Expression("jIdBase.[PrintName]")]
        public String IdBasePrintName
        {
            get { return Fields.IdBasePrintName[this]; }
            set { Fields.IdBasePrintName[this] = value; }
        }

        [DisplayName("Id Base From"), Expression("jIdBase.[From]")]
        public Int32? IdBaseFrom
        {
            get { return Fields.IdBaseFrom[this]; }
            set { Fields.IdBaseFrom[this] = value; }
        }

        [DisplayName("Id Base To"), Expression("jIdBase.[To]")]
        public Int32? IdBaseTo
        {
            get { return Fields.IdBaseTo[this]; }
            set { Fields.IdBaseTo[this] = value; }
        }

        [DisplayName("Id Base Escatola"), Expression("jIdBase.[Escatola]")]
        public Boolean? IdBaseEscatola
        {
            get { return Fields.IdBaseEscatola[this]; }
            set { Fields.IdBaseEscatola[this] = value; }
        }

        [DisplayName("Id Base Need Arch"), Expression("jIdBase.[NeedArch]")]
        public Boolean? IdBaseNeedArch
        {
            get { return Fields.IdBaseNeedArch[this]; }
            set { Fields.IdBaseNeedArch[this] = value; }
        }

        [DisplayName("Id Base Need Transversal Arch"), Expression("jIdBase.[NeedTransversalArch]")]
        public Boolean? IdBaseNeedTransversalArch
        {
            get { return Fields.IdBaseNeedTransversalArch[this]; }
            set { Fields.IdBaseNeedTransversalArch[this] = value; }
        }

        [DisplayName("Id Shape Id Product"), Expression("jIdShape.[IdProduct]")]
        public Int32? IdShapeIdProduct
        {
            get { return Fields.IdShapeIdProduct[this]; }
            set { Fields.IdShapeIdProduct[this] = value; }
        }

        [DisplayName("Id Shape Order"), Expression("jIdShape.[Order]")]
        public Int32? IdShapeOrder
        {
            get { return Fields.IdShapeOrder[this]; }
            set { Fields.IdShapeOrder[this] = value; }
        }

        [DisplayName("Id Shape Description"), Expression("jIdShape.[Description]")]
        public String IdShapeDescription
        {
            get { return Fields.IdShapeDescription[this]; }
            set { Fields.IdShapeDescription[this] = value; }
        }

        [DisplayName("Id Shape Print Name"), Expression("jIdShape.[PrintName]")]
        public String IdShapePrintName
        {
            get { return Fields.IdShapePrintName[this]; }
            set { Fields.IdShapePrintName[this] = value; }
        }

        [DisplayName("Id Cover Id Product"), Expression("jIdCover.[IdProduct]")]
        public Int32? IdCoverIdProduct
        {
            get { return Fields.IdCoverIdProduct[this]; }
            set { Fields.IdCoverIdProduct[this] = value; }
        }

        [DisplayName("Id Cover Order"), Expression("jIdCover.[Order]")]
        public Int32? IdCoverOrder
        {
            get { return Fields.IdCoverOrder[this]; }
            set { Fields.IdCoverOrder[this] = value; }
        }

        [DisplayName("Id Cover Description"), Expression("jIdCover.[Description]")]
        public String IdCoverDescription
        {
            get { return Fields.IdCoverDescription[this]; }
            set { Fields.IdCoverDescription[this] = value; }
        }

        [DisplayName("Id Cover Print Name"), Expression("jIdCover.[PrintName]")]
        public String IdCoverPrintName
        {
            get { return Fields.IdCoverPrintName[this]; }
            set { Fields.IdCoverPrintName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdOnlineTemplate; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Reference; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OnlineTemplateRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdOnlineTemplate;
            public StringField Reference;
            public Int32Field Number;
            public Int32Field IdGender;
            public Int32Field IdBase;
            public BooleanField Is34;
            public Int32Field IdShape;
            public Int32Field IdCover;
            public Int32Field Quantity;
            public StringField Comments;

            public StringField IdGenderDescription;

            public Int32Field IdBaseIdProduct;
            public Int32Field IdBaseOrder;
            public StringField IdBaseDescription;
            public StringField IdBasePrintName;
            public Int32Field IdBaseFrom;
            public Int32Field IdBaseTo;
            public BooleanField IdBaseEscatola;
            public BooleanField IdBaseNeedArch;
            public BooleanField IdBaseNeedTransversalArch;

            public Int32Field IdShapeIdProduct;
            public Int32Field IdShapeOrder;
            public StringField IdShapeDescription;
            public StringField IdShapePrintName;

            public Int32Field IdCoverIdProduct;
            public Int32Field IdCoverOrder;
            public StringField IdCoverDescription;
            public StringField IdCoverPrintName;

            public RowFields()
                : base("[dbo].[OnlineTemplate]")
            {
                LocalTextPrefix = "Templates.OnlineTemplate";
            }
        }
    }
}
