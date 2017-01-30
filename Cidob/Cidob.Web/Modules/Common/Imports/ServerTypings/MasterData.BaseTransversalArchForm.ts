

namespace Cidob.MasterData {
    export class BaseTransversalArchForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.BaseTransversalArch';
    }

    export interface BaseTransversalArchForm {
        IdTransversalArch: Serenity.IntegerEditor;
    }

    [['IdTransversalArch', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(BaseTransversalArchForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}