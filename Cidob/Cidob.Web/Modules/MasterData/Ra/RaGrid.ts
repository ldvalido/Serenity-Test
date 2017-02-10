
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class RaGrid extends Serenity.EntityGrid<RaRow, any> {
        protected getColumnsKey() { return 'MasterData.Ra'; }
        protected getDialogType() { return RaDialog; }
        protected getIdProperty() { return RaRow.idProperty; }
        protected getLocalTextPrefix() { return RaRow.localTextPrefix; }
        protected getService() { return RaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}