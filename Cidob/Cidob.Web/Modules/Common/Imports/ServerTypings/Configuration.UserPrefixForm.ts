﻿

namespace Cidob.Configuration {
    export class UserPrefixForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.UserPrefix';
    }

    export interface UserPrefixForm {
        IdUser: Serenity.IntegerEditor;
        Prefix: Serenity.StringEditor;
        TicketNumber: Serenity.IntegerEditor;
    }

    [['IdUser', () => Serenity.IntegerEditor], ['Prefix', () => Serenity.StringEditor], ['TicketNumber', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(UserPrefixForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}