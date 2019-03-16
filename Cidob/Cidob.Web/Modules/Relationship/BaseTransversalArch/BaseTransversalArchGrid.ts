
namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    export class BaseTransversalArchGrid extends Serenity.EntityGrid<BaseTransversalArchRow, any> {
        protected getColumnsKey() { return 'Relationship.BaseTransversalArch'; }
        protected getDialogType() { return BaseTransversalArchDialog; }
        protected getIdProperty() { return BaseTransversalArchRow.idProperty; }
        protected getLocalTextPrefix() { return BaseTransversalArchRow.localTextPrefix; }
        protected getService() { return BaseTransversalArchService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}