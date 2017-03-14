

namespace Cidob.Relationship {
    export class BaseArchForm extends Serenity.PrefixedContext {
        static formKey = 'Relationship.BaseArch';
    }

    export interface BaseArchForm {
        IdArch: Serenity.IntegerEditor;
    }

    [['IdArch', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(BaseArchForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}