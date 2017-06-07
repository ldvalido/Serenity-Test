
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.Synchro {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SynchronizationEditorDialog extends Common.GridEditorDialog<SynchronizationRow> {
        protected getFormKey() { return SynchronizationForm.formKey; }
                protected getLocalTextPrefix() { return SynchronizationRow.localTextPrefix; }
        protected getNameProperty() { return SynchronizationRow.nameProperty; }
        protected form = new SynchronizationForm(this.idPrefix);
    }
}