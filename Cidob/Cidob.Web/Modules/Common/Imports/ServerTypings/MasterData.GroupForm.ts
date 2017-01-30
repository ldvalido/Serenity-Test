

namespace Cidob.MasterData {
    export class GroupForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.Group';
    }

    export interface GroupForm {
        Description: Serenity.StringEditor;
        Enabled: Serenity.BooleanEditor;
    }

    [['Description', () => Serenity.StringEditor], ['Enabled', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(GroupForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}