
namespace Cidob.Configuration {
    
    @Serenity.Decorators.registerClass()
    export class UserPrefixGrid extends Serenity.EntityGrid<UserPrefixRow, any> {
        protected getColumnsKey() { return 'Configuration.UserPrefix'; }
        protected getDialogType() { return UserPrefixDialog; }
        protected getIdProperty() { return UserPrefixRow.idProperty; }
        protected getLocalTextPrefix() { return UserPrefixRow.localTextPrefix; }
        protected getService() { return UserPrefixService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}