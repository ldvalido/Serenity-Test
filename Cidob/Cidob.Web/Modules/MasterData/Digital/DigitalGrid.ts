
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class DigitalGrid extends Serenity.EntityGrid<DigitalRow, any> {
        protected getColumnsKey() { return 'MasterData.Digital'; }
        protected getDialogType() { return DigitalDialog; }
        protected getIdProperty() { return DigitalRow.idProperty; }
        protected getLocalTextPrefix() { return DigitalRow.localTextPrefix; }
        protected getService() { return DigitalService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}