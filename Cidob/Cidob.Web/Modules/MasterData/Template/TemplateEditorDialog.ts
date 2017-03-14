
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TemplateEditorDialog extends Common.GridEditorDialog<TemplateRow> {
        protected getFormKey() { return TemplateForm.formKey; }
                protected getLocalTextPrefix() { return TemplateRow.localTextPrefix; }
        protected getNameProperty() { return TemplateRow.nameProperty; }
        protected form = new TemplateForm(this.idPrefix);
    }
}