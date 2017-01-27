

namespace Cidob.MasterData {
    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.Product';
    }

    export interface ProductForm {
        Description: Serenity.StringEditor;
        Code: Serenity.StringEditor;
    }

    [['Description', () => Serenity.StringEditor], ['Code', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ProductForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}