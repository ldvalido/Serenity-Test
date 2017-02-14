
namespace Cidob.Relationship {
    export interface BaseArchRow {
        IdBase?: number;
        IdArch?: number;
        IdBaseIdProduct?: number;
        IdBaseOrder?: number;
        IdBaseDescription?: string;
        IdBasePrintName?: string;
        IdBaseFrom?: number;
        IdBaseTo?: number;
        IdBaseEscatola?: boolean;
        IdBaseNeedArch?: boolean;
        IdBaseNeedTransversalArch?: boolean;
        IdArchIdProduct?: number;
        IdArchOrder?: number;
        IdArchDescription?: string;
        IdArchPrintDescription?: string;
    }

    export namespace BaseArchRow {
        export const idProperty = 'IdBase';
        export const localTextPrefix = 'Relationship.BaseArch';

        export namespace Fields {
            export declare const IdBase;
            export declare const IdArch;
            export declare const IdBaseIdProduct: string;
            export declare const IdBaseOrder: string;
            export declare const IdBaseDescription: string;
            export declare const IdBasePrintName: string;
            export declare const IdBaseFrom: string;
            export declare const IdBaseTo: string;
            export declare const IdBaseEscatola: string;
            export declare const IdBaseNeedArch: string;
            export declare const IdBaseNeedTransversalArch: string;
            export declare const IdArchIdProduct: string;
            export declare const IdArchOrder: string;
            export declare const IdArchDescription: string;
            export declare const IdArchPrintDescription: string;
        }

        ['IdBase', 'IdArch', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdArchIdProduct', 'IdArchOrder', 'IdArchDescription', 'IdArchPrintDescription'].forEach(x => (<any>Fields)[x] = x);
    }
}

