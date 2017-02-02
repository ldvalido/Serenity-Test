
namespace Cidob.MasterData {
    export interface HeelRow {
        IdHeel?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }

    export namespace HeelRow {
        export const idProperty = 'IdHeel';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Heel';

        export namespace Fields {
            export declare const IdHeel;
            export declare const IdProduct;
            export declare const Order;
            export declare const Description;
            export declare const PrintName;
            export declare const IdProductDescription: string;
            export declare const IdProductCode: string;
        }

        ['IdHeel', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(x => (<any>Fields)[x] = x);
    }
}

