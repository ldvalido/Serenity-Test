
namespace Cidob.Relationship {
    export interface BaseShapeRow {
        IdBase?: number;
        IdShape?: number;
        IdBaseIdProduct?: number;
        IdBaseOrder?: number;
        IdBaseDescription?: string;
        IdBasePrintName?: string;
        IdBaseFrom?: number;
        IdBaseTo?: number;
        IdBaseEscatola?: boolean;
        IdBaseNeedArch?: boolean;
        IdBaseNeedTransversalArch?: boolean;
        IdShapeIdProduct?: number;
        IdShapeOrder?: number;
        IdShapeDescription?: string;
        IdShapePrintName?: string;
    }

    export namespace BaseShapeRow {
        export const idProperty = 'IdBase';
        export const localTextPrefix = 'Relationship.BaseShape';

        export namespace Fields {
            export declare const IdBase;
            export declare const IdShape;
            export declare const IdBaseIdProduct: string;
            export declare const IdBaseOrder: string;
            export declare const IdBaseDescription: string;
            export declare const IdBasePrintName: string;
            export declare const IdBaseFrom: string;
            export declare const IdBaseTo: string;
            export declare const IdBaseEscatola: string;
            export declare const IdBaseNeedArch: string;
            export declare const IdBaseNeedTransversalArch: string;
            export declare const IdShapeIdProduct: string;
            export declare const IdShapeOrder: string;
            export declare const IdShapeDescription: string;
            export declare const IdShapePrintName: string;
        }

        ['IdBase', 'IdShape', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdShapeIdProduct', 'IdShapeOrder', 'IdShapeDescription', 'IdShapePrintName'].forEach(x => (<any>Fields)[x] = x);
    }
}

