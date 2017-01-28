
namespace Cidob.MasterData {
    export interface BaseRow {
        IdBase?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        From?: number;
        To?: number;
        Escatola?: boolean;
        IdProductDescription?: string;
        IdProductCode?: string;
    }

    export namespace BaseRow {
        export const idProperty = 'IdBase';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Base';

        export namespace Fields {
            export declare const IdBase;
            export declare const IdProduct;
            export declare const Order;
            export declare const Description;
            export declare const PrintName;
            export declare const From;
            export declare const To;
            export declare const Escatola;
            export declare const IdProductDescription: string;
            export declare const IdProductCode: string;
        }

        ['IdBase', 'IdProduct', 'Order', 'Description', 'PrintName', 'From', 'To', 'Escatola', 'IdProductDescription', 'IdProductCode'].forEach(x => (<any>Fields)[x] = x);
    }
}

