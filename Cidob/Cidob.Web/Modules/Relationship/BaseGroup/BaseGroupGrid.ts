
namespace Cidob.Relationship {
    
    @Serenity.Decorators.registerClass()
    export class BaseGroupGrid extends Serenity.EntityGrid<BaseGroupRow, any> {
        protected getColumnsKey() { return 'Relationship.BaseGroup'; }
        protected getDialogType() { return BaseGroupDialog; }
        protected getIdProperty() { return BaseGroupRow.idProperty; }
        protected getLocalTextPrefix() { return BaseGroupRow.localTextPrefix; }
        protected getService() { return BaseGroupService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}