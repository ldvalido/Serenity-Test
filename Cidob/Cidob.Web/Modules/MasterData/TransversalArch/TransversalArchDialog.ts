
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TransversalArchDialog extends Serenity.EntityDialog<TransversalArchRow, any> {
        protected getFormKey() { return TransversalArchForm.formKey; }
        protected getIdProperty() { return TransversalArchRow.idProperty; }
        protected getLocalTextPrefix() { return TransversalArchRow.localTextPrefix; }
        protected getNameProperty() { return TransversalArchRow.nameProperty; }
        protected getService() { return TransversalArchService.baseUrl; }

        protected form = new TransversalArchForm(this.idPrefix);

    }
}