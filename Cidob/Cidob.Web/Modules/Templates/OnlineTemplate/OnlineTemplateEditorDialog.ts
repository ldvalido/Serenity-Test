
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.Templates {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class OnlineTemplateEditorDialog extends Common.GridEditorDialog<OnlineTemplateRow> {
        protected getFormKey() { return OnlineTemplateForm.formKey; }
                protected getLocalTextPrefix() { return OnlineTemplateRow.localTextPrefix; }
        protected getNameProperty() { return OnlineTemplateRow.nameProperty; }
        protected form = new OnlineTemplateForm(this.idPrefix);
    }
}