

namespace Cidob.Templates {
    export class OnlineTemplateForm extends Serenity.PrefixedContext {
        static formKey = 'Templates.OnlineTemplate';
    }

    export interface OnlineTemplateForm {
        Reference: Serenity.StringEditor;
        Number: Serenity.IntegerEditor;
        Urgent: Serenity.BooleanEditor;
        IdGender: Serenity.IntegerEditor;
        IdBase: Serenity.IntegerEditor;
        Is34: Serenity.BooleanEditor;
        IdShape: Serenity.IntegerEditor;
        IdCover: Serenity.IntegerEditor;
        Observations: Serenity.StringEditor;
        Quantity: Serenity.IntegerEditor;
    }

    [['Reference', () => Serenity.StringEditor], ['Number', () => Serenity.IntegerEditor], ['Urgent', () => Serenity.BooleanEditor], ['IdGender', () => Serenity.IntegerEditor], ['IdBase', () => Serenity.IntegerEditor], ['Is34', () => Serenity.BooleanEditor], ['IdShape', () => Serenity.IntegerEditor], ['IdCover', () => Serenity.IntegerEditor], ['Observations', () => Serenity.StringEditor], ['Quantity', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(OnlineTemplateForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}