
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class GroupEditorDialog extends Common.GridEditorDialog<GroupRow> {
        protected getFormKey() { return GroupForm.formKey; }
                protected getLocalTextPrefix() { return GroupRow.localTextPrefix; }
        protected getNameProperty() { return GroupRow.nameProperty; }
        protected form = new GroupForm(this.idPrefix);
    }
}