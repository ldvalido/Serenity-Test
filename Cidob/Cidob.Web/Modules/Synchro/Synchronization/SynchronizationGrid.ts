
namespace Cidob.Synchro {
    
    @Serenity.Decorators.registerClass()
    export class SynchronizationGrid extends Serenity.EntityGrid<SynchronizationRow, any> {
        protected getColumnsKey() { return 'Synchro.Synchronization'; }
        protected getDialogType() { return SynchronizationDialog; }
        protected getIdProperty() { return SynchronizationRow.idProperty; }
        protected getLocalTextPrefix() { return SynchronizationRow.localTextPrefix; }
        protected getService() { return SynchronizationService.baseUrl; }

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

                    var action = new OrderBulkAction();
                    action.done = () => this.rowSelection.resetCheckedAndRefresh();
                    action.execute(this.rowSelection.getSelectedKeys());
                }
            };
            return buttons;
        }
    }
}