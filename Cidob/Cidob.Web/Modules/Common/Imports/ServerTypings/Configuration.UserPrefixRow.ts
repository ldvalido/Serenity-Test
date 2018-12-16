
namespace Cidob.Configuration {
    export interface UserPrefixRow {
        IdUserPrefix?: number;
        IdUser?: number;
        Prefix?: string;
        IdUserUsername?: string;
        IdUserDisplayName?: string;
        IdUserEmail?: string;
        IdUserSource?: string;
        IdUserPasswordHash?: string;
        IdUserPasswordSalt?: string;
        IdUserLastDirectoryUpdate?: string;
        IdUserUserImage?: string;
        IdUserInsertDate?: string;
        IdUserInsertUserId?: number;
        IdUserUpdateDate?: string;
        IdUserUpdateUserId?: number;
        IdUserIsActive?: number;
    }

    export namespace UserPrefixRow {
        export const idProperty = 'IdUserPrefix';
        export const nameProperty = 'Prefix';
        export const localTextPrefix = 'Configuration.UserPrefix';

        export namespace Fields {
            export declare const IdUserPrefix;
            export declare const IdUser;
            export declare const Prefix;
            export declare const IdUserUsername: string;
            export declare const IdUserDisplayName: string;
            export declare const IdUserEmail: string;
            export declare const IdUserSource: string;
            export declare const IdUserPasswordHash: string;
            export declare const IdUserPasswordSalt: string;
            export declare const IdUserLastDirectoryUpdate: string;
            export declare const IdUserUserImage: string;
            export declare const IdUserInsertDate: string;
            export declare const IdUserInsertUserId: string;
            export declare const IdUserUpdateDate: string;
            export declare const IdUserUpdateUserId: string;
            export declare const IdUserIsActive: string;
        }

        ['IdUserPrefix', 'IdUser', 'Prefix', 'IdUserUsername', 'IdUserDisplayName', 'IdUserEmail', 'IdUserSource', 'IdUserPasswordHash', 'IdUserPasswordSalt', 'IdUserLastDirectoryUpdate', 'IdUserUserImage', 'IdUserInsertDate', 'IdUserInsertUserId', 'IdUserUpdateDate', 'IdUserUpdateUserId', 'IdUserIsActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

