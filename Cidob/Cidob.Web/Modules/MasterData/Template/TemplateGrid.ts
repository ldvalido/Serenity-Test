
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class TemplateGrid extends Serenity.EntityGrid<TemplateRow, any> {
        protected getColumnsKey() { return 'MasterData.Template'; }
        protected getDialogType() { return TemplateDialog; }
        protected getIdProperty() { return TemplateRow.idProperty; }
        protected getLocalTextPrefix() { return TemplateRow.localTextPrefix; }
        protected getService() { return TemplateService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}