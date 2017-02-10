

namespace Cidob.MasterData {
    export class RaForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.Ra';
    }

    export interface RaForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
    }

    [['IdRa', () => Serenity.IntegerEditor], ['IdProduct', () => Serenity.IntegerEditor], ['Order', () => Serenity.IntegerEditor], ['Description', () => Serenity.StringEditor], ['PrintName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(RaForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}