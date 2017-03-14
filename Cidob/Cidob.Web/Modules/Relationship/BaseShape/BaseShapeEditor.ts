
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    export class BaseShapeEditor extends Common.GridEditorBase<BaseShapeRow> {
        protected getColumnsKey() { return 'Relationship.BaseShape'; }
        protected getDialogType() { return BaseShapeEditorDialog; }
                protected getLocalTextPrefix() { return BaseShapeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}