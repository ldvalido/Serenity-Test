
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.Templates {
    
    @Serenity.Decorators.registerClass()
    export class OnlineFeetEditor extends Common.GridEditorBase<OnlineFeetRow> {
        protected getColumnsKey() { return 'Templates.OnlineFeet'; }
        protected getDialogType() { return OnlineFeetEditorDialog; }
                protected getLocalTextPrefix() { return OnlineFeetRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}