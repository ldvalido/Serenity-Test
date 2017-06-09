
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.Templates {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FeaturedTemplateEditorDialog extends Common.GridEditorDialog<FeaturedTemplateRow> {
        protected getFormKey() { return FeaturedTemplateForm.formKey; }
                protected getLocalTextPrefix() { return FeaturedTemplateRow.localTextPrefix; }
        protected getNameProperty() { return FeaturedTemplateRow.nameProperty; }
        protected form = new FeaturedTemplateForm(this.idPrefix);
    }
}