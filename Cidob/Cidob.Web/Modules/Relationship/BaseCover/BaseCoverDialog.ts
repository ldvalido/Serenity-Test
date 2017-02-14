
namespace Cidob.Relationship {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BaseCoverDialog extends Serenity.EntityDialog<BaseCoverRow, any> {
        protected getFormKey() { return BaseCoverForm.formKey; }
        protected getIdProperty() { return BaseCoverRow.idProperty; }
        protected getLocalTextPrefix() { return BaseCoverRow.localTextPrefix; }
        protected getService() { return BaseCoverService.baseUrl; }

        protected form = new BaseCoverForm(this.idPrefix);

    }
}