
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ShapeEditorDialog extends Common.GridEditorDialog<ShapeRow> {
        protected getFormKey() { return ShapeForm.formKey; }
                protected getLocalTextPrefix() { return ShapeRow.localTextPrefix; }
        protected getNameProperty() { return ShapeRow.nameProperty; }
        protected form = new ShapeForm(this.idPrefix);
    }
}