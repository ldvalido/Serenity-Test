
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class TransversalArchGrid extends Serenity.EntityGrid<TransversalArchRow, any> {
        protected getColumnsKey() { return 'MasterData.TransversalArch'; }
        protected getDialogType() { return TransversalArchDialog; }
        protected getIdProperty() { return TransversalArchRow.idProperty; }
        protected getLocalTextPrefix() { return TransversalArchRow.localTextPrefix; }
        protected getService() { return TransversalArchService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}