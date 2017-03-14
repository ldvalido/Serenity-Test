
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TemplateDialog extends Serenity.EntityDialog<TemplateRow, any> {
        protected getFormKey() { return TemplateForm.formKey; }
        protected getIdProperty() { return TemplateRow.idProperty; }
        protected getLocalTextPrefix() { return TemplateRow.localTextPrefix; }
        protected getNameProperty() { return TemplateRow.nameProperty; }
        protected getService() { return TemplateService.baseUrl; }

        protected form = new TemplateForm(this.idPrefix);

    }
}