
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.Synchro {
    
    @Serenity.Decorators.registerClass()
    export class SynchronizationEditor extends Common.GridEditorBase<SynchronizationRow> {
        protected getColumnsKey() { return 'Synchro.Synchronization'; }
        protected getDialogType() { return SynchronizationEditorDialog; }
                protected getLocalTextPrefix() { return SynchronizationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}