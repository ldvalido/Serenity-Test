
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class GroupEditor extends Common.GridEditorBase<GroupRow> {
        protected getColumnsKey() { return 'MasterData.Group'; }
        protected getDialogType() { return GroupEditorDialog; }
                protected getLocalTextPrefix() { return GroupRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}