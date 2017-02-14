
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BaseGroupEditorDialog extends Common.GridEditorDialog<BaseGroupRow> {
        protected getFormKey() { return BaseGroupForm.formKey; }
                protected getLocalTextPrefix() { return BaseGroupRow.localTextPrefix; }
        protected form = new BaseGroupForm(this.idPrefix);
    }
}