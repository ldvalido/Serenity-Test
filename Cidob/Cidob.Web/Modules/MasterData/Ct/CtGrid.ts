
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class CtGrid extends Serenity.EntityGrid<CtRow, any> {
        protected getColumnsKey() { return 'MasterData.Ct'; }
        protected getDialogType() { return CtDialog; }
        protected getIdProperty() { return CtRow.idProperty; }
        protected getLocalTextPrefix() { return CtRow.localTextPrefix; }
        protected getService() { return CtService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}