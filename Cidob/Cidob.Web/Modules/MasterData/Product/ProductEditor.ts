
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class ProductEditor extends Common.GridEditorBase<ProductRow> {
        protected getColumnsKey() { return 'MasterData.Product'; }
        protected getDialogType() { return ProductEditorDialog; }
                protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}