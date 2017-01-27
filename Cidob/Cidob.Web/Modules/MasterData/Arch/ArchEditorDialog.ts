
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ArchEditorDialog extends Common.GridEditorDialog<ArchRow> {
        protected getFormKey() { return ArchForm.formKey; }
                protected getLocalTextPrefix() { return ArchRow.localTextPrefix; }
        protected getNameProperty() { return ArchRow.nameProperty; }
        protected form = new ArchForm(this.idPrefix);
    }
}