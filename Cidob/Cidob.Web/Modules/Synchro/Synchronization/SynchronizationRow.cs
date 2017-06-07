
namespace Cidob.Synchro.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("SynchroOperation"), InstanceName("SynchroOperation"), TwoLevelCached]
    [ReadPermission("Synchro:Synchro")]
    [ModifyPermission("Synchro:Synchro")]
    public sealed class SynchronizationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Synchro Operation"), Identity]
        public Int32? IdSynchroOperation
        {
            get { return Fields.IdSynchroOperation[this]; }
            set { Fields.IdSynchroOperation[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Keyword"), Size(255), NotNull]
        public String Keyword
        {
            get { return Fields.Keyword[this]; }
            set { Fields.Keyword[this] = value; }
        }

        [DisplayName("Last Synchro Operation"), NotNull,DateTimeEditor]
        public DateTime? LastSynchroOperation
        {
            get { return Fields.LastSynchroOperation[this]; }
            set { Fields.LastSynchroOperation[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdSynchroOperation; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SynchronizationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdSynchroOperation;
            public StringField Description;
            public StringField Keyword;
            public DateTimeField LastSynchroOperation;

            public RowFields()
                : base("[dbo].[SynchroOperation]")
            {
                LocalTextPrefix = "Synchro.Synchronization";
            }
        }
    }
}
