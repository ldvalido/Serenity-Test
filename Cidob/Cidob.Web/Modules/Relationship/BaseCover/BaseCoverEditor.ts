
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    export class BaseCoverEditor extends Common.GridEditorBase<BaseCoverRow> {
        protected getColumnsKey() { return 'Relationship.BaseCover'; }
        protected getDialogType() { return BaseCoverEditorDialog; }
                protected getLocalTextPrefix() { return BaseCoverRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}