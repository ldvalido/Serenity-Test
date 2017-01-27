
namespace Cidob.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.Product")]
    [BasedOnRow(typeof(Entities.ProductRow))]
    public class ProductForm
    {
        public String Description { get; set; }
        public String Code { get; set; }
    }
}