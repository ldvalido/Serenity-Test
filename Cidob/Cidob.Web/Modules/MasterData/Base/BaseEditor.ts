
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class BaseEditor extends Common.GridEditorBase<BaseRow> {
        protected getColumnsKey() { return 'MasterData.Base'; }
        protected getDialogType() { return BaseEditorDialog; }
                protected getLocalTextPrefix() { return BaseRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}