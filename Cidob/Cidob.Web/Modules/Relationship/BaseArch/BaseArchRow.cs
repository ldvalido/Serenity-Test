
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

    [ConnectionKey("Default"), DisplayName("Base_Arch"), InstanceName("Base_Arch"), TwoLevelCached]
    [ReadPermission("Relationship:Base-Arch")]
    [ModifyPermission("Relationship:Base-Arch")]
    public sealed class BaseArchRow : Row, IIdRow
    {
        [DisplayName("Id Base"), PrimaryKey, ForeignKey("[dbo].[Base]", "IdBase"), LeftJoin("jIdBase"), TextualField("IdBaseDescription")]
        [LookupEditor(typeof(BaseRow))]
        public Int32? IdBase
        {
            get { return Fields.IdBase[this]; }
            set { Fields.IdBase[this] = value; }
        }

        [DisplayName("Id Arch"), PrimaryKey, ForeignKey("[dbo].[Arch]", "Id"), LeftJoin("jIdArch"), TextualField("IdArchDescription")]
        [LookupEditor(typeof(ArchRow))]
        public Int32? IdArch
        {
            get { return Fields.IdArch[this]; }
            set { Fields.IdArch[this] = value; }
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

        [DisplayName("Id Arch Id Product"), Expression("jIdArch.[IdProduct]")]
        public Int32? IdArchIdProduct
        {
            get { return Fields.IdArchIdProduct[this]; }
            set { Fields.IdArchIdProduct[this] = value; }
        }

        [DisplayName("Id Arch Order"), Expression("jIdArch.[Order]")]
        public Int32? IdArchOrder
        {
            get { return Fields.IdArchOrder[this]; }
            set { Fields.IdArchOrder[this] = value; }
        }

        [DisplayName("Id Arch Description"), Expression("jIdArch.[Description]")]
        public String IdArchDescription
        {
            get { return Fields.IdArchDescription[this]; }
            set { Fields.IdArchDescription[this] = value; }
        }

        [DisplayName("Id Arch Print Description"), Expression("jIdArch.[PrintDescription]")]
        public String IdArchPrintDescription
        {
            get { return Fields.IdArchPrintDescription[this]; }
            set { Fields.IdArchPrintDescription[this] = value; }
        }
        [Expression("jIdArch.[Id] + jIdBase.[IdBase]")]
        public String CompositeKey
        {
            get { return Fields.CompositeKey[this]; }
            set { Fields.IdArchPrintDescription[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.CompositeKey; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BaseArchRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdBase;
            public Int32Field IdArch;

            public Int32Field IdBaseIdProduct;
            public Int32Field IdBaseOrder;
            public StringField IdBaseDescription;
            public StringField IdBasePrintName;
            public Int32Field IdBaseFrom;
            public Int32Field IdBaseTo;
            public BooleanField IdBaseEscatola;
            public BooleanField IdBaseNeedArch;
            public BooleanField IdBaseNeedTransversalArch;

            public Int32Field IdArchIdProduct;
            public Int32Field IdArchOrder;
            public StringField IdArchDescription;
            public StringField IdArchPrintDescription;

            public StringField CompositeKey;
            public RowFields()
                : base("[dbo].[Base_Arch]")
            {
                LocalTextPrefix = "Relationship.BaseArch";
            }
        }
    }
}
