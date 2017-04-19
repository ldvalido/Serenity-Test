
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Cidob.Configuration {
    
    @Serenity.Decorators.registerClass()
    export class SettingEditor extends Common.GridEditorBase<SettingRow> {
        protected getColumnsKey() { return 'Configuration.Setting'; }
        protected getDialogType() { return SettingEditorDialog; }
                protected getLocalTextPrefix() { return SettingRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}