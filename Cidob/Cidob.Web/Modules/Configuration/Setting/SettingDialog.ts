
namespace Cidob.Configuration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SettingDialog extends Serenity.EntityDialog<SettingRow, any> {
        protected getFormKey() { return SettingForm.formKey; }
        protected getIdProperty() { return SettingRow.idProperty; }
        protected getLocalTextPrefix() { return SettingRow.localTextPrefix; }
        protected getNameProperty() { return SettingRow.nameProperty; }
        protected getService() { return SettingService.baseUrl; }

        protected form = new SettingForm(this.idPrefix);

        updateInterface() {
            super.updateInterface();
            this.deleteButton.remove();
        }

    }
}