

namespace Cidob.Synchro {
    export class SynchronizationForm extends Serenity.PrefixedContext {
        static formKey = 'Synchro.Synchronization';
    }

    export interface SynchronizationForm {
        Description: Serenity.StringEditor;
        Keyword: Serenity.StringEditor;
        LastSynchroOperation: Serenity.DateEditor;
    }

    [['Description', () => Serenity.StringEditor], ['Keyword', () => Serenity.StringEditor], ['LastSynchroOperation', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(SynchronizationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}