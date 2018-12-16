
using Cidob.Administration.Entities;

namespace Cidob.Configuration.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("UserPrefix"), InstanceName("UserPrefix"), TwoLevelCached]
    [ReadPermission("Configuration:UserPrefix:Read")]
    [InsertPermission("Configuration:UserPrefix:Insert")]
    [UpdatePermission("Configuration:UserPrefix:Update")]
    [DeletePermission("Configuration:UserPrefix:Delete")]
    [LookupScript("Configuration.UserPrefixRow")]
    public sealed class UserPrefixRow : Row, IIdRow, INameRow
    {        
            #region Id User Prefix
            [DisplayName("Id User Prefix"), Identity]
            public Int32? IdUserPrefix { get { return Fields.IdUserPrefix[this]; } set { Fields.IdUserPrefix[this] = value; } }
            public partial class RowFields { public Int32Field IdUserPrefix; }
            #endregion IdUserPrefix
                
            #region Id User
            [DisplayName("Id User"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUser"), TextualField("IdUserUsername")]
            [LookupEditor(typeof(UserRow))]
            public Int32? IdUser { get { return Fields.IdUser[this]; } set { Fields.IdUser[this] = value; } }
            public partial class RowFields { public Int32Field IdUser; }
            #endregion IdUser
                
            #region Prefix
            [DisplayName("Prefix"), Size(3), NotNull, QuickSearch]
            public String Prefix { get { return Fields.Prefix[this]; } set { Fields.Prefix[this] = value; } }
            public partial class RowFields { public StringField Prefix; }
            #endregion Prefix
        

    #region Foreign Fields
            
                [DisplayName("Id User Username"), Expression("jIdUser.[Username]")]
                public String IdUserUsername { get { return Fields.IdUserUsername[this]; } set { Fields.IdUserUsername[this] = value; } }
                public partial class RowFields { public StringField IdUserUsername; }

                        
                [DisplayName("Id User Display Name"), Expression("jIdUser.[DisplayName]")]
                public String IdUserDisplayName { get { return Fields.IdUserDisplayName[this]; } set { Fields.IdUserDisplayName[this] = value; } }
                public partial class RowFields { public StringField IdUserDisplayName; }

                        
                [DisplayName("Id User Email"), Expression("jIdUser.[Email]")]
                public String IdUserEmail { get { return Fields.IdUserEmail[this]; } set { Fields.IdUserEmail[this] = value; } }
                public partial class RowFields { public StringField IdUserEmail; }

                        
                [DisplayName("Id User Source"), Expression("jIdUser.[Source]")]
                public String IdUserSource { get { return Fields.IdUserSource[this]; } set { Fields.IdUserSource[this] = value; } }
                public partial class RowFields { public StringField IdUserSource; }

                        
                [DisplayName("Id User Password Hash"), Expression("jIdUser.[PasswordHash]")]
                public String IdUserPasswordHash { get { return Fields.IdUserPasswordHash[this]; } set { Fields.IdUserPasswordHash[this] = value; } }
                public partial class RowFields { public StringField IdUserPasswordHash; }

                        
                [DisplayName("Id User Password Salt"), Expression("jIdUser.[PasswordSalt]")]
                public String IdUserPasswordSalt { get { return Fields.IdUserPasswordSalt[this]; } set { Fields.IdUserPasswordSalt[this] = value; } }
                public partial class RowFields { public StringField IdUserPasswordSalt; }

                        
                [DisplayName("Id User Last Directory Update"), Expression("jIdUser.[LastDirectoryUpdate]")]
                public DateTime? IdUserLastDirectoryUpdate { get { return Fields.IdUserLastDirectoryUpdate[this]; } set { Fields.IdUserLastDirectoryUpdate[this] = value; } }
                public partial class RowFields { public DateTimeField IdUserLastDirectoryUpdate; }

                        
                [DisplayName("Id User User Image"), Expression("jIdUser.[UserImage]")]
                public String IdUserUserImage { get { return Fields.IdUserUserImage[this]; } set { Fields.IdUserUserImage[this] = value; } }
                public partial class RowFields { public StringField IdUserUserImage; }

                        
                [DisplayName("Id User Insert Date"), Expression("jIdUser.[InsertDate]")]
                public DateTime? IdUserInsertDate { get { return Fields.IdUserInsertDate[this]; } set { Fields.IdUserInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField IdUserInsertDate; }

                        
                [DisplayName("Id User Insert User Id"), Expression("jIdUser.[InsertUserId]")]
                public Int32? IdUserInsertUserId { get { return Fields.IdUserInsertUserId[this]; } set { Fields.IdUserInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field IdUserInsertUserId; }

                        
                [DisplayName("Id User Update Date"), Expression("jIdUser.[UpdateDate]")]
                public DateTime? IdUserUpdateDate { get { return Fields.IdUserUpdateDate[this]; } set { Fields.IdUserUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField IdUserUpdateDate; }

                        
                [DisplayName("Id User Update User Id"), Expression("jIdUser.[UpdateUserId]")]
                public Int32? IdUserUpdateUserId { get { return Fields.IdUserUpdateUserId[this]; } set { Fields.IdUserUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field IdUserUpdateUserId; }

                        
                [DisplayName("Id User Is Active"), Expression("jIdUser.[IsActive]")]
                public Int16? IdUserIsActive { get { return Fields.IdUserIsActive[this]; } set { Fields.IdUserIsActive[this] = value; } }
                public partial class RowFields { public Int16Field IdUserIsActive; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.IdUserPrefix; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Prefix; }
            }
            #endregion Id and Name fields

    #region Constructor
    public UserPrefixRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[UserPrefix]")
    {
    LocalTextPrefix = "Configuration.UserPrefix";
    }
    }
    #endregion RowFields
    }
    }
