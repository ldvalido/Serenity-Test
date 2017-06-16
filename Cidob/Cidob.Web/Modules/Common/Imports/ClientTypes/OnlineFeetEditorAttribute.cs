using Serenity.ComponentModel;

namespace Cidob
{
    public partial class OnlineFeetEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Cidob.Templates.OnlineFeetEditor";

        public OnlineFeetEditorAttribute()
            : base(Key)
        {
        }
    }
}

