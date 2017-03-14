

namespace Cidob.MasterData {
    export class GenderForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.Gender';
    }

    export interface GenderForm {
        Description: Serenity.StringEditor;
    }

    [['IdGender', () => Serenity.IntegerEditor], ['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(GenderForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}