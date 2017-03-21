
namespace Cidob.MasterData {
    export interface ArchRow {
        Id?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintDescription?: string;
        IsValenti?: boolean;
        IdProductDescription?: string;
        IdProductCode?: string;
    }

    export namespace ArchRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Arch';

        export namespace Fields {
            export declare const Id;
            export declare const IdProduct;
            export declare const Order;
            export declare const Description;
            export declare const PrintDescription;
            export declare const IsValenti;
            export declare const IdProductDescription: string;
            export declare const IdProductCode: string;
        }

        ['Id', 'IdProduct', 'Order', 'Description', 'PrintDescription', 'IsValenti', 'IdProductDescription', 'IdProductCode'].forEach(x => (<any>Fields)[x] = x);
    }
}

