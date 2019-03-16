
namespace Cidob.Relationship.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), DisplayName("Base_TransversalArch"), InstanceName("Base_TransversalArch"), TwoLevelCached]
    [ReadPermission("Relationship:Base_TransversalArch:Read")]
    [InsertPermission("Relationship:Base_TransversalArch:Insert")]
    [UpdatePermission("Relationship:Base_TransversalArch:Update")]
    [DeletePermission("Relationship:Base_TransversalArch:Delete")]
    [LookupScript("Relationship.BaseTransversalArchRow")]
    public sealed class BaseTransversalArchRow : Row, IIdRow
    {        
            #region Id Base
            [DisplayName("Id Base"), PrimaryKey, ForeignKey("[dbo].[Base]", "IdBase"), LeftJoin("jIdBase"), TextualField("IdBaseDescription")]
            [LookupEditor(typeof(Cidob.MasterData.Entities.BaseRow), InplaceAdd = false)]
            public Int32? IdBase { get { return Fields.IdBase[this]; } set { Fields.IdBase[this] = value; } }
            public partial class RowFields { public Int32Field IdBase; }
            #endregion IdBase
                
            #region Id Transversal Arch
            [DisplayName("Id Transversal Arch"), PrimaryKey, ForeignKey("[dbo].[TransversalArch]", "IdTransversalArch"), LeftJoin("jIdTransversalArch"), TextualField("IdTransversalArchDescription")]
            [LookupEditor(typeof(Cidob.MasterData.Entities.TransversalArchRow), InplaceAdd = false)]
            public Int32? IdTransversalArch { get { return Fields.IdTransversalArch[this]; } set { Fields.IdTransversalArch[this] = value; } }
            public partial class RowFields { public Int32Field IdTransversalArch; }
            #endregion IdTransversalArch
        

    #region Foreign Fields
            
                [DisplayName("Id Base Id Product"), Expression("jIdBase.[IdProduct]")]
                public Int32? IdBaseIdProduct { get { return Fields.IdBaseIdProduct[this]; } set { Fields.IdBaseIdProduct[this] = value; } }
                public partial class RowFields { public Int32Field IdBaseIdProduct; }

                        
                [DisplayName("Id Base Order"), Expression("jIdBase.[Order]")]
                public Int32? IdBaseOrder { get { return Fields.IdBaseOrder[this]; } set { Fields.IdBaseOrder[this] = value; } }
                public partial class RowFields { public Int32Field IdBaseOrder; }

                        
                [DisplayName("Id Base Description"), Expression("jIdBase.[Description]")]
                public String IdBaseDescription { get { return Fields.IdBaseDescription[this]; } set { Fields.IdBaseDescription[this] = value; } }
                public partial class RowFields { public StringField IdBaseDescription; }

                        
                [DisplayName("Id Base Print Name"), Expression("jIdBase.[PrintName]")]
                public String IdBasePrintName { get { return Fields.IdBasePrintName[this]; } set { Fields.IdBasePrintName[this] = value; } }
                public partial class RowFields { public StringField IdBasePrintName; }

                        
                [DisplayName("Id Base From"), Expression("jIdBase.[From]")]
                public Int32? IdBaseFrom { get { return Fields.IdBaseFrom[this]; } set { Fields.IdBaseFrom[this] = value; } }
                public partial class RowFields { public Int32Field IdBaseFrom; }

                        
                [DisplayName("Id Base To"), Expression("jIdBase.[To]")]
                public Int32? IdBaseTo { get { return Fields.IdBaseTo[this]; } set { Fields.IdBaseTo[this] = value; } }
                public partial class RowFields { public Int32Field IdBaseTo; }

                        
                [DisplayName("Id Base Escatola"), Expression("jIdBase.[Escatola]")]
                public Boolean? IdBaseEscatola { get { return Fields.IdBaseEscatola[this]; } set { Fields.IdBaseEscatola[this] = value; } }
                public partial class RowFields { public BooleanField IdBaseEscatola; }

                        
                [DisplayName("Id Base Need Arch"), Expression("jIdBase.[NeedArch]")]
                public Boolean? IdBaseNeedArch { get { return Fields.IdBaseNeedArch[this]; } set { Fields.IdBaseNeedArch[this] = value; } }
                public partial class RowFields { public BooleanField IdBaseNeedArch; }

                        
                [DisplayName("Id Base Need Transversal Arch"), Expression("jIdBase.[NeedTransversalArch]")]
                public Boolean? IdBaseNeedTransversalArch { get { return Fields.IdBaseNeedTransversalArch[this]; } set { Fields.IdBaseNeedTransversalArch[this] = value; } }
                public partial class RowFields { public BooleanField IdBaseNeedTransversalArch; }

                        
                [DisplayName("Id Transversal Arch Id Product"), Expression("jIdTransversalArch.[IdProduct]")]
                public Int32? IdTransversalArchIdProduct { get { return Fields.IdTransversalArchIdProduct[this]; } set { Fields.IdTransversalArchIdProduct[this] = value; } }
                public partial class RowFields { public Int32Field IdTransversalArchIdProduct; }

                        
                [DisplayName("Id Transversal Arch Order"), Expression("jIdTransversalArch.[Order]")]
                public Int32? IdTransversalArchOrder { get { return Fields.IdTransversalArchOrder[this]; } set { Fields.IdTransversalArchOrder[this] = value; } }
                public partial class RowFields { public Int32Field IdTransversalArchOrder; }

                        
                [DisplayName("Id Transversal Arch Description"), Expression("jIdTransversalArch.[Description]")]
                public String IdTransversalArchDescription { get { return Fields.IdTransversalArchDescription[this]; } set { Fields.IdTransversalArchDescription[this] = value; } }
                public partial class RowFields { public StringField IdTransversalArchDescription; }

                        
                [DisplayName("Id Transversal Arch Print Name"), Expression("jIdTransversalArch.[PrintName]")]
                public String IdTransversalArchPrintName { get { return Fields.IdTransversalArchPrintName[this]; } set { Fields.IdTransversalArchPrintName[this] = value; } }
                public partial class RowFields { public StringField IdTransversalArchPrintName; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.IdBase; }
    }
    #endregion Id and Name fields

    #region Constructor
    public BaseTransversalArchRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Base_TransversalArch]")
    {
    LocalTextPrefix = "Relationship.BaseTransversalArch";
    }
    }
    #endregion RowFields
    }
    }
