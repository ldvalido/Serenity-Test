
using Cidob.MasterData.Entities;

namespace Cidob.Relationship.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Base_Shape"), InstanceName("Base_Shape"), TwoLevelCached]
    [ReadPermission("Relationship:Base-Shape")]
    [ModifyPermission("Relationship:Base-Shape")]
    public sealed class BaseShapeRow : Row, IIdRow
    {
        [DisplayName("Id Base"), PrimaryKey, ForeignKey("[dbo].[Base]", "IdBase"), LeftJoin("jIdBase"), TextualField("IdBaseDescription")]
        [LookupEditor(typeof(BaseRow))]
        public Int32? IdBase
        {
            get { return Fields.IdBase[this]; }
            set { Fields.IdBase[this] = value; }
        }

        [DisplayName("Id Shape"), PrimaryKey, ForeignKey("[dbo].[Shape]", "IdShape"), LeftJoin("jIdShape"), TextualField("IdShapeDescription")]
        [LookupEditor(typeof(ShapeRow))]
        public Int32? IdShape
        {
            get { return Fields.IdShape[this]; }
            set { Fields.IdShape[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.IdBase; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BaseShapeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdBase;
            public Int32Field IdShape;

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

            public RowFields()
                : base("[dbo].[Base_Shape]")
            {
                LocalTextPrefix = "Relationship.BaseShape";
            }
        }
    }
}
