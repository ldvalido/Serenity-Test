

namespace Cidob.Relationship {
    export class BaseCoverForm extends Serenity.PrefixedContext {
        static formKey = 'Relationship.BaseCover';
    }

    export interface BaseCoverForm {
        IdCover: Serenity.IntegerEditor;
    }

    [['IdCover', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(BaseCoverForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}