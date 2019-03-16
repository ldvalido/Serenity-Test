
namespace Cidob.Relationship {
    export interface BaseTransversalArchRow {
        IdBase?: number;
        IdTransversalArch?: number;
        IdBaseIdProduct?: number;
        IdBaseOrder?: number;
        IdBaseDescription?: string;
        IdBasePrintName?: string;
        IdBaseFrom?: number;
        IdBaseTo?: number;
        IdBaseEscatola?: boolean;
        IdBaseNeedArch?: boolean;
        IdBaseNeedTransversalArch?: boolean;
        IdTransversalArchIdProduct?: number;
        IdTransversalArchOrder?: number;
        IdTransversalArchDescription?: string;
        IdTransversalArchPrintName?: string;
    }

    export namespace BaseTransversalArchRow {
        export const idProperty = 'IdBase';
        export const localTextPrefix = 'Relationship.BaseTransversalArch';

        export namespace Fields {
            export declare const IdBase;
            export declare const IdTransversalArch;
            export declare const IdBaseIdProduct: string;
            export declare const IdBaseOrder: string;
            export declare const IdBaseDescription: string;
            export declare const IdBasePrintName: string;
            export declare const IdBaseFrom: string;
            export declare const IdBaseTo: string;
            export declare const IdBaseEscatola: string;
            export declare const IdBaseNeedArch: string;
            export declare const IdBaseNeedTransversalArch: string;
            export declare const IdTransversalArchIdProduct: string;
            export declare const IdTransversalArchOrder: string;
            export declare const IdTransversalArchDescription: string;
            export declare const IdTransversalArchPrintName: string;
        }

        ['IdBase', 'IdTransversalArch', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdTransversalArchIdProduct', 'IdTransversalArchOrder', 'IdTransversalArchDescription', 'IdTransversalArchPrintName'].forEach(x => (<any>Fields)[x] = x);
    }
}

