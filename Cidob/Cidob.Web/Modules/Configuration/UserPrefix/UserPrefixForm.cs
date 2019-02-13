
namespace Cidob.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.UserPrefix")]
    [BasedOnRow(typeof(Entities.UserPrefixRow))]
    public class UserPrefixForm
    {
        public Int32 IdUser { get; set; }
        public String Prefix { get; set; }
        public Int32 TicketNumber { get; set; }
    }
}