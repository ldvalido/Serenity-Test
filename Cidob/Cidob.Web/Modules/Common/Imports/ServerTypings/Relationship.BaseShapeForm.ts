

namespace Cidob.Relationship {
    export class BaseShapeForm extends Serenity.PrefixedContext {
        static formKey = 'Relationship.BaseShape';
    }

    export interface BaseShapeForm {
        IdShape: Serenity.IntegerEditor;
    }

    [['IdShape', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(BaseShapeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}