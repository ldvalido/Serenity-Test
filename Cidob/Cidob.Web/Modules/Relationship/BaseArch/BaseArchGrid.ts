
namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    export class BaseArchGrid extends Serenity.EntityGrid<BaseArchRow, any> {
        protected getColumnsKey() { return 'Relationship.BaseArch'; }
        protected getDialogType() { return BaseArchDialog; }
        protected getIdProperty() { return BaseArchRow.idProperty; }
        protected getLocalTextPrefix() { return BaseArchRow.localTextPrefix; }
        protected getService() { return BaseArchService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}