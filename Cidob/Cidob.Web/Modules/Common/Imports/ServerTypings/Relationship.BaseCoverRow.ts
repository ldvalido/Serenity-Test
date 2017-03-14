
namespace Cidob.Relationship {
    export interface BaseCoverRow {
        IdBase?: number;
        IdCover?: number;
        IdBaseIdProduct?: number;
        IdBaseOrder?: number;
        IdBaseDescription?: string;
        IdBasePrintName?: string;
        IdBaseFrom?: number;
        IdBaseTo?: number;
        IdBaseEscatola?: boolean;
        IdBaseNeedArch?: boolean;
        IdBaseNeedTransversalArch?: boolean;
        IdCoverIdProduct?: number;
        IdCoverOrder?: number;
        IdCoverDescription?: string;
        IdCoverPrintName?: string;
    }

    export namespace BaseCoverRow {
        export const idProperty = 'IdBase';
        export const localTextPrefix = 'Relationship.BaseCover';

        export namespace Fields {
            export declare const IdBase;
            export declare const IdCover;
            export declare const IdBaseIdProduct: string;
            export declare const IdBaseOrder: string;
            export declare const IdBaseDescription: string;
            export declare const IdBasePrintName: string;
            export declare const IdBaseFrom: string;
            export declare const IdBaseTo: string;
            export declare const IdBaseEscatola: string;
            export declare const IdBaseNeedArch: string;
            export declare const IdBaseNeedTransversalArch: string;
            export declare const IdCoverIdProduct: string;
            export declare const IdCoverOrder: string;
            export declare const IdCoverDescription: string;
            export declare const IdCoverPrintName: string;
        }

        ['IdBase', 'IdCover', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdCoverIdProduct', 'IdCoverOrder', 'IdCoverDescription', 'IdCoverPrintName'].forEach(x => (<any>Fields)[x] = x);
    }
}

