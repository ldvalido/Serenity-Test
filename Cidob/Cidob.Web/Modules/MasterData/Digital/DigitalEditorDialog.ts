
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class DigitalEditorDialog extends Common.GridEditorDialog<DigitalRow> {
        protected getFormKey() { return DigitalForm.formKey; }
                protected getLocalTextPrefix() { return DigitalRow.localTextPrefix; }
        protected getNameProperty() { return DigitalRow.nameProperty; }
        protected form = new DigitalForm(this.idPrefix);
    }
}