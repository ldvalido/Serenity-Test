

namespace Cidob.MasterData {
    export class ArchForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.Arch';
    }

    export interface ArchForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintDescription: Serenity.StringEditor;
        IsValenti: Serenity.BooleanEditor;
    }

    [['IdProduct', () => Serenity.IntegerEditor], ['Order', () => Serenity.IntegerEditor], ['Description', () => Serenity.StringEditor], ['PrintDescription', () => Serenity.StringEditor], ['IsValenti', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(ArchForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}