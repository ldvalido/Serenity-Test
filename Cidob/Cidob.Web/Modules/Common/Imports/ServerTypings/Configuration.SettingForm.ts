

namespace Cidob.Configuration {
    export class SettingForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.Setting';
    }

    export interface SettingForm {
        SettingName: Serenity.StringEditor;
        SettingValue: Serenity.StringEditor;
    }

    [['SettingName', () => Serenity.StringEditor], ['SettingValue', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SettingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}