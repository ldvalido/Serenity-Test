
using Cidob.Administration.Entities;

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
    using Cidob.MasterData.Entities;

    [ConnectionKey("Default"), DisplayName("OnlineTemplate"), InstanceName("OnlineTemplate"), TwoLevelCached]
    [ReadPermission("Templates:OnlineTemplate:Read")]
    [InsertPermission("Templates:OnlineTemplate:Insert")]
    [UpdatePermission("Templates:OnlineTemplate:Update")]
    [DeletePermission("Templates:OnlineTemplate:Delete")]
    [LookupScript("Templates.OnlineTemplateRow")]
    public sealed class OnlineTemplateRow : Row, IIdRow, INameRow
    {        
            #region Id Online Template
            [DisplayName("Id Online Template"), Identity,Width(50)]
            public Int32? IdOnlineTemplate { get { return Fields.IdOnlineTemplate[this]; } set { Fields.IdOnlineTemplate[this] = value; } }
            public partial class RowFields { public Int32Field IdOnlineTemplate; }
            #endregion IdOnlineTemplate
                
            #region Reference
            [DisplayName("Reference"), Width(100), QuickSearch]
            public String Reference { get { return Fields.Reference[this]; } set { Fields.Reference[this] = value; } }
            public partial class RowFields { public StringField Reference; }
            #endregion Reference
                
            #region Number
            [DisplayName("Number"), NotNull, Size(10)]
            public Int32? Number { get { return Fields.Number[this]; } set { Fields.Number[this] = value; } }
            public partial class RowFields { public Int32Field Number; }
            #endregion Number
                
            #region Urgent
            [DisplayName("Urgent")]
            public Boolean? Urgent { get { return Fields.Urgent[this]; } set { Fields.Urgent[this] = value; } }
            public partial class RowFields { public BooleanField Urgent; }
            #endregion Urgent
                
            #region Id Gender
            [DisplayName("Id Gender"), NotNull, ForeignKey("[dbo].[Gender]", "IdGender"), LeftJoin("jIdGender"), TextualField("IdGenderDescription")]
            [LookupEditor(typeof(GenderRow), InplaceAdd = true)]
            public Int32? IdGender { get { return Fields.IdGender[this]; } set { Fields.IdGender[this] = value; } }
            public partial class RowFields { public Int32Field IdGender; }
            #endregion IdGender
                
            #region Id Base
            [DisplayName("Id Base"), NotNull, ForeignKey("[dbo].[Base]", "IdBase"), LeftJoin("jIdBase"), TextualField("IdBaseDescription")]
            [LookupEditor(typeof(BaseRow), InplaceAdd = true)]
            public Int32? IdBase { get { return Fields.IdBase[this]; } set { Fields.IdBase[this] = value; } }
            public partial class RowFields { public Int32Field IdBase; }
            #endregion IdBase
                
            #region Is34
            [DisplayName("Is34")]
            public Boolean? Is34 { get { return Fields.Is34[this]; } set { Fields.Is34[this] = value; } }
            public partial class RowFields { public BooleanField Is34; }
            #endregion Is34
                
            #region Id Shape
            [DisplayName("Id Shape"), NotNull, ForeignKey("[dbo].[Shape]", "IdShape"), LeftJoin("jIdShape"), TextualField("IdShapeDescription")]
            [LookupEditor(typeof(ShapeRow), InplaceAdd = true)]
            public Int32? IdShape { get { return Fields.IdShape[this]; } set { Fields.IdShape[this] = value; } }
            public partial class RowFields { public Int32Field IdShape; }
            #endregion IdShape
                
            #region Id Cover
            [DisplayName("Id Cover"), NotNull, ForeignKey("[dbo].[Cover]", "IdCover"), LeftJoin("jIdCover"), TextualField("IdCoverDescription")]
            [LookupEditor(typeof(CoverRow), InplaceAdd = true)]
            public Int32? IdCover { get { return Fields.IdCover[this]; } set { Fields.IdCover[this] = value; } }
            public partial class RowFields { public Int32Field IdCover; }
            #endregion IdCover
                
            #region Observations
            [DisplayName("Observations"), Size(30)]
            public String Observations { get { return Fields.Observations[this]; } set { Fields.Observations[this] = value; } }
            public partial class RowFields { public StringField Observations; }
            #endregion Observations
                
            #region Quantity
            [DisplayName("Quantity"), NotNull]
            public Int32? Quantity { get { return Fields.Quantity[this]; } set { Fields.Quantity[this] = value; } }
            public partial class RowFields { public Int32Field Quantity; }
            #endregion Quantity
                
            #region Id User Creation
            [DisplayName("Id User Creation"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUserCreation"), TextualField("IdUserCreationUsername")]
            [LookupEditor(typeof(UserRow), InplaceAdd = true)]
            public Int32? IdUserCreation { get { return Fields.IdUserCreation[this]; } set { Fields.IdUserCreation[this] = value; } }
            public partial class RowFields { public Int32Field IdUserCreation; }
            #endregion IdUserCreation
                
            #region Name
            [DisplayName("Name"), Width(100), NotNull]
            public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
            public partial class RowFields { public StringField Name; }
            #endregion Name
                
            #region Email
            [DisplayName("Email"), Width(100), NotNull]
            public String Email { get { return Fields.Email[this]; } set { Fields.Email[this] = value; } }
            public partial class RowFields { public StringField Email; }
            #endregion Email
                
            #region Age
            [DisplayName("Age"), NotNull]
            public Int32? Age { get { return Fields.Age[this]; } set { Fields.Age[this] = value; } }
            public partial class RowFields { public Int32Field Age; }
            #endregion Age
                
            #region Entity
            [DisplayName("Entity"), Size(255)]
            public String Entity { get { return Fields.Entity[this]; } set { Fields.Entity[this] = value; } }
            public partial class RowFields { public StringField Entity; }
            #endregion Entity
                
            #region Creation Date
            [DisplayName("Creation Date"), NotNull]
            public DateTime? CreationDate { get { return Fields.CreationDate[this]; } set { Fields.CreationDate[this] = value; } }
            public partial class RowFields { public DateTimeField CreationDate; }
            #endregion CreationDate
        

    #region Foreign Fields
            
                [DisplayName("Id Gender Description"), Expression("jIdGender.[Description]"),Size(30)]
                public String IdGenderDescription { get { return Fields.IdGenderDescription[this]; } set { Fields.IdGenderDescription[this] = value; } }
                public partial class RowFields { public StringField IdGenderDescription; }

                        
                [DisplayName("Id Base Id Product"), Expression("jIdBase.[IdProduct]")]
                public Int32? IdBaseIdProduct { get { return Fields.IdBaseIdProduct[this]; } set { Fields.IdBaseIdProduct[this] = value; } }
                public partial class RowFields { public Int32Field IdBaseIdProduct; }

                        
                [DisplayName("Id Base Order"), Expression("jIdBase.[Order]")]
                public Int32? IdBaseOrder { get { return Fields.IdBaseOrder[this]; } set { Fields.IdBaseOrder[this] = value; } }
                public partial class RowFields { public Int32Field IdBaseOrder; }

                        
                [DisplayName("Base"), Expression("jIdBase.[Description]"), Size(30)]
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

                        
                [DisplayName("Id Shape Id Product"), Expression("jIdShape.[IdProduct]")]
                public Int32? IdShapeIdProduct { get { return Fields.IdShapeIdProduct[this]; } set { Fields.IdShapeIdProduct[this] = value; } }
                public partial class RowFields { public Int32Field IdShapeIdProduct; }

                        
                [DisplayName("Id Shape Order"), Expression("jIdShape.[Order]")]
                public Int32? IdShapeOrder { get { return Fields.IdShapeOrder[this]; } set { Fields.IdShapeOrder[this] = value; } }
                public partial class RowFields { public Int32Field IdShapeOrder; }

                        
                [DisplayName("Horma"), Expression("jIdShape.[Description]"), Size(10)]
                public String IdShapeDescription { get { return Fields.IdShapeDescription[this]; } set { Fields.IdShapeDescription[this] = value; } }
                public partial class RowFields { public StringField IdShapeDescription; }

                        
                [DisplayName("Id Shape Print Name"), Expression("jIdShape.[PrintName]")]
                public String IdShapePrintName { get { return Fields.IdShapePrintName[this]; } set { Fields.IdShapePrintName[this] = value; } }
                public partial class RowFields { public StringField IdShapePrintName; }

                        
                [DisplayName("Id Cover Id Product"), Expression("jIdCover.[IdProduct]")]
                public Int32? IdCoverIdProduct { get { return Fields.IdCoverIdProduct[this]; } set { Fields.IdCoverIdProduct[this] = value; } }
                public partial class RowFields { public Int32Field IdCoverIdProduct; }

                        
                [DisplayName("Id Cover Order"), Expression("jIdCover.[Order]")]
                public Int32? IdCoverOrder { get { return Fields.IdCoverOrder[this]; } set { Fields.IdCoverOrder[this] = value; } }
                public partial class RowFields { public Int32Field IdCoverOrder; }

                        
                [DisplayName("Cobertura"), Expression("jIdCover.[Description]"), Size(30)]
                public String IdCoverDescription { get { return Fields.IdCoverDescription[this]; } set { Fields.IdCoverDescription[this] = value; } }
                public partial class RowFields { public StringField IdCoverDescription; }

                        
                [DisplayName("Id Cover Print Name"), Expression("jIdCover.[PrintName]")]
                public String IdCoverPrintName { get { return Fields.IdCoverPrintName[this]; } set { Fields.IdCoverPrintName[this] = value; } }
                public partial class RowFields { public StringField IdCoverPrintName; }

                        
                [DisplayName("Id User Creation Username"), Expression("jIdUserCreation.[Username]")]
                public String IdUserCreationUsername { get { return Fields.IdUserCreationUsername[this]; } set { Fields.IdUserCreationUsername[this] = value; } }
                public partial class RowFields { public StringField IdUserCreationUsername; }

                        
                [DisplayName("Usuario"), Expression("jIdUserCreation.[DisplayName]"), Size(20)]
                public String IdUserCreationDisplayName { get { return Fields.IdUserCreationDisplayName[this]; } set { Fields.IdUserCreationDisplayName[this] = value; } }
                public partial class RowFields { public StringField IdUserCreationDisplayName; }

                        
                [DisplayName("Id User Creation Email"), Expression("jIdUserCreation.[Email]")]
                public String IdUserCreationEmail { get { return Fields.IdUserCreationEmail[this]; } set { Fields.IdUserCreationEmail[this] = value; } }
                public partial class RowFields { public StringField IdUserCreationEmail; }

                        
                [DisplayName("Id User Creation Source"), Expression("jIdUserCreation.[Source]")]
                public String IdUserCreationSource { get { return Fields.IdUserCreationSource[this]; } set { Fields.IdUserCreationSource[this] = value; } }
                public partial class RowFields { public StringField IdUserCreationSource; }

                        
                [DisplayName("Id User Creation Password Hash"), Expression("jIdUserCreation.[PasswordHash]")]
                public String IdUserCreationPasswordHash { get { return Fields.IdUserCreationPasswordHash[this]; } set { Fields.IdUserCreationPasswordHash[this] = value; } }
                public partial class RowFields { public StringField IdUserCreationPasswordHash; }

                        
                [DisplayName("Id User Creation Password Salt"), Expression("jIdUserCreation.[PasswordSalt]")]
                public String IdUserCreationPasswordSalt { get { return Fields.IdUserCreationPasswordSalt[this]; } set { Fields.IdUserCreationPasswordSalt[this] = value; } }
                public partial class RowFields { public StringField IdUserCreationPasswordSalt; }

                        
                [DisplayName("Id User Creation Last Directory Update"), Expression("jIdUserCreation.[LastDirectoryUpdate]")]
                public DateTime? IdUserCreationLastDirectoryUpdate { get { return Fields.IdUserCreationLastDirectoryUpdate[this]; } set { Fields.IdUserCreationLastDirectoryUpdate[this] = value; } }
                public partial class RowFields { public DateTimeField IdUserCreationLastDirectoryUpdate; }

                        
                [DisplayName("Id User Creation User Image"), Expression("jIdUserCreation.[UserImage]")]
                public String IdUserCreationUserImage { get { return Fields.IdUserCreationUserImage[this]; } set { Fields.IdUserCreationUserImage[this] = value; } }
                public partial class RowFields { public StringField IdUserCreationUserImage; }

                        
                [DisplayName("Id User Creation Insert Date"), Expression("jIdUserCreation.[InsertDate]")]
                public DateTime? IdUserCreationInsertDate { get { return Fields.IdUserCreationInsertDate[this]; } set { Fields.IdUserCreationInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField IdUserCreationInsertDate; }

                        
                [DisplayName("Id User Creation Insert User Id"), Expression("jIdUserCreation.[InsertUserId]")]
                public Int32? IdUserCreationInsertUserId { get { return Fields.IdUserCreationInsertUserId[this]; } set { Fields.IdUserCreationInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field IdUserCreationInsertUserId; }

                        
                [DisplayName("Id User Creation Update Date"), Expression("jIdUserCreation.[UpdateDate]")]
                public DateTime? IdUserCreationUpdateDate { get { return Fields.IdUserCreationUpdateDate[this]; } set { Fields.IdUserCreationUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField IdUserCreationUpdateDate; }

                        
                [DisplayName("Id User Creation Update User Id"), Expression("jIdUserCreation.[UpdateUserId]")]
                public Int32? IdUserCreationUpdateUserId { get { return Fields.IdUserCreationUpdateUserId[this]; } set { Fields.IdUserCreationUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field IdUserCreationUpdateUserId; }

                        
                [DisplayName("Id User Creation Is Active"), Expression("jIdUserCreation.[IsActive]")]
                public Int16? IdUserCreationIsActive { get { return Fields.IdUserCreationIsActive[this]; } set { Fields.IdUserCreationIsActive[this] = value; } }
                public partial class RowFields { public Int16Field IdUserCreationIsActive; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.IdOnlineTemplate; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Reference; }
            }
            #endregion Id and Name fields

    #region Constructor
    public OnlineTemplateRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
            
            public RowFields()
    : base("[dbo].[OnlineTemplate]")
    {
    LocalTextPrefix = "Templates.OnlineTemplate";
    }
    }
    #endregion RowFields
    }
    }
