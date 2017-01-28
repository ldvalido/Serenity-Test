

namespace Cidob.MasterData {
    export class BaseForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.Base';
    }

    export interface BaseForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
        From: Serenity.IntegerEditor;
        To: Serenity.IntegerEditor;
        Escatola: Serenity.BooleanEditor;
    }

    [['IdProduct', () => Serenity.IntegerEditor], ['Order', () => Serenity.IntegerEditor], ['Description', () => Serenity.StringEditor], ['PrintName', () => Serenity.StringEditor], ['From', () => Serenity.IntegerEditor], ['To', () => Serenity.IntegerEditor], ['Escatola', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(BaseForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}