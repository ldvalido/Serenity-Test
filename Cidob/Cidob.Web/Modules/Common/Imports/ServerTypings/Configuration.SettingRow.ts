
namespace Cidob.Configuration {
    export interface SettingRow {
        IdSetting?: number;
        SettingName?: string;
        SettingValue?: string;
    }

    export namespace SettingRow {
        export const idProperty = 'IdSetting';
        export const nameProperty = 'SettingName';
        export const localTextPrefix = 'Configuration.Setting';

        export namespace Fields {
            export declare const IdSetting;
            export declare const SettingName;
            export declare const SettingValue;
        }

        ['IdSetting', 'SettingName', 'SettingValue'].forEach(x => (<any>Fields)[x] = x);
    }
}

