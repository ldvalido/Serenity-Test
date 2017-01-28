
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class BaseGrid extends Serenity.EntityGrid<BaseRow, any> {
        protected getColumnsKey() { return 'MasterData.Base'; }
        protected getDialogType() { return BaseDialog; }
        protected getIdProperty() { return BaseRow.idProperty; }
        protected getLocalTextPrefix() { return BaseRow.localTextPrefix; }
        protected getService() { return BaseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}