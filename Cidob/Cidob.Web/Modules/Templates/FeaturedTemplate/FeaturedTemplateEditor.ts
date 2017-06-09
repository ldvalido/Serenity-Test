
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.Templates {
    
    @Serenity.Decorators.registerClass()
    export class FeaturedTemplateEditor extends Common.GridEditorBase<FeaturedTemplateRow> {
        protected getColumnsKey() { return 'Templates.FeaturedTemplate'; }
        protected getDialogType() { return FeaturedTemplateEditorDialog; }
                protected getLocalTextPrefix() { return FeaturedTemplateRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}