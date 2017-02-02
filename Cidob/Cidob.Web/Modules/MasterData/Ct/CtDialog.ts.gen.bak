
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CtDialog extends Serenity.EntityDialog<CtRow, any> {
        protected getFormKey() { return CtForm.formKey; }
        protected getIdProperty() { return CtRow.idProperty; }
        protected getLocalTextPrefix() { return CtRow.localTextPrefix; }
        protected getNameProperty() { return CtRow.nameProperty; }
        protected getService() { return CtService.baseUrl; }

        protected form = new CtForm(this.idPrefix);

    }
}