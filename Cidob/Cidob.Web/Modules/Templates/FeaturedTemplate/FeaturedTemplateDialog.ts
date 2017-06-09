
namespace Cidob.Templates {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FeaturedTemplateDialog extends Serenity.EntityDialog<FeaturedTemplateRow, any> {
        protected getFormKey() { return FeaturedTemplateForm.formKey; }
        protected getIdProperty() { return FeaturedTemplateRow.idProperty; }
        protected getLocalTextPrefix() { return FeaturedTemplateRow.localTextPrefix; }
        protected getNameProperty() { return FeaturedTemplateRow.nameProperty; }
        protected getService() { return FeaturedTemplateService.baseUrl; }

        protected form = new FeaturedTemplateForm(this.idPrefix);

    }
}