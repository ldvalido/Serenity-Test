
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CoverEditorDialog extends Common.GridEditorDialog<CoverRow> {
        protected getFormKey() { return CoverForm.formKey; }
                protected getLocalTextPrefix() { return CoverRow.localTextPrefix; }
        protected getNameProperty() { return CoverRow.nameProperty; }
        protected form = new CoverForm(this.idPrefix);
    }
}