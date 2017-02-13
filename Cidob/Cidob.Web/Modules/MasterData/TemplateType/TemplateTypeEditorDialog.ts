
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TemplateTypeEditorDialog extends Common.GridEditorDialog<TemplateTypeRow> {
        protected getFormKey() { return TemplateTypeForm.formKey; }
                protected getLocalTextPrefix() { return TemplateTypeRow.localTextPrefix; }
        protected getNameProperty() { return TemplateTypeRow.nameProperty; }
        protected form = new TemplateTypeForm(this.idPrefix);
    }
}