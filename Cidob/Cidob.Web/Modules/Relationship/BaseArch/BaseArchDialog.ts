
namespace Cidob.Relationship {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BaseArchDialog extends Serenity.EntityDialog<BaseArchRow, any> {
        protected getFormKey() { return BaseArchForm.formKey; }
        protected getIdProperty() { return BaseArchRow.idProperty; }
        protected getLocalTextPrefix() { return BaseArchRow.localTextPrefix; }
        protected getService() { return BaseArchService.baseUrl; }

        protected form = new BaseArchForm(this.idPrefix);

    }
}