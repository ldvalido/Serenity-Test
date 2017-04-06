

namespace Cidob.Templates {
    export class OnlineFeetForm extends Serenity.PrefixedContext {
        static formKey = 'Templates.OnlineFeet';
    }

    export interface OnlineFeetForm {
        TemplateType: Serenity.IntegerEditor;
        IdInternalArch: Serenity.IntegerEditor;
        IdExternalArch: Serenity.IntegerEditor;
        IdOlive: Serenity.IntegerEditor;
        IdCt: Serenity.IntegerEditor;
        IdRa: Serenity.IntegerEditor;
        IdHeel: Serenity.IntegerEditor;
        IsSingleMit: Serenity.BooleanEditor;
        IsDoubleMit: Serenity.BooleanEditor;
        InternalArchNumber: Serenity.IntegerEditor;
        ExternalArchNumber: Serenity.IntegerEditor;
        OliveNumber: Serenity.IntegerEditor;
        CtNumber: Serenity.IntegerEditor;
        RaNumber: Serenity.IntegerEditor;
        HeelNumber: Serenity.IntegerEditor;
        BarValue: Serenity.StringEditor;
        NeckValue: Serenity.StringEditor;
        BehindNeck: Serenity.BooleanEditor;
        IdDigital: Serenity.IntegerEditor;
        AddaptToNumber: Serenity.IntegerEditor;
    }

    [['TemplateType', () => Serenity.IntegerEditor], ['IdInternalArch', () => Serenity.IntegerEditor], ['IdExternalArch', () => Serenity.IntegerEditor], ['IdOlive', () => Serenity.IntegerEditor], ['IdCt', () => Serenity.IntegerEditor], ['IdRa', () => Serenity.IntegerEditor], ['IdHeel', () => Serenity.IntegerEditor], ['IsSingleMit', () => Serenity.BooleanEditor], ['IsDoubleMit', () => Serenity.BooleanEditor], ['InternalArchNumber', () => Serenity.IntegerEditor], ['ExternalArchNumber', () => Serenity.IntegerEditor], ['OliveNumber', () => Serenity.IntegerEditor], ['CtNumber', () => Serenity.IntegerEditor], ['RaNumber', () => Serenity.IntegerEditor], ['HeelNumber', () => Serenity.IntegerEditor], ['BarValue', () => Serenity.StringEditor], ['NeckValue', () => Serenity.StringEditor], ['BehindNeck', () => Serenity.BooleanEditor], ['IdDigital', () => Serenity.IntegerEditor], ['AddaptToNumber', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(OnlineFeetForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}