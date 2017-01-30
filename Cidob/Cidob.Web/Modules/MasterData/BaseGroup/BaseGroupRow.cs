
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

    [ConnectionKey("Default"), DisplayName("Base_Group"), InstanceName("Base_Group"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BaseGroupRow : Row, IIdRow
    {
        [DisplayName("Id Base"), PrimaryKey, ForeignKey("[dbo].[Base]", "IdBase"), LeftJoin("jIdBase"), TextualField("IdBaseDescription")]
        public Int32? IdBase
        {
            get { return Fields.IdBase[this]; }
            set { Fields.IdBase[this] = value; }
        }

        [DisplayName("Id Group"), PrimaryKey, ForeignKey("[dbo].[Brand]", "IdBrands"), LeftJoin("jIdGroup"), TextualField("IdGroupDescription")]
        public Int32? IdGroup
        {
            get { return Fields.IdGroup[this]; }
            set { Fields.IdGroup[this] = value; }
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

        [DisplayName("Id Group Description"), Expression("jIdGroup.[Description]")]
        public String IdGroupDescription
        {
            get { return Fields.IdGroupDescription[this]; }
            set { Fields.IdGroupDescription[this] = value; }
        }

        [DisplayName("Id Group Enabled"), Expression("jIdGroup.[Enabled]")]
        public Boolean? IdGroupEnabled
        {
            get { return Fields.IdGroupEnabled[this]; }
            set { Fields.IdGroupEnabled[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdBase; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BaseGroupRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdBase;
            public Int32Field IdGroup;

            public Int32Field IdBaseIdProduct;
            public Int32Field IdBaseOrder;
            public StringField IdBaseDescription;
            public StringField IdBasePrintName;
            public Int32Field IdBaseFrom;
            public Int32Field IdBaseTo;
            public BooleanField IdBaseEscatola;
            public BooleanField IdBaseNeedArch;
            public BooleanField IdBaseNeedTransversalArch;

            public StringField IdGroupDescription;
            public BooleanField IdGroupEnabled;

            public RowFields()
                : base("[dbo].[Base_Group]")
            {
                LocalTextPrefix = "MasterData.BaseGroup";
            }
        }
    }
}
