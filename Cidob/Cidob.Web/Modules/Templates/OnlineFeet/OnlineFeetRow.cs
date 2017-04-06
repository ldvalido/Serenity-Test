
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

    [ConnectionKey("Default"), DisplayName("OnlineFeet"), InstanceName("OnlineFeet"), TwoLevelCached]
    [ReadPermission("Template:LoadFeet")]
    [ModifyPermission("Template:LoadFeet")]
    public sealed class OnlineFeetRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Online Feet"), Identity, ForeignKey("[dbo].[CT]", "IdCT"), LeftJoin("jIdOnlineFeet"), TextualField("IdOnlineFeetDescription")]
        public Int32? IdOnlineFeet
        {
            get { return Fields.IdOnlineFeet[this]; }
            set { Fields.IdOnlineFeet[this] = value; }
        }

        [DisplayName("Template Type"), NotNull]
        public Int32? TemplateType
        {
            get { return Fields.TemplateType[this]; }
            set { Fields.TemplateType[this] = value; }
        }

        [DisplayName("Id Internal Arch"), NotNull, ForeignKey("[dbo].[Arch]", "Id"), LeftJoin("jIdInternalArch"), TextualField("IdInternalArchDescription")]
        [LookupEditor(typeof(ArchRow))]
        public Int32? IdInternalArch
        {
            get { return Fields.IdInternalArch[this]; }
            set { Fields.IdInternalArch[this] = value; }
        }

        [DisplayName("Id External Arch"), NotNull, ForeignKey("[dbo].[Arch]", "Id"), LeftJoin("jIdExternalArch"), TextualField("IdExternalArchDescription")]
        [LookupEditor(typeof(ArchRow))]
        public Int32? IdExternalArch
        {
            get { return Fields.IdExternalArch[this]; }
            set { Fields.IdExternalArch[this] = value; }
        }

        [DisplayName("Id Olive"), NotNull, ForeignKey("[dbo].[Olive]", "IdOlive"), LeftJoin("jIdOlive"), TextualField("IdOliveDescription")]
        [LookupEditor(typeof(OliveRow))]
        public Int32? IdOlive
        {
            get { return Fields.IdOlive[this]; }
            set { Fields.IdOlive[this] = value; }
        }

        [DisplayName("Id Ct"), Column("IdCT"), NotNull]
        [LookupEditor(typeof(CtRow))]
        public Int32? IdCt
        {
            get { return Fields.IdCt[this]; }
            set { Fields.IdCt[this] = value; }
        }

        [DisplayName("Id Ra"), Column("IdRA"), NotNull, ForeignKey("[dbo].[RA]", "IdRA"), LeftJoin("jIdRa"), TextualField("IdRaDescription")]
        [LookupEditor(typeof(RaRow))]
        public Int32? IdRa
        {
            get { return Fields.IdRa[this]; }
            set { Fields.IdRa[this] = value; }
        }

        [DisplayName("Id Heel"), NotNull, ForeignKey("[dbo].[Heel]", "IdHeel"), LeftJoin("jIdHeel"), TextualField("IdHeelDescription")]
        [LookupEditor(typeof(HeelRow))]
        public Int32? IdHeel
        {
            get { return Fields.IdHeel[this]; }
            set { Fields.IdHeel[this] = value; }
        }

        [DisplayName("Is Single Mit"), Column("IsSingleMIT"), NotNull]
        public Boolean? IsSingleMit
        {
            get { return Fields.IsSingleMit[this]; }
            set { Fields.IsSingleMit[this] = value; }
        }

        [DisplayName("Is Double Mit"), Column("IsDoubleMIT"), NotNull]
        public Boolean? IsDoubleMit
        {
            get { return Fields.IsDoubleMit[this]; }
            set { Fields.IsDoubleMit[this] = value; }
        }

        [DisplayName("Internal Arch Number"), NotNull]
        public Int32? InternalArchNumber
        {
            get { return Fields.InternalArchNumber[this]; }
            set { Fields.InternalArchNumber[this] = value; }
        }

        [DisplayName("External Arch Number"), NotNull]
        public Int32? ExternalArchNumber
        {
            get { return Fields.ExternalArchNumber[this]; }
            set { Fields.ExternalArchNumber[this] = value; }
        }

        [DisplayName("Olive Number"), NotNull]
        public Int32? OliveNumber
        {
            get { return Fields.OliveNumber[this]; }
            set { Fields.OliveNumber[this] = value; }
        }

        [DisplayName("Ct Number"), Column("CTNumber"), NotNull]
        public Int32? CtNumber
        {
            get { return Fields.CtNumber[this]; }
            set { Fields.CtNumber[this] = value; }
        }

        [DisplayName("Ra Number"), Column("RANumber"), NotNull]
        public Int32? RaNumber
        {
            get { return Fields.RaNumber[this]; }
            set { Fields.RaNumber[this] = value; }
        }

        [DisplayName("Heel Number"), NotNull]
        public Int32? HeelNumber
        {
            get { return Fields.HeelNumber[this]; }
            set { Fields.HeelNumber[this] = value; }
        }

        [DisplayName("Bar Value"), Size(5), QuickSearch]
        public String BarValue
        {
            get { return Fields.BarValue[this]; }
            set { Fields.BarValue[this] = value; }
        }

        [DisplayName("Neck Value"), Size(5)]
        public String NeckValue
        {
            get { return Fields.NeckValue[this]; }
            set { Fields.NeckValue[this] = value; }
        }

        [DisplayName("Behind Neck"), NotNull]
        public Boolean? BehindNeck
        {
            get { return Fields.BehindNeck[this]; }
            set { Fields.BehindNeck[this] = value; }
        }

        [DisplayName("Id Digital"), NotNull, ForeignKey("[dbo].[Digital]", "IdDigital"), LeftJoin("jIdDigital"), TextualField("IdDigitalDescription")]
        [LookupEditor(typeof(DigitalRow))]
        public Int32? IdDigital
        {
            get { return Fields.IdDigital[this]; }
            set { Fields.IdDigital[this] = value; }
        }

        [DisplayName("Addapt To Number"), NotNull]
        public Int32? AddaptToNumber
        {
            get { return Fields.AddaptToNumber[this]; }
            set { Fields.AddaptToNumber[this] = value; }
        }

        [DisplayName("Id Online Feet Id Product"), Expression("jIdOnlineFeet.[IdProduct]")]
        public Int32? IdOnlineFeetIdProduct
        {
            get { return Fields.IdOnlineFeetIdProduct[this]; }
            set { Fields.IdOnlineFeetIdProduct[this] = value; }
        }

        [DisplayName("Id Online Feet Order"), Expression("jIdOnlineFeet.[Order]")]
        public Int32? IdOnlineFeetOrder
        {
            get { return Fields.IdOnlineFeetOrder[this]; }
            set { Fields.IdOnlineFeetOrder[this] = value; }
        }

        [DisplayName("Id Online Feet Description"), Expression("jIdOnlineFeet.[Description]")]
        public String IdOnlineFeetDescription
        {
            get { return Fields.IdOnlineFeetDescription[this]; }
            set { Fields.IdOnlineFeetDescription[this] = value; }
        }

        [DisplayName("Id Online Feet Print Name"), Expression("jIdOnlineFeet.[PrintName]")]
        public String IdOnlineFeetPrintName
        {
            get { return Fields.IdOnlineFeetPrintName[this]; }
            set { Fields.IdOnlineFeetPrintName[this] = value; }
        }

        [DisplayName("Id Internal Arch Id Product"), Expression("jIdInternalArch.[IdProduct]")]
        public Int32? IdInternalArchIdProduct
        {
            get { return Fields.IdInternalArchIdProduct[this]; }
            set { Fields.IdInternalArchIdProduct[this] = value; }
        }

        [DisplayName("Id Internal Arch Order"), Expression("jIdInternalArch.[Order]")]
        public Int32? IdInternalArchOrder
        {
            get { return Fields.IdInternalArchOrder[this]; }
            set { Fields.IdInternalArchOrder[this] = value; }
        }

        [DisplayName("Id Internal Arch Description"), Expression("jIdInternalArch.[Description]")]
        public String IdInternalArchDescription
        {
            get { return Fields.IdInternalArchDescription[this]; }
            set { Fields.IdInternalArchDescription[this] = value; }
        }

        [DisplayName("Id Internal Arch Print Description"), Expression("jIdInternalArch.[PrintDescription]")]
        public String IdInternalArchPrintDescription
        {
            get { return Fields.IdInternalArchPrintDescription[this]; }
            set { Fields.IdInternalArchPrintDescription[this] = value; }
        }

        [DisplayName("Id Internal Arch Is Valenti"), Expression("jIdInternalArch.[IsValenti]")]
        public Boolean? IdInternalArchIsValenti
        {
            get { return Fields.IdInternalArchIsValenti[this]; }
            set { Fields.IdInternalArchIsValenti[this] = value; }
        }

        [DisplayName("Id External Arch Id Product"), Expression("jIdExternalArch.[IdProduct]")]
        public Int32? IdExternalArchIdProduct
        {
            get { return Fields.IdExternalArchIdProduct[this]; }
            set { Fields.IdExternalArchIdProduct[this] = value; }
        }

        [DisplayName("Id External Arch Order"), Expression("jIdExternalArch.[Order]")]
        public Int32? IdExternalArchOrder
        {
            get { return Fields.IdExternalArchOrder[this]; }
            set { Fields.IdExternalArchOrder[this] = value; }
        }

        [DisplayName("Id External Arch Description"), Expression("jIdExternalArch.[Description]")]
        public String IdExternalArchDescription
        {
            get { return Fields.IdExternalArchDescription[this]; }
            set { Fields.IdExternalArchDescription[this] = value; }
        }

        [DisplayName("Id External Arch Print Description"), Expression("jIdExternalArch.[PrintDescription]")]
        public String IdExternalArchPrintDescription
        {
            get { return Fields.IdExternalArchPrintDescription[this]; }
            set { Fields.IdExternalArchPrintDescription[this] = value; }
        }

        [DisplayName("Id External Arch Is Valenti"), Expression("jIdExternalArch.[IsValenti]")]
        public Boolean? IdExternalArchIsValenti
        {
            get { return Fields.IdExternalArchIsValenti[this]; }
            set { Fields.IdExternalArchIsValenti[this] = value; }
        }

        [DisplayName("Id Olive Id Product"), Expression("jIdOlive.[IdProduct]")]
        public Int32? IdOliveIdProduct
        {
            get { return Fields.IdOliveIdProduct[this]; }
            set { Fields.IdOliveIdProduct[this] = value; }
        }

        [DisplayName("Id Olive Order"), Expression("jIdOlive.[Order]")]
        public Int32? IdOliveOrder
        {
            get { return Fields.IdOliveOrder[this]; }
            set { Fields.IdOliveOrder[this] = value; }
        }

        [DisplayName("Id Olive Description"), Expression("jIdOlive.[Description]")]
        public String IdOliveDescription
        {
            get { return Fields.IdOliveDescription[this]; }
            set { Fields.IdOliveDescription[this] = value; }
        }

        [DisplayName("Id Olive Print Name"), Expression("jIdOlive.[PrintName]")]
        public String IdOlivePrintName
        {
            get { return Fields.IdOlivePrintName[this]; }
            set { Fields.IdOlivePrintName[this] = value; }
        }

        [DisplayName("Id Ra Id Product"), Expression("jIdRa.[IdProduct]")]
        public Int32? IdRaIdProduct
        {
            get { return Fields.IdRaIdProduct[this]; }
            set { Fields.IdRaIdProduct[this] = value; }
        }

        [DisplayName("Id Ra Order"), Expression("jIdRa.[Order]")]
        public Int32? IdRaOrder
        {
            get { return Fields.IdRaOrder[this]; }
            set { Fields.IdRaOrder[this] = value; }
        }

        [DisplayName("Id Ra Description"), Expression("jIdRa.[Description]")]
        public String IdRaDescription
        {
            get { return Fields.IdRaDescription[this]; }
            set { Fields.IdRaDescription[this] = value; }
        }

        [DisplayName("Id Ra Print Name"), Expression("jIdRa.[PrintName]")]
        public String IdRaPrintName
        {
            get { return Fields.IdRaPrintName[this]; }
            set { Fields.IdRaPrintName[this] = value; }
        }

        [DisplayName("Id Heel Id Product"), Expression("jIdHeel.[IdProduct]")]
        public Int32? IdHeelIdProduct
        {
            get { return Fields.IdHeelIdProduct[this]; }
            set { Fields.IdHeelIdProduct[this] = value; }
        }

        [DisplayName("Id Heel Order"), Expression("jIdHeel.[Order]")]
        public Int32? IdHeelOrder
        {
            get { return Fields.IdHeelOrder[this]; }
            set { Fields.IdHeelOrder[this] = value; }
        }

        [DisplayName("Id Heel Description"), Expression("jIdHeel.[Description]")]
        public String IdHeelDescription
        {
            get { return Fields.IdHeelDescription[this]; }
            set { Fields.IdHeelDescription[this] = value; }
        }

        [DisplayName("Id Heel Print Name"), Expression("jIdHeel.[PrintName]")]
        public String IdHeelPrintName
        {
            get { return Fields.IdHeelPrintName[this]; }
            set { Fields.IdHeelPrintName[this] = value; }
        }

        [DisplayName("Id Digital Id Product"), Expression("jIdDigital.[IdProduct]")]
        public Int32? IdDigitalIdProduct
        {
            get { return Fields.IdDigitalIdProduct[this]; }
            set { Fields.IdDigitalIdProduct[this] = value; }
        }

        [DisplayName("Id Digital Order"), Expression("jIdDigital.[Order]")]
        public Int32? IdDigitalOrder
        {
            get { return Fields.IdDigitalOrder[this]; }
            set { Fields.IdDigitalOrder[this] = value; }
        }

        [DisplayName("Id Digital Description"), Expression("jIdDigital.[Description]")]
        public String IdDigitalDescription
        {
            get { return Fields.IdDigitalDescription[this]; }
            set { Fields.IdDigitalDescription[this] = value; }
        }

        [DisplayName("Id Digital Print Name"), Expression("jIdDigital.[PrintName]")]
        public String IdDigitalPrintName
        {
            get { return Fields.IdDigitalPrintName[this]; }
            set { Fields.IdDigitalPrintName[this] = value; }
        }

        [DisplayName("Id Digital Is Valenti"), Expression("jIdDigital.[IsValenti]")]
        public Boolean? IdDigitalIsValenti
        {
            get { return Fields.IdDigitalIsValenti[this]; }
            set { Fields.IdDigitalIsValenti[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdOnlineFeet; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BarValue; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OnlineFeetRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdOnlineFeet;
            public Int32Field TemplateType;
            public Int32Field IdInternalArch;
            public Int32Field IdExternalArch;
            public Int32Field IdOlive;
            public Int32Field IdCt;
            public Int32Field IdRa;
            public Int32Field IdHeel;
            public BooleanField IsSingleMit;
            public BooleanField IsDoubleMit;
            public Int32Field InternalArchNumber;
            public Int32Field ExternalArchNumber;
            public Int32Field OliveNumber;
            public Int32Field CtNumber;
            public Int32Field RaNumber;
            public Int32Field HeelNumber;
            public StringField BarValue;
            public StringField NeckValue;
            public BooleanField BehindNeck;
            public Int32Field IdDigital;
            public Int32Field AddaptToNumber;

            public Int32Field IdOnlineFeetIdProduct;
            public Int32Field IdOnlineFeetOrder;
            public StringField IdOnlineFeetDescription;
            public StringField IdOnlineFeetPrintName;

            public Int32Field IdInternalArchIdProduct;
            public Int32Field IdInternalArchOrder;
            public StringField IdInternalArchDescription;
            public StringField IdInternalArchPrintDescription;
            public BooleanField IdInternalArchIsValenti;

            public Int32Field IdExternalArchIdProduct;
            public Int32Field IdExternalArchOrder;
            public StringField IdExternalArchDescription;
            public StringField IdExternalArchPrintDescription;
            public BooleanField IdExternalArchIsValenti;

            public Int32Field IdOliveIdProduct;
            public Int32Field IdOliveOrder;
            public StringField IdOliveDescription;
            public StringField IdOlivePrintName;

            public Int32Field IdRaIdProduct;
            public Int32Field IdRaOrder;
            public StringField IdRaDescription;
            public StringField IdRaPrintName;

            public Int32Field IdHeelIdProduct;
            public Int32Field IdHeelOrder;
            public StringField IdHeelDescription;
            public StringField IdHeelPrintName;

            public Int32Field IdDigitalIdProduct;
            public Int32Field IdDigitalOrder;
            public StringField IdDigitalDescription;
            public StringField IdDigitalPrintName;
            public BooleanField IdDigitalIsValenti;

            public RowFields()
                : base("[dbo].[OnlineFeet]")
            {
                LocalTextPrefix = "Templates.OnlineFeet";
            }
        }
    }
}
