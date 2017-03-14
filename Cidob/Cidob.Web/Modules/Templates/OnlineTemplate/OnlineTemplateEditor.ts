
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.Templates {
    
    @Serenity.Decorators.registerClass()
    export class OnlineTemplateEditor extends Common.GridEditorBase<OnlineTemplateRow> {
        protected getColumnsKey() { return 'Templates.OnlineTemplate'; }
        protected getDialogType() { return OnlineTemplateEditorDialog; }
                protected getLocalTextPrefix() { return OnlineTemplateRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}