
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class TemplateTypeEditor extends Common.GridEditorBase<TemplateTypeRow> {
        protected getColumnsKey() { return 'MasterData.TemplateType'; }
        protected getDialogType() { return TemplateTypeEditorDialog; }
                protected getLocalTextPrefix() { return TemplateTypeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}