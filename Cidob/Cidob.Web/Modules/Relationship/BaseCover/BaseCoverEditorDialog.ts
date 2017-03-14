
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BaseCoverEditorDialog extends Common.GridEditorDialog<BaseCoverRow> {
        protected getFormKey() { return BaseCoverForm.formKey; }
                protected getLocalTextPrefix() { return BaseCoverRow.localTextPrefix; }
        protected form = new BaseCoverForm(this.idPrefix);
    }
}