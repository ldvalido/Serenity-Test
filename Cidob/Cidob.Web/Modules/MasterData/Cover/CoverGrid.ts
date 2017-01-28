
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class CoverGrid extends Serenity.EntityGrid<CoverRow, any> {
        protected getColumnsKey() { return 'MasterData.Cover'; }
        protected getDialogType() { return CoverDialog; }
        protected getIdProperty() { return CoverRow.idProperty; }
        protected getLocalTextPrefix() { return CoverRow.localTextPrefix; }
        protected getService() { return CoverService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}