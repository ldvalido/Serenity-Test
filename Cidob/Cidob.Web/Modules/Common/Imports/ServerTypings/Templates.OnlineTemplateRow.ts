
namespace Cidob.Templates {
    export interface OnlineTemplateRow {
        IdOnlineTemplate?: number;
        Reference?: string;
        Number?: number;
        Urgent?: boolean;
        IdGender?: number;
        IdBase?: number;
        Is34?: boolean;
        IdShape?: number;
        IdCover?: number;
        Observations?: string;
        Quantity?: number;
        IdUserCreation?: number;
        Name?: string;
        Email?: string;
        Age?: number;
        Entity?: string;
        CreationDate?: string;
        IdAgency?: string;
        IdGenderDescription?: string;
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
        IdCoverIdProduct?: number;
        IdCoverOrder?: number;
        IdCoverDescription?: string;
        IdCoverPrintName?: string;
        IdUserCreationUsername?: string;
        IdUserCreationDisplayName?: string;
        IdUserCreationEmail?: string;
        IdUserCreationSource?: string;
        IdUserCreationPasswordHash?: string;
        IdUserCreationPasswordSalt?: string;
        IdUserCreationLastDirectoryUpdate?: string;
        IdUserCreationUserImage?: string;
        IdUserCreationInsertDate?: string;
        IdUserCreationInsertUserId?: number;
        IdUserCreationUpdateDate?: string;
        IdUserCreationUpdateUserId?: number;
        IdUserCreationIsActive?: number;
    }

    export namespace OnlineTemplateRow {
        export const idProperty = 'IdOnlineTemplate';
        export const nameProperty = 'Reference';
        export const localTextPrefix = 'Templates.OnlineTemplate';

        export namespace Fields {
            export declare const IdOnlineTemplate;
            export declare const Reference;
            export declare const Number;
            export declare const Urgent;
            export declare const IdGender;
            export declare const IdBase;
            export declare const Is34;
            export declare const IdShape;
            export declare const IdCover;
            export declare const Observations;
            export declare const Quantity;
            export declare const IdUserCreation;
            export declare const Name;
            export declare const Email;
            export declare const Age;
            export declare const Entity;
            export declare const CreationDate;
            export declare const IdAgency;
            export declare const IdGenderDescription: string;
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
            export declare const IdCoverIdProduct: string;
            export declare const IdCoverOrder: string;
            export declare const IdCoverDescription: string;
            export declare const IdCoverPrintName: string;
            export declare const IdUserCreationUsername: string;
            export declare const IdUserCreationDisplayName: string;
            export declare const IdUserCreationEmail: string;
            export declare const IdUserCreationSource: string;
            export declare const IdUserCreationPasswordHash: string;
            export declare const IdUserCreationPasswordSalt: string;
            export declare const IdUserCreationLastDirectoryUpdate: string;
            export declare const IdUserCreationUserImage: string;
            export declare const IdUserCreationInsertDate: string;
            export declare const IdUserCreationInsertUserId: string;
            export declare const IdUserCreationUpdateDate: string;
            export declare const IdUserCreationUpdateUserId: string;
            export declare const IdUserCreationIsActive: string;
        }

        ['IdOnlineTemplate', 'Reference', 'Number', 'Urgent', 'IdGender', 'IdBase', 'Is34', 'IdShape', 'IdCover', 'Observations', 'Quantity', 'IdUserCreation', 'Name', 'Email', 'Age', 'Entity', 'CreationDate', 'IdAgency', 'IdGenderDescription', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdShapeIdProduct', 'IdShapeOrder', 'IdShapeDescription', 'IdShapePrintName', 'IdCoverIdProduct', 'IdCoverOrder', 'IdCoverDescription', 'IdCoverPrintName', 'IdUserCreationUsername', 'IdUserCreationDisplayName', 'IdUserCreationEmail', 'IdUserCreationSource', 'IdUserCreationPasswordHash', 'IdUserCreationPasswordSalt', 'IdUserCreationLastDirectoryUpdate', 'IdUserCreationUserImage', 'IdUserCreationInsertDate', 'IdUserCreationInsertUserId', 'IdUserCreationUpdateDate', 'IdUserCreationUpdateUserId', 'IdUserCreationIsActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

