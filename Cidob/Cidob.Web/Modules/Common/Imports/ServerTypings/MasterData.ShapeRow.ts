
namespace Cidob.MasterData {
    export interface ShapeRow {
        IdShape?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }

    export namespace ShapeRow {
        export const idProperty = 'IdShape';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Shape';

        export namespace Fields {
            export declare const IdShape;
            export declare const IdProduct;
            export declare const Order;
            export declare const Description;
            export declare const PrintName;
            export declare const IdProductDescription: string;
            export declare const IdProductCode: string;
        }

        ['IdShape', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(x => (<any>Fields)[x] = x);
    }
}

