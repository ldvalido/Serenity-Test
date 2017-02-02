
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class DigitalDialog extends Serenity.EntityDialog<DigitalRow, any> {
        protected getFormKey() { return DigitalForm.formKey; }
        protected getIdProperty() { return DigitalRow.idProperty; }
        protected getLocalTextPrefix() { return DigitalRow.localTextPrefix; }
        protected getNameProperty() { return DigitalRow.nameProperty; }
        protected getService() { return DigitalService.baseUrl; }

        protected form = new DigitalForm(this.idPrefix);

    }
}