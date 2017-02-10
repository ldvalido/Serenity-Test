
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class OliveEditorDialog extends Common.GridEditorDialog<OliveRow> {
        protected getFormKey() { return OliveForm.formKey; }
                protected getLocalTextPrefix() { return OliveRow.localTextPrefix; }
        protected getNameProperty() { return OliveRow.nameProperty; }
        protected form = new OliveForm(this.idPrefix);
    }
}