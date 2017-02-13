
namespace Cidob.MasterData {
    export interface TemplateRow {
        IdTemplate?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }

    export namespace TemplateRow {
        export const idProperty = 'IdTemplate';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Template';

        export namespace Fields {
            export declare const IdTemplate;
            export declare const IdProduct;
            export declare const Order;
            export declare const Description;
            export declare const PrintName;
            export declare const IdProductDescription: string;
            export declare const IdProductCode: string;
        }

        ['IdTemplate', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(x => (<any>Fields)[x] = x);
    }
}

