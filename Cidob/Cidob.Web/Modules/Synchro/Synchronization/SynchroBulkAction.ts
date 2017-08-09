namespace Cidob.Synchro
{
    export class SynchroBulkAction extends Common.BulkServiceAction {
        protected getParallelRequests() {
            return 1;
        }
        protected getBatchSize() {
            return 1;
        }
        protected executeForBatch(batch) {
            SynchroService.SynchroBulkAction(
                {
                    OrderIDs: batch.map(x => Q.parseInteger(x))
                },
                response => this.set_successCount(this.get_successCount() + batch.length),
                {
                    blockUI: false,
                    onError: response => this.set_errorCount(this.get_errorCount() + batch.length),
                    onCleanup: () => this.serviceCallCleanup()
                });
        }
        
    }
}