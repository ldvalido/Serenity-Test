
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BrandEditorDialog extends Common.GridEditorDialog<BrandRow> {
        protected getFormKey() { return BrandForm.formKey; }
                protected getLocalTextPrefix() { return BrandRow.localTextPrefix; }
        protected getNameProperty() { return BrandRow.nameProperty; }
        protected form = new BrandForm(this.idPrefix);
    }
}