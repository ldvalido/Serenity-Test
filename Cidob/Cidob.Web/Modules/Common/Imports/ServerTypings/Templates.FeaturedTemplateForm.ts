

namespace Cidob.Templates {
    export class FeaturedTemplateForm extends Serenity.PrefixedContext {
        static formKey = 'Templates.FeaturedTemplate';
    }

    export interface FeaturedTemplateForm {
        Title: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Content: Serenity.StringEditor;
        IdUserCreation: Serenity.IntegerEditor;
    }

    [['Title', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['Content', () => Serenity.StringEditor], ['IdUserCreation', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(FeaturedTemplateForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}