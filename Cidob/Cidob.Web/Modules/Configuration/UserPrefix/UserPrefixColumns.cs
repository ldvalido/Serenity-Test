
namespace Cidob.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.UserPrefix")]
    [BasedOnRow(typeof(Entities.UserPrefixRow))]
    public class UserPrefixColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdUserPrefix { get; set; }
        public String IdUserDisplayName { get; set; }
        [EditLink]
        public String Prefix { get; set; }
    }
}