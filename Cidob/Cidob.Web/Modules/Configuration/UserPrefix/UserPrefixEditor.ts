
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.Configuration {
    
    @Serenity.Decorators.registerClass()
    export class UserPrefixEditor extends Common.GridEditorBase<UserPrefixRow> {
        protected getColumnsKey() { return 'Configuration.UserPrefix'; }
        protected getDialogType() { return UserPrefixEditorDialog; }
                protected getLocalTextPrefix() { return UserPrefixRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}