
namespace Cidob.Relationship {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BaseGroupDialog extends Serenity.EntityDialog<BaseGroupRow, any> {
        protected getFormKey() { return BaseGroupForm.formKey; }
        protected getIdProperty() { return BaseGroupRow.idProperty; }
        protected getLocalTextPrefix() { return BaseGroupRow.localTextPrefix; }
        protected getService() { return BaseGroupService.baseUrl; }

        protected form = new BaseGroupForm(this.idPrefix);

    }
}