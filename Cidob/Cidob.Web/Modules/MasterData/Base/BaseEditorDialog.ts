
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BaseEditorDialog extends Common.GridEditorDialog<BaseRow> {
        protected getFormKey() { return BaseForm.formKey; }
                protected getLocalTextPrefix() { return BaseRow.localTextPrefix; }
        protected getNameProperty() { return BaseRow.nameProperty; }
        protected form = new BaseForm(this.idPrefix);
    }
}