
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class ShapeEditor extends Common.GridEditorBase<ShapeRow> {
        protected getColumnsKey() { return 'MasterData.Shape'; }
        protected getDialogType() { return ShapeEditorDialog; }
                protected getLocalTextPrefix() { return ShapeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}