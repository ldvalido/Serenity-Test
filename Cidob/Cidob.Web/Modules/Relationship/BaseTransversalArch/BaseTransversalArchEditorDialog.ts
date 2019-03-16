
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BaseTransversalArchEditorDialog extends Common.GridEditorDialog<BaseTransversalArchRow> {
        protected getFormKey() { return BaseTransversalArchForm.formKey; }
                protected getLocalTextPrefix() { return BaseTransversalArchRow.localTextPrefix; }
        protected form = new BaseTransversalArchForm(this.idPrefix);
    }
}