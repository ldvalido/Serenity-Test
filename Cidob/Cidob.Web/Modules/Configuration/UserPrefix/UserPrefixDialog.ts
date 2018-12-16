
namespace Cidob.Configuration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class UserPrefixDialog extends Serenity.EntityDialog<UserPrefixRow, any> {
        protected getFormKey() { return UserPrefixForm.formKey; }
        protected getIdProperty() { return UserPrefixRow.idProperty; }
        protected getLocalTextPrefix() { return UserPrefixRow.localTextPrefix; }
        protected getNameProperty() { return UserPrefixRow.nameProperty; }
        protected getService() { return UserPrefixService.baseUrl; }

        protected form = new UserPrefixForm(this.idPrefix);

    }
}