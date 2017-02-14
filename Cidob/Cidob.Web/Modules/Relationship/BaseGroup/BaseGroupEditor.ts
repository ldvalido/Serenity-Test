
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    export class BaseGroupEditor extends Common.GridEditorBase<BaseGroupRow> {
        protected getColumnsKey() { return 'Relationship.BaseGroup'; }
        protected getDialogType() { return BaseGroupEditorDialog; }
                protected getLocalTextPrefix() { return BaseGroupRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}