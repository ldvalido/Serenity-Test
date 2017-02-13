
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class TemplateEditor extends Common.GridEditorBase<TemplateRow> {
        protected getColumnsKey() { return 'MasterData.Template'; }
        protected getDialogType() { return TemplateEditorDialog; }
                protected getLocalTextPrefix() { return TemplateRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}