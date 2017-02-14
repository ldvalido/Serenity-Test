
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BaseShapeEditorDialog extends Common.GridEditorDialog<BaseShapeRow> {
        protected getFormKey() { return BaseShapeForm.formKey; }
                protected getLocalTextPrefix() { return BaseShapeRow.localTextPrefix; }
        protected form = new BaseShapeForm(this.idPrefix);
    }
}