
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class GenderEditorDialog extends Common.GridEditorDialog<GenderRow> {
        protected getFormKey() { return GenderForm.formKey; }
                protected getLocalTextPrefix() { return GenderRow.localTextPrefix; }
        protected getNameProperty() { return GenderRow.nameProperty; }
        protected form = new GenderForm(this.idPrefix);
    }
}