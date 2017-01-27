
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class ArchEditor extends Common.GridEditorBase<ArchRow> {
        protected getColumnsKey() { return 'MasterData.Arch'; }
        protected getDialogType() { return ArchEditorDialog; }
                protected getLocalTextPrefix() { return ArchRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}