using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Cidob.Meeting
{
    public partial class MeetingAttendeeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Cidob.Meeting.MeetingAttendeeEditor";

        public MeetingAttendeeEditorAttribute()
            : base(Key)
        {
        }
    }
}

