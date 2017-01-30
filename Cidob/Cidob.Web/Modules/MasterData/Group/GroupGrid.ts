
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class GroupGrid extends Serenity.EntityGrid<GroupRow, any> {
        protected getColumnsKey() { return 'MasterData.Group'; }
        protected getDialogType() { return GroupDialog; }
        protected getIdProperty() { return GroupRow.idProperty; }
        protected getLocalTextPrefix() { return GroupRow.localTextPrefix; }
        protected getService() { return GroupService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}