

namespace Cidob.MasterData {
    export class CoverForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.Cover';
    }

    export interface CoverForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
    }

    [['IdProduct', () => Serenity.IntegerEditor], ['Order', () => Serenity.IntegerEditor], ['Description', () => Serenity.StringEditor], ['PrintName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CoverForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}