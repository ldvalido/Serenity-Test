
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.Configuration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class UserPrefixEditorDialog extends Common.GridEditorDialog<UserPrefixRow> {
        protected getFormKey() { return UserPrefixForm.formKey; }
                protected getLocalTextPrefix() { return UserPrefixRow.localTextPrefix; }
        protected getNameProperty() { return UserPrefixRow.nameProperty; }
        protected form = new UserPrefixForm(this.idPrefix);
    }
}