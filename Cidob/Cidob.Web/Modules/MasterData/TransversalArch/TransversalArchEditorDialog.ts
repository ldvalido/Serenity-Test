
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TransversalArchEditorDialog extends Common.GridEditorDialog<TransversalArchRow> {
        protected getFormKey() { return TransversalArchForm.formKey; }
                protected getLocalTextPrefix() { return TransversalArchRow.localTextPrefix; }
        protected getNameProperty() { return TransversalArchRow.nameProperty; }
        protected form = new TransversalArchForm(this.idPrefix);
    }
}