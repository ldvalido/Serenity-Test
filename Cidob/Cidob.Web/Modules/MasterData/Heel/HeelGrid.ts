
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class HeelGrid extends Serenity.EntityGrid<HeelRow, any> {
        protected getColumnsKey() { return 'MasterData.Heel'; }
        protected getDialogType() { return HeelDialog; }
        protected getIdProperty() { return HeelRow.idProperty; }
        protected getLocalTextPrefix() { return HeelRow.localTextPrefix; }
        protected getService() { return HeelService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}