
namespace Cidob.MasterData {
    export interface CtRow {
        IdCt?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }

    export namespace CtRow {
        export const idProperty = 'IdCt';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Ct';

        export namespace Fields {
            export declare const IdCt;
            export declare const IdProduct;
            export declare const Order;
            export declare const Description;
            export declare const PrintName;
            export declare const IdProductDescription: string;
            export declare const IdProductCode: string;
        }

        ['IdCt', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(x => (<any>Fields)[x] = x);
    }
}

