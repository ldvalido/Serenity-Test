
namespace Cidob.Templates {
    
    @Serenity.Decorators.registerClass()
    export class OnlineFeetGrid extends Serenity.EntityGrid<OnlineFeetRow, any> {
        protected getColumnsKey() { return 'Templates.OnlineFeet'; }
        protected getDialogType() { return OnlineFeetDialog; }
        protected getIdProperty() { return OnlineFeetRow.idProperty; }
        protected getLocalTextPrefix() { return OnlineFeetRow.localTextPrefix; }
        protected getService() { return OnlineFeetService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}