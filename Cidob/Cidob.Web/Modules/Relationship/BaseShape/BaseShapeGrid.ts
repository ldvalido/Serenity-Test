
namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    export class BaseShapeGrid extends Serenity.EntityGrid<BaseShapeRow, any> {
        protected getColumnsKey() { return 'Relationship.BaseShape'; }
        protected getDialogType() { return BaseShapeDialog; }
        protected getIdProperty() { return BaseShapeRow.idProperty; }
        protected getLocalTextPrefix() { return BaseShapeRow.localTextPrefix; }
        protected getService() { return BaseShapeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}