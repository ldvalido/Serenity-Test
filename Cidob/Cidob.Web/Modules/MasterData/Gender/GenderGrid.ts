
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class GenderGrid extends Serenity.EntityGrid<GenderRow, any> {
        protected getColumnsKey() { return 'MasterData.Gender'; }
        protected getDialogType() { return GenderDialog; }
        protected getIdProperty() { return GenderRow.idProperty; }
        protected getLocalTextPrefix() { return GenderRow.localTextPrefix; }
        protected getService() { return GenderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}