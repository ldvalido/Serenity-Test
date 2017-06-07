
namespace Cidob.Synchro.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Synchro.Synchronization")]
    [BasedOnRow(typeof(Entities.SynchronizationRow))]
    public class SynchronizationForm
    {
        public String Description { get; set; }
        public String Keyword { get; set; }
        public DateTime LastSynchroOperation { get; set; }
    }
}