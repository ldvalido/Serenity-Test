
namespace Cidob.MasterData {
    export interface ProductRow {
        IdProduct?: number;
        Description?: string;
        Code?: string;
    }

    export namespace ProductRow {
        export const idProperty = 'IdProduct';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Product';

        export namespace Fields {
            export declare const IdProduct;
            export declare const Description;
            export declare const Code;
        }

        ['IdProduct', 'Description', 'Code'].forEach(x => (<any>Fields)[x] = x);
    }
}

