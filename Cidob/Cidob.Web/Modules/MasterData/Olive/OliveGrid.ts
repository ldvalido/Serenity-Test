
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class OliveGrid extends Serenity.EntityGrid<OliveRow, any> {
        protected getColumnsKey() { return 'MasterData.Olive'; }
        protected getDialogType() { return OliveDialog; }
        protected getIdProperty() { return OliveRow.idProperty; }
        protected getLocalTextPrefix() { return OliveRow.localTextPrefix; }
        protected getService() { return OliveService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}