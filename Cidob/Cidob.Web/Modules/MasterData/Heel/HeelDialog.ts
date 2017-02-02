
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class HeelDialog extends Serenity.EntityDialog<HeelRow, any> {
        protected getFormKey() { return HeelForm.formKey; }
        protected getIdProperty() { return HeelRow.idProperty; }
        protected getLocalTextPrefix() { return HeelRow.localTextPrefix; }
        protected getNameProperty() { return HeelRow.nameProperty; }
        protected getService() { return HeelService.baseUrl; }

        protected form = new HeelForm(this.idPrefix);

    }
}