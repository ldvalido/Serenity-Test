
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class OliveDialog extends Serenity.EntityDialog<OliveRow, any> {
        protected getFormKey() { return OliveForm.formKey; }
        protected getIdProperty() { return OliveRow.idProperty; }
        protected getLocalTextPrefix() { return OliveRow.localTextPrefix; }
        protected getNameProperty() { return OliveRow.nameProperty; }
        protected getService() { return OliveService.baseUrl; }

        protected form = new OliveForm(this.idPrefix);

    }
}