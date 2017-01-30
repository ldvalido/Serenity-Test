
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BaseDialog extends Serenity.EntityDialog<BaseRow, any> {
        protected getFormKey() { return BaseForm.formKey; }
        protected getIdProperty() { return BaseRow.idProperty; }
        protected getLocalTextPrefix() { return BaseRow.localTextPrefix; }
        protected getNameProperty() { return BaseRow.nameProperty; }
        protected getService() { return BaseService.baseUrl; }

        protected form = new BaseForm(this.idPrefix);

    }
}