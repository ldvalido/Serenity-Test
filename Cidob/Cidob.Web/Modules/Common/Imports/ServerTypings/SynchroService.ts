namespace Cidob.Synchro
{
    export namespace SynchroService
    {
        /*export declare function SynchroBulkAction(
            request: SynchroBulkActionRequest,
            onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SynchroBulkAction(r, s, o) {
            debugger;
        }*/
        export declare function SynchroBulkAction(): JQueryXHR;
        SynchroService.SynchroBulkAction = function(parameter,cb, opt) {
            console.log('Synchro' + parameter.OrderIDs);
            Q.serviceRequest('Synchro/Synchronization/Synch/', parameter, cb, opt);
            return true;
        }
    }
}