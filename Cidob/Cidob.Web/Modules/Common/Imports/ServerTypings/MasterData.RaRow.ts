
namespace Cidob.MasterData {
    export interface RaRow {
        IdRa?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }

    export namespace RaRow {
        export const idProperty = 'IdRa';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Ra';

        export namespace Fields {
            export declare const IdRa;
            export declare const IdProduct;
            export declare const Order;
            export declare const Description;
            export declare const PrintName;
            export declare const IdProductDescription: string;
            export declare const IdProductCode: string;
        }

        ['IdRa', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(x => (<any>Fields)[x] = x);
    }
}

