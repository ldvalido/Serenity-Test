
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class TransversalArchEditor extends Common.GridEditorBase<TransversalArchRow> {
        protected getColumnsKey() { return 'MasterData.TransversalArch'; }
        protected getDialogType() { return TransversalArchEditorDialog; }
                protected getLocalTextPrefix() { return TransversalArchRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}