
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

    [ConnectionKey("Default"), DisplayName("FeaturedTemplate"), InstanceName("FeaturedTemplate"), TwoLevelCached]
    [ReadPermission("Templates:FeaturedTemplate:Read")]
    [InsertPermission("Templates:FeaturedTemplate:Insert")]
    [UpdatePermission("Templates:FeaturedTemplate:Update")]
    [DeletePermission("Templates:FeaturedTemplate:Delete")]
    [LookupScript("Templates.FeaturedTemplateRow")]
    public sealed class FeaturedTemplateRow : Row, IIdRow, INameRow
    {        
            #region Id Featured Template
            [DisplayName("Id Featured Template"), Identity]
            public Int32? IdFeaturedTemplate { get { return Fields.IdFeaturedTemplate[this]; } set { Fields.IdFeaturedTemplate[this] = value; } }
            public partial class RowFields { public Int32Field IdFeaturedTemplate; }
            #endregion IdFeaturedTemplate
                
            #region Title
            [DisplayName("Title"), Size(50), NotNull, QuickSearch]
            public String Title { get { return Fields.Title[this]; } set { Fields.Title[this] = value; } }
            public partial class RowFields { public StringField Title; }
            #endregion Title
                
            #region Description
            [DisplayName("Description"), Size(255), NotNull,TextAreaEditor(Rows = 10)]
            public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
            public partial class RowFields { public StringField Description; }
            #endregion Description
                
            #region Content
            [DisplayName("Content"), NotNull, Hidden]
            public String Content { get { return Fields.Content[this]; } set { Fields.Content[this] = value; } }
            public partial class RowFields { public StringField Content; }
            #endregion Content
                
            #region Id User Creation
            [DisplayName("Id User Creation"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUserCreation"), TextualField("IdUserCreationUsername"), Hidden]
            [LookupEditor(typeof(Cidob.Administration.Entities.UserRow), InplaceAdd = true)]
            public Int32? IdUserCreation { get { return Fields.IdUserCreation[this]; } set { Fields.IdUserCreation[this] = value; } }
            public partial class RowFields { public Int32Field IdUserCreation; }
            #endregion IdUserCreation
        

    #region Foreign Fields
            
                [DisplayName("Id User Creation Username"), Expression("jIdUserCreation.[Username]")]
                public String IdUserCreationUsername { get { return Fields.IdUserCreationUsername[this]; } set { Fields.IdUserCreationUsername[this] = value; } }
                public partial class RowFields { public StringField IdUserCreationUsername; }

                        
                [DisplayName("Id User Creation Display Name"), Expression("jIdUserCreation.[DisplayName]")]
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
    get { return Fields.IdFeaturedTemplate; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Title; }
            }
            #endregion Id and Name fields

    #region Constructor
    public FeaturedTemplateRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[FeaturedTemplate]")
    {
    LocalTextPrefix = "Templates.FeaturedTemplate";
    }
    }
    #endregion RowFields
    }
    }
