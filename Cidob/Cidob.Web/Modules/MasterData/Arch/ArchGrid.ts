
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class ArchGrid extends Serenity.EntityGrid<ArchRow, any> {
        protected getColumnsKey() { return 'MasterData.Arch'; }
        protected getDialogType() { return ArchDialog; }
        protected getIdProperty() { return ArchRow.idProperty; }
        protected getLocalTextPrefix() { return ArchRow.localTextPrefix; }
        protected getService() { return ArchService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}