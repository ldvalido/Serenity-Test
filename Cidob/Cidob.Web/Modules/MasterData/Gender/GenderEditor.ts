
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class GenderEditor extends Common.GridEditorBase<GenderRow> {
        protected getColumnsKey() { return 'MasterData.Gender'; }
        protected getDialogType() { return GenderEditorDialog; }
                protected getLocalTextPrefix() { return GenderRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}