
namespace Cidob.MasterData {
    export interface GenderRow {
        IdGender?: number;
        Description?: string;
    }

    export namespace GenderRow {
        export const idProperty = 'IdGender';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Gender';

        export namespace Fields {
            export declare const IdGender;
            export declare const Description;
        }

        ['IdGender', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

