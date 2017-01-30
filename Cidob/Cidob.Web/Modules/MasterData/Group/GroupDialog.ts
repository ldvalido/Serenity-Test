
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class GroupDialog extends Serenity.EntityDialog<GroupRow, any> {
        protected getFormKey() { return GroupForm.formKey; }
        protected getIdProperty() { return GroupRow.idProperty; }
        protected getLocalTextPrefix() { return GroupRow.localTextPrefix; }
        protected getNameProperty() { return GroupRow.nameProperty; }
        protected getService() { return GroupService.baseUrl; }

        protected form = new GroupForm(this.idPrefix);

    }
}