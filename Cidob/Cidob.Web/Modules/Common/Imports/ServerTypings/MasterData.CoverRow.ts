
namespace Cidob.MasterData {
    export interface CoverRow {
        IdCover?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }

    export namespace CoverRow {
        export const idProperty = 'IdCover';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Cover';

        export namespace Fields {
            export declare const IdCover;
            export declare const IdProduct;
            export declare const Order;
            export declare const Description;
            export declare const PrintName;
            export declare const IdProductDescription: string;
            export declare const IdProductCode: string;
        }

        ['IdCover', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(x => (<any>Fields)[x] = x);
    }
}

