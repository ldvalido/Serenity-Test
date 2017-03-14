
namespace Cidob.Templates {
    
    @Serenity.Decorators.registerClass()
    export class OnlineTemplateGrid extends Serenity.EntityGrid<OnlineTemplateRow, any> {
        protected getColumnsKey() { return 'Templates.OnlineTemplate'; }
        protected getDialogType() { return OnlineTemplateDialog; }
        protected getIdProperty() { return OnlineTemplateRow.idProperty; }
        protected getLocalTextPrefix() { return OnlineTemplateRow.localTextPrefix; }
        protected getService() { return OnlineTemplateService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}