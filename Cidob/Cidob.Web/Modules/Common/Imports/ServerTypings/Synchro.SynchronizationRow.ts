
namespace Cidob.Synchro {
    export interface SynchronizationRow {
        IdSynchroOperation?: number;
        Description?: string;
        Keyword?: string;
        LastSynchroOperation?: string;
    }

    export namespace SynchronizationRow {
        export const idProperty = 'IdSynchroOperation';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Synchro.Synchronization';

        export namespace Fields {
            export declare const IdSynchroOperation;
            export declare const Description;
            export declare const Keyword;
            export declare const LastSynchroOperation;
        }

        ['IdSynchroOperation', 'Description', 'Keyword', 'LastSynchroOperation'].forEach(x => (<any>Fields)[x] = x);
    }
}

