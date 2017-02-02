
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class DigitalEditor extends Common.GridEditorBase<DigitalRow> {
        protected getColumnsKey() { return 'MasterData.Digital'; }
        protected getDialogType() { return DigitalEditorDialog; }
                protected getLocalTextPrefix() { return DigitalRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}