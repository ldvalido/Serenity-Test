
namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    export class BaseCoverGrid extends Serenity.EntityGrid<BaseCoverRow, any> {
        protected getColumnsKey() { return 'Relationship.BaseCover'; }
        protected getDialogType() { return BaseCoverDialog; }
        protected getIdProperty() { return BaseCoverRow.idProperty; }
        protected getLocalTextPrefix() { return BaseCoverRow.localTextPrefix; }
        protected getService() { return BaseCoverService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}