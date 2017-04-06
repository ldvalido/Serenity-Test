
using Cidob.MasterData.Entities;

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
        [DisplayName("Id Online Template"), Identity, ForeignKey("[dbo].[Cover]", "IdCover"), LeftJoin("jIdOnlineTemplate"), TextualField("IdOnlineTemplateDescription")]
        public Int32? IdOnlineTemplate
        {
            get { return Fields.IdOnlineTemplate[this]; }
            set { Fields.IdOnlineTemplate[this] = value; }
        }

        [DisplayName("Reference"), Size(50), QuickSearch]
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

        [DisplayName("Urgent")]
        public Boolean? Urgent
        {
            get { return Fields.Urgent[this]; }
            set { Fields.Urgent[this] = value; }
        }

        [DisplayName("Id Gender"), NotNull]
        [LookupEditor(typeof(GenderRow))]
        public Int32? IdGender
        {
            get { return Fields.IdGender[this]; }
            set { Fields.IdGender[this] = value; }
        }

        [DisplayName("Id Base"), NotNull, ForeignKey("[dbo].[Base]", "IdBase"), LeftJoin("jIdBase"), TextualField("IdBaseDescription")]
        [LookupEditor(typeof(BaseRow))]
        public Int32? IdBase
        {
            get { return Fields.IdBase[this]; }
            set { Fields.IdBase[this] = value; }
        }

        [DisplayName("Is34")]
        public Boolean? Is34
        {
            get { return Fields.Is34[this]; }
            set { Fields.Is34[this] = value; }
        }

        [DisplayName("Id Shape"), NotNull]
        [LookupEditor(typeof(ShapeRow))]
        public Int32? IdShape
        {
            get { return Fields.IdShape[this]; }
            set { Fields.IdShape[this] = value; }
        }

        [DisplayName("Id Cover"), NotNull]
        [LookupEditor(typeof(CoverRow))]
        public Int32? IdCover
        {
            get { return Fields.IdCover[this]; }
            set { Fields.IdCover[this] = value; }
        }

        [DisplayName("Observations")]
        public String Observations
        {
            get { return Fields.Observations[this]; }
            set { Fields.Observations[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Id User Creation"), Visible(false),NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUserCreation"), TextualField("IdUserCreationUsername")]
        public Int32? IdUserCreation
        {
            get { return Fields.IdUserCreation[this]; }
            set { Fields.IdUserCreation[this] = value; }
        }

        [DisplayName("Id Online Template Id Product"), Expression("jIdOnlineTemplate.[IdProduct]")]
        public Int32? IdOnlineTemplateIdProduct
        {
            get { return Fields.IdOnlineTemplateIdProduct[this]; }
            set { Fields.IdOnlineTemplateIdProduct[this] = value; }
        }

        [DisplayName("Id Online Template Order"), Expression("jIdOnlineTemplate.[Order]")]
        public Int32? IdOnlineTemplateOrder
        {
            get { return Fields.IdOnlineTemplateOrder[this]; }
            set { Fields.IdOnlineTemplateOrder[this] = value; }
        }

        [DisplayName("Id Online Template Description"), Expression("jIdOnlineTemplate.[Description]")]
        public String IdOnlineTemplateDescription
        {
            get { return Fields.IdOnlineTemplateDescription[this]; }
            set { Fields.IdOnlineTemplateDescription[this] = value; }
        }

        [DisplayName("Id Online Template Print Name"), Expression("jIdOnlineTemplate.[PrintName]")]
        public String IdOnlineTemplatePrintName
        {
            get { return Fields.IdOnlineTemplatePrintName[this]; }
            set { Fields.IdOnlineTemplatePrintName[this] = value; }
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

        [DisplayName("Id User Creation Username"), Expression("jIdUserCreation.[Username]")]
        public String IdUserCreationUsername
        {
            get { return Fields.IdUserCreationUsername[this]; }
            set { Fields.IdUserCreationUsername[this] = value; }
        }

        [DisplayName("Id User Creation Display Name"), Expression("jIdUserCreation.[DisplayName]")]
        public String IdUserCreationDisplayName
        {
            get { return Fields.IdUserCreationDisplayName[this]; }
            set { Fields.IdUserCreationDisplayName[this] = value; }
        }

        [DisplayName("Id User Creation Email"), Expression("jIdUserCreation.[Email]")]
        public String IdUserCreationEmail
        {
            get { return Fields.IdUserCreationEmail[this]; }
            set { Fields.IdUserCreationEmail[this] = value; }
        }

        [DisplayName("Id User Creation Source"), Expression("jIdUserCreation.[Source]")]
        public String IdUserCreationSource
        {
            get { return Fields.IdUserCreationSource[this]; }
            set { Fields.IdUserCreationSource[this] = value; }
        }

        [DisplayName("Id User Creation Password Hash"), Expression("jIdUserCreation.[PasswordHash]")]
        public String IdUserCreationPasswordHash
        {
            get { return Fields.IdUserCreationPasswordHash[this]; }
            set { Fields.IdUserCreationPasswordHash[this] = value; }
        }

        [DisplayName("Id User Creation Password Salt"), Expression("jIdUserCreation.[PasswordSalt]")]
        public String IdUserCreationPasswordSalt
        {
            get { return Fields.IdUserCreationPasswordSalt[this]; }
            set { Fields.IdUserCreationPasswordSalt[this] = value; }
        }

        [DisplayName("Id User Creation Last Directory Update"), Expression("jIdUserCreation.[LastDirectoryUpdate]")]
        public DateTime? IdUserCreationLastDirectoryUpdate
        {
            get { return Fields.IdUserCreationLastDirectoryUpdate[this]; }
            set { Fields.IdUserCreationLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Id User Creation User Image"), Expression("jIdUserCreation.[UserImage]")]
        public String IdUserCreationUserImage
        {
            get { return Fields.IdUserCreationUserImage[this]; }
            set { Fields.IdUserCreationUserImage[this] = value; }
        }

        [DisplayName("Id User Creation Insert Date"), Expression("jIdUserCreation.[InsertDate]")]
        public DateTime? IdUserCreationInsertDate
        {
            get { return Fields.IdUserCreationInsertDate[this]; }
            set { Fields.IdUserCreationInsertDate[this] = value; }
        }

        [DisplayName("Id User Creation Insert User Id"), Expression("jIdUserCreation.[InsertUserId]")]
        public Int32? IdUserCreationInsertUserId
        {
            get { return Fields.IdUserCreationInsertUserId[this]; }
            set { Fields.IdUserCreationInsertUserId[this] = value; }
        }

        [DisplayName("Id User Creation Update Date"), Expression("jIdUserCreation.[UpdateDate]")]
        public DateTime? IdUserCreationUpdateDate
        {
            get { return Fields.IdUserCreationUpdateDate[this]; }
            set { Fields.IdUserCreationUpdateDate[this] = value; }
        }

        [DisplayName("Id User Creation Update User Id"), Expression("jIdUserCreation.[UpdateUserId]")]
        public Int32? IdUserCreationUpdateUserId
        {
            get { return Fields.IdUserCreationUpdateUserId[this]; }
            set { Fields.IdUserCreationUpdateUserId[this] = value; }
        }

        [DisplayName("Id User Creation Is Active"), Expression("jIdUserCreation.[IsActive]")]
        public Int16? IdUserCreationIsActive
        {
            get { return Fields.IdUserCreationIsActive[this]; }
            set { Fields.IdUserCreationIsActive[this] = value; }
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
            public BooleanField Urgent;
            public Int32Field IdGender;
            public Int32Field IdBase;
            public BooleanField Is34;
            public Int32Field IdShape;
            public Int32Field IdCover;
            public StringField Observations;
            public Int32Field Quantity;
            public Int32Field IdUserCreation;

            public Int32Field IdOnlineTemplateIdProduct;
            public Int32Field IdOnlineTemplateOrder;
            public StringField IdOnlineTemplateDescription;
            public StringField IdOnlineTemplatePrintName;

            public Int32Field IdBaseIdProduct;
            public Int32Field IdBaseOrder;
            public StringField IdBaseDescription;
            public StringField IdBasePrintName;
            public Int32Field IdBaseFrom;
            public Int32Field IdBaseTo;
            public BooleanField IdBaseEscatola;
            public BooleanField IdBaseNeedArch;
            public BooleanField IdBaseNeedTransversalArch;

            public StringField IdUserCreationUsername;
            public StringField IdUserCreationDisplayName;
            public StringField IdUserCreationEmail;
            public StringField IdUserCreationSource;
            public StringField IdUserCreationPasswordHash;
            public StringField IdUserCreationPasswordSalt;
            public DateTimeField IdUserCreationLastDirectoryUpdate;
            public StringField IdUserCreationUserImage;
            public DateTimeField IdUserCreationInsertDate;
            public Int32Field IdUserCreationInsertUserId;
            public DateTimeField IdUserCreationUpdateDate;
            public Int32Field IdUserCreationUpdateUserId;
            public Int16Field IdUserCreationIsActive;

            public RowFields()
                : base("[dbo].[OnlineTemplate]")
            {
                LocalTextPrefix = "Templates.OnlineTemplate";
            }
        }
    }
}
