
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TemplateTypeDialog extends Serenity.EntityDialog<TemplateTypeRow, any> {
        protected getFormKey() { return TemplateTypeForm.formKey; }
        protected getIdProperty() { return TemplateTypeRow.idProperty; }
        protected getLocalTextPrefix() { return TemplateTypeRow.localTextPrefix; }
        protected getNameProperty() { return TemplateTypeRow.nameProperty; }
        protected getService() { return TemplateTypeService.baseUrl; }

        protected form = new TemplateTypeForm(this.idPrefix);

    }
}