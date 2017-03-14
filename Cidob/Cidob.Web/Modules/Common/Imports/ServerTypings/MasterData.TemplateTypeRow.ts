
namespace Cidob.MasterData {
    export interface TemplateTypeRow {
        IdTemplateType?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }

    export namespace TemplateTypeRow {
        export const idProperty = 'IdTemplateType';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.TemplateType';

        export namespace Fields {
            export declare const IdTemplateType;
            export declare const IdProduct;
            export declare const Order;
            export declare const Description;
            export declare const PrintName;
            export declare const IdProductDescription: string;
            export declare const IdProductCode: string;
        }

        ['IdTemplateType', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(x => (<any>Fields)[x] = x);
    }
}

