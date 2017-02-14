
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    export class BaseArchEditor extends Common.GridEditorBase<BaseArchRow> {
        protected getColumnsKey() { return 'Relationship.BaseArch'; }
        protected getDialogType() { return BaseArchEditorDialog; }
                protected getLocalTextPrefix() { return BaseArchRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}