
namespace Cidob.Relationship {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BaseTransversalArchDialog extends Serenity.EntityDialog<BaseTransversalArchRow, any> {
        protected getFormKey() { return BaseTransversalArchForm.formKey; }
        protected getIdProperty() { return BaseTransversalArchRow.idProperty; }
        protected getLocalTextPrefix() { return BaseTransversalArchRow.localTextPrefix; }
        protected getService() { return BaseTransversalArchService.baseUrl; }

        protected form = new BaseTransversalArchForm(this.idPrefix);

    }
}