
namespace Cidob.MasterData {
    export interface TransversalArchRow {
        IdTransversalArch?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }

    export namespace TransversalArchRow {
        export const idProperty = 'IdTransversalArch';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.TransversalArch';

        export namespace Fields {
            export declare const IdTransversalArch;
            export declare const IdProduct;
            export declare const Order;
            export declare const Description;
            export declare const PrintName;
            export declare const IdProductDescription: string;
            export declare const IdProductCode: string;
        }

        ['IdTransversalArch', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(x => (<any>Fields)[x] = x);
    }
}

