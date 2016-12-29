

namespace Cidob.MasterData {
    export class BrandForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.Brand';
    }

    export interface BrandForm {
        Description: Serenity.StringEditor;
        Enabled: Serenity.BooleanEditor;
    }

    [['Description', () => Serenity.StringEditor], ['Enabled', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(BrandForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}