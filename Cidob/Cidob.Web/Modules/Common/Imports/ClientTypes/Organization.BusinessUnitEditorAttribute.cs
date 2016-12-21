using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Cidob.Organization
{
    public partial class BusinessUnitEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "Cidob.Organization.BusinessUnitEditor";

        public BusinessUnitEditorAttribute()
            : base(Key)
        {
        }
    }
}

