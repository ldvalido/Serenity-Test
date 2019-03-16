
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    export class BaseTransversalArchEditor extends Common.GridEditorBase<BaseTransversalArchRow> {
        protected getColumnsKey() { return 'Relationship.BaseTransversalArch'; }
        protected getDialogType() { return BaseTransversalArchEditorDialog; }
                protected getLocalTextPrefix() { return BaseTransversalArchRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}