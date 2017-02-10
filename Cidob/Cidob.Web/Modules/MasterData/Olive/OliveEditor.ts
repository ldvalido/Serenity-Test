
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class OliveEditor extends Common.GridEditorBase<OliveRow> {
        protected getColumnsKey() { return 'MasterData.Olive'; }
        protected getDialogType() { return OliveEditorDialog; }
                protected getLocalTextPrefix() { return OliveRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}