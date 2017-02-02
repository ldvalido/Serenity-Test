
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class HeelEditorDialog extends Common.GridEditorDialog<HeelRow> {
        protected getFormKey() { return HeelForm.formKey; }
                protected getLocalTextPrefix() { return HeelRow.localTextPrefix; }
        protected getNameProperty() { return HeelRow.nameProperty; }
        protected form = new HeelForm(this.idPrefix);
    }
}