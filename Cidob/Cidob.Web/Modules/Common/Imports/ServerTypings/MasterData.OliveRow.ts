
namespace Cidob.MasterData {
    export interface OliveRow {
        IdOlive?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }

    export namespace OliveRow {
        export const idProperty = 'IdOlive';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Olive';

        export namespace Fields {
            export declare const IdOlive;
            export declare const IdProduct;
            export declare const Order;
            export declare const Description;
            export declare const PrintName;
            export declare const IdProductDescription: string;
            export declare const IdProductCode: string;
        }

        ['IdOlive', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(x => (<any>Fields)[x] = x);
    }
}

