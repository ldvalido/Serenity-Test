
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BaseArchEditorDialog extends Common.GridEditorDialog<BaseArchRow> {
        protected getFormKey() { return BaseArchForm.formKey; }
                protected getLocalTextPrefix() { return BaseArchRow.localTextPrefix; }
        protected form = new BaseArchForm(this.idPrefix);
    }
}