
namespace Cidob.Configuration {
    
    @Serenity.Decorators.registerClass()
    export class SettingGrid extends Serenity.EntityGrid<SettingRow, any> {
        protected getColumnsKey() { return 'Configuration.Setting'; }
        protected getDialogType() { return SettingDialog; }
        protected getIdProperty() { return SettingRow.idProperty; }
        protected getLocalTextPrefix() { return SettingRow.localTextPrefix; }
        protected getService() { return SettingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            return [];
        }
    }
}