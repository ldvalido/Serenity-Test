
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

    [ConnectionKey("Default"), DisplayName("Base_Cover"), InstanceName("Base_Cover"), TwoLevelCached]
    [ReadPermission("Relationship:Base-Cover")]
    [ModifyPermission("Relationship:Base-Cover")]
    public sealed class BaseCoverRow : Row, IIdRow
    {
        [DisplayName("Id Base"), PrimaryKey, ForeignKey("[dbo].[Base]", "IdBase"), LeftJoin("jIdBase"), TextualField("IdBaseDescription")]
        [LookupEditor(typeof(BaseRow))]
        public Int32? IdBase
        {
            get { return Fields.IdBase[this]; }
            set { Fields.IdBase[this] = value; }
        }

        [DisplayName("Id Cover"), PrimaryKey, ForeignKey("[dbo].[Cover]", "IdCover"), LeftJoin("jIdCover"), TextualField("IdCoverDescription")]
        [LookupEditor(typeof(CoverRow))]
        public Int32? IdCover
        {
            get { return Fields.IdCover[this]; }
            set { Fields.IdCover[this] = value; }
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
            get { return Fields.IdBase; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BaseCoverRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdBase;
            public Int32Field IdCover;

            public Int32Field IdBaseIdProduct;
            public Int32Field IdBaseOrder;
            public StringField IdBaseDescription;
            public StringField IdBasePrintName;
            public Int32Field IdBaseFrom;
            public Int32Field IdBaseTo;
            public BooleanField IdBaseEscatola;
            public BooleanField IdBaseNeedArch;
            public BooleanField IdBaseNeedTransversalArch;

            public Int32Field IdCoverIdProduct;
            public Int32Field IdCoverOrder;
            public StringField IdCoverDescription;
            public StringField IdCoverPrintName;

            public RowFields()
                : base("[dbo].[Base_Cover]")
            {
                LocalTextPrefix = "Relationship.BaseCover";
            }
        }
    }
}
