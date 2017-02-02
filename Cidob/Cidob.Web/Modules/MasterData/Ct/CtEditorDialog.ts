
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CtEditorDialog extends Common.GridEditorDialog<CtRow> {
        protected getFormKey() { return CtForm.formKey; }
                protected getLocalTextPrefix() { return CtRow.localTextPrefix; }
        protected getNameProperty() { return CtRow.nameProperty; }
        protected form = new CtForm(this.idPrefix);
    }
}