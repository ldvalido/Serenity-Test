
namespace Cidob.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.TemplateType")]
    [BasedOnRow(typeof(Entities.TemplateTypeRow))]
    public class TemplateTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdTemplateType { get; set; }
        public  String IdProductDescription { get; set; }
        public Int32 Order { get; set; }
        [EditLink]
        public String Description { get; set; }
        public String PrintName { get; set; }
    }
}