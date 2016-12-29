
namespace Cidob.MasterData {
    export interface BrandRow {
        IdBrands?: number;
        Description?: string;
        Enabled?: boolean;
    }

    export namespace BrandRow {
        export const idProperty = 'IdBrands';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Brand';

        export namespace Fields {
            export declare const IdBrands;
            export declare const Description;
            export declare const Enabled;
        }

        ['IdBrands', 'Description', 'Enabled'].forEach(x => (<any>Fields)[x] = x);
    }
}

