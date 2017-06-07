
namespace Cidob.Synchro.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Synchro.Synchronization")]
    [BasedOnRow(typeof(Entities.SynchronizationRow))]
    public class SynchronizationColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 IdSynchroOperation { get; set; }
        
        public String Description { get; set; }
        public String Keyword { get; set; }
        [DateTimeFormatter,Width(200)]
        public DateTime LastSynchroOperation { get; set; }
    }
}