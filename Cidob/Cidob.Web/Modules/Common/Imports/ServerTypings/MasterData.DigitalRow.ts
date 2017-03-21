
namespace Cidob.MasterData {
    export interface DigitalRow {
        IdDigital?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IsValenti?: boolean;
        IdProductDescription?: string;
        IdProductCode?: string;
    }

    export namespace DigitalRow {
        export const idProperty = 'IdDigital';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Digital';

        export namespace Fields {
            export declare const IdDigital;
            export declare const IdProduct;
            export declare const Order;
            export declare const Description;
            export declare const PrintName;
            export declare const IsValenti;
            export declare const IdProductDescription: string;
            export declare const IdProductCode: string;
        }

        ['IdDigital', 'IdProduct', 'Order', 'Description', 'PrintName', 'IsValenti', 'IdProductDescription', 'IdProductCode'].forEach(x => (<any>Fields)[x] = x);
    }
}

