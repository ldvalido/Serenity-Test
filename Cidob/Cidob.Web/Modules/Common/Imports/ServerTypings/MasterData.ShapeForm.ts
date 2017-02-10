

namespace Cidob.MasterData {
    export class ShapeForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.Shape';
    }

    export interface ShapeForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
    }

    [['IdProduct', () => Serenity.IntegerEditor], ['Order', () => Serenity.IntegerEditor], ['Description', () => Serenity.StringEditor], ['PrintName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ShapeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}