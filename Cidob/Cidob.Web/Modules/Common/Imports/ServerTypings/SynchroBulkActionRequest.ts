namespace Cidob.Synchro
{
    export interface SynchroBulkActionRequest extends Serenity.ServiceRequest {
        SynchroID?: string[];
    }
}