

namespace Cidob.Default {
    export class BaseGroupForm extends Serenity.PrefixedContext {
        static formKey = 'Default.BaseGroup';
    }

    export interface BaseGroupForm {
        IdGroup: Serenity.IntegerEditor;
    }

    [['IdGroup', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(BaseGroupForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}