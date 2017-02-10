
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class ShapeGrid extends Serenity.EntityGrid<ShapeRow, any> {
        protected getColumnsKey() { return 'MasterData.Shape'; }
        protected getDialogType() { return ShapeDialog; }
        protected getIdProperty() { return ShapeRow.idProperty; }
        protected getLocalTextPrefix() { return ShapeRow.localTextPrefix; }
        protected getService() { return ShapeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}