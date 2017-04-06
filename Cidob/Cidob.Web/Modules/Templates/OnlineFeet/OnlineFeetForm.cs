
namespace Cidob.Templates.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Templates.OnlineFeet")]
    [BasedOnRow(typeof(Entities.OnlineFeetRow))]
    public class OnlineFeetForm
    {
        public Int32 TemplateType { get; set; }
        public Int32 IdInternalArch { get; set; }
        public Int32 IdExternalArch { get; set; }
        public Int32 IdOlive { get; set; }
        public Int32 IdCt { get; set; }
        public Int32 IdRa { get; set; }
        public Int32 IdHeel { get; set; }
        public Boolean IsSingleMit { get; set; }
        public Boolean IsDoubleMit { get; set; }
        public Int32 InternalArchNumber { get; set; }
        public Int32 ExternalArchNumber { get; set; }
        public Int32 OliveNumber { get; set; }
        public Int32 CtNumber { get; set; }
        public Int32 RaNumber { get; set; }
        public Int32 HeelNumber { get; set; }
        public String BarValue { get; set; }
        public String NeckValue { get; set; }
        public Boolean BehindNeck { get; set; }
        public Int32 IdDigital { get; set; }
        public Int32 AddaptToNumber { get; set; }
    }
}