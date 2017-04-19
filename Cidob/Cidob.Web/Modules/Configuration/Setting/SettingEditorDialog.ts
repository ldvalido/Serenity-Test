
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Cidob.Configuration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SettingEditorDialog extends Common.GridEditorDialog<SettingRow> {
        protected getFormKey() { return SettingForm.formKey; }
                protected getLocalTextPrefix() { return SettingRow.localTextPrefix; }
        protected getNameProperty() { return SettingRow.nameProperty; }
        protected form = new SettingForm(this.idPrefix);
    }
}