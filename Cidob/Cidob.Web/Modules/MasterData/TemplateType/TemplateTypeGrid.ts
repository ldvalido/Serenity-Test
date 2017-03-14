
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class TemplateTypeGrid extends Serenity.EntityGrid<TemplateTypeRow, any> {
        protected getColumnsKey() { return 'MasterData.TemplateType'; }
        protected getDialogType() { return TemplateTypeDialog; }
        protected getIdProperty() { return TemplateTypeRow.idProperty; }
        protected getLocalTextPrefix() { return TemplateTypeRow.localTextPrefix; }
        protected getService() { return TemplateTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}