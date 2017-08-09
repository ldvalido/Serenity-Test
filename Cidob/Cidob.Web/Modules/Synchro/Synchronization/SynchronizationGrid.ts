
namespace Cidob.Synchro {
    
    @Serenity.Decorators.registerClass()
    export class SynchronizationGrid extends Serenity.EntityGrid<SynchronizationRow, any> {
        protected getColumnsKey() { return 'Synchro.Synchronization'; }
        protected getDialogType() { return SynchronizationDialog; }
        protected getIdProperty() { return SynchronizationRow.idProperty; }
        protected getLocalTextPrefix() { return SynchronizationRow.localTextPrefix; }
        protected getService() { return SynchronizationService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;
        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons[0] ={
                title: 'Synchro',
                cssClass: 'send-button',
                onClick: () => {
                    if (!this.onViewSubmit()) {
                        return;
                    }
                    var selectedKeys = this.rowSelection.getSelectedKeys();
                    var action = new Cidob.Synchro.SynchroBulkAction();
                    action.done = () => this.rowSelection.resetCheckedAndRefresh();
                    action.execute(selectedKeys);
                }
            };
            return buttons;
        }
    }
}