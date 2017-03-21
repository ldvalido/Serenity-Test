

namespace Cidob.MasterData {
    export class DigitalForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.Digital';
    }

    export interface DigitalForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
        IsValenti: Serenity.BooleanEditor;
    }

    [['IdProduct', () => Serenity.IntegerEditor], ['Order', () => Serenity.IntegerEditor], ['Description', () => Serenity.StringEditor], ['PrintName', () => Serenity.StringEditor], ['IsValenti', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(DigitalForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}