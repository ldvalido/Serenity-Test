
namespace Cidob.Templates {
    export interface FeaturedTemplateRow {
        IdFeaturedTemplate?: number;
        Title?: string;
        Description?: string;
        Content?: string;
        IdUserCreation?: number;
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

    export namespace FeaturedTemplateRow {
        export const idProperty = 'IdFeaturedTemplate';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Templates.FeaturedTemplate';

        export namespace Fields {
            export declare const IdFeaturedTemplate;
            export declare const Title;
            export declare const Description;
            export declare const Content;
            export declare const IdUserCreation;
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

        ['IdFeaturedTemplate', 'Title', 'Description', 'Content', 'IdUserCreation', 'IdUserCreationUsername', 'IdUserCreationDisplayName', 'IdUserCreationEmail', 'IdUserCreationSource', 'IdUserCreationPasswordHash', 'IdUserCreationPasswordSalt', 'IdUserCreationLastDirectoryUpdate', 'IdUserCreationUserImage', 'IdUserCreationInsertDate', 'IdUserCreationInsertUserId', 'IdUserCreationUpdateDate', 'IdUserCreationUpdateUserId', 'IdUserCreationIsActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

