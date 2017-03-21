
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.Templates {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class OnlineFeetEditorDialog extends Common.GridEditorDialog<OnlineFeetRow> {
        protected getFormKey() { return OnlineFeetForm.formKey; }
                protected getLocalTextPrefix() { return OnlineFeetRow.localTextPrefix; }
        protected getNameProperty() { return OnlineFeetRow.nameProperty; }
        protected form = new OnlineFeetForm(this.idPrefix);
    }
}