
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class HeelEditor extends Common.GridEditorBase<HeelRow> {
        protected getColumnsKey() { return 'MasterData.Heel'; }
        protected getDialogType() { return HeelEditorDialog; }
                protected getLocalTextPrefix() { return HeelRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}