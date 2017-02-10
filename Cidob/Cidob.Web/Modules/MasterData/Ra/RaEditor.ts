
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class RaEditor extends Common.GridEditorBase<RaRow> {
        protected getColumnsKey() { return 'MasterData.Ra'; }
        protected getDialogType() { return RaEditorDialog; }
                protected getLocalTextPrefix() { return RaRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}