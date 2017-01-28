
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CoverDialog extends Serenity.EntityDialog<CoverRow, any> {
        protected getFormKey() { return CoverForm.formKey; }
        protected getIdProperty() { return CoverRow.idProperty; }
        protected getLocalTextPrefix() { return CoverRow.localTextPrefix; }
        protected getNameProperty() { return CoverRow.nameProperty; }
        protected getService() { return CoverService.baseUrl; }

        protected form = new CoverForm(this.idPrefix);

    }
}