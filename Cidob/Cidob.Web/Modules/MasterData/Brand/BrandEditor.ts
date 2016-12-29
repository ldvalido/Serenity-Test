
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class BrandEditor extends Common.GridEditorBase<BrandRow> {
        protected getColumnsKey() { return 'MasterData.Brand'; }
        protected getDialogType() { return BrandEditorDialog; }
                protected getLocalTextPrefix() { return BrandRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}