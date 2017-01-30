
namespace Cidob.Default {
    export interface BaseGroupRow {
        IdBase?: number;
        IdGroup?: number;
        IdBaseIdProduct?: number;
        IdBaseOrder?: number;
        IdBaseDescription?: string;
        IdBasePrintName?: string;
        IdBaseFrom?: number;
        IdBaseTo?: number;
        IdBaseEscatola?: boolean;
        IdBaseNeedArch?: boolean;
        IdBaseNeedTransversalArch?: boolean;
        IdGroupDescription?: string;
        IdGroupEnabled?: boolean;
    }

    export namespace BaseGroupRow {
        export const idProperty = 'IdBase';
        export const localTextPrefix = 'Default.BaseGroup';

        export namespace Fields {
            export declare const IdBase;
            export declare const IdGroup;
            export declare const IdBaseIdProduct: string;
            export declare const IdBaseOrder: string;
            export declare const IdBaseDescription: string;
            export declare const IdBasePrintName: string;
            export declare const IdBaseFrom: string;
            export declare const IdBaseTo: string;
            export declare const IdBaseEscatola: string;
            export declare const IdBaseNeedArch: string;
            export declare const IdBaseNeedTransversalArch: string;
            export declare const IdGroupDescription: string;
            export declare const IdGroupEnabled: string;
        }

        ['IdBase', 'IdGroup', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdGroupDescription', 'IdGroupEnabled'].forEach(x => (<any>Fields)[x] = x);
    }
}

