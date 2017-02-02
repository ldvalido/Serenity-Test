
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class CtEditor extends Common.GridEditorBase<CtRow> {
        protected getColumnsKey() { return 'MasterData.Ct'; }
        protected getDialogType() { return CtEditorDialog; }
                protected getLocalTextPrefix() { return CtRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}