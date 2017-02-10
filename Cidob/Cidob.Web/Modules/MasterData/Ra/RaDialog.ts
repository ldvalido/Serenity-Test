
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RaDialog extends Serenity.EntityDialog<RaRow, any> {
        protected getFormKey() { return RaForm.formKey; }
        protected getIdProperty() { return RaRow.idProperty; }
        protected getLocalTextPrefix() { return RaRow.localTextPrefix; }
        protected getNameProperty() { return RaRow.nameProperty; }
        protected getService() { return RaService.baseUrl; }

        protected form = new RaForm(this.idPrefix);

    }
}