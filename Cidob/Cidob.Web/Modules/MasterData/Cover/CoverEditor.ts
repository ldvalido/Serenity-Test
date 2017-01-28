
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class CoverEditor extends Common.GridEditorBase<CoverRow> {
        protected getColumnsKey() { return 'MasterData.Cover'; }
        protected getDialogType() { return CoverEditorDialog; }
                protected getLocalTextPrefix() { return CoverRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}