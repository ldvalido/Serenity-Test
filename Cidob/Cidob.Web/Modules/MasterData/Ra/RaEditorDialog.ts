
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RaEditorDialog extends Common.GridEditorDialog<RaRow> {
        protected getFormKey() { return RaForm.formKey; }
                protected getLocalTextPrefix() { return RaRow.localTextPrefix; }
        protected getNameProperty() { return RaRow.nameProperty; }
        protected form = new RaForm(this.idPrefix);
    }
}