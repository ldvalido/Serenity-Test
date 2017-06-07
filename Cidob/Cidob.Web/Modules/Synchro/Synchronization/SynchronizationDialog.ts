
namespace Cidob.Synchro {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SynchronizationDialog extends Serenity.EntityDialog<SynchronizationRow, any> {
        protected getFormKey() { return SynchronizationForm.formKey; }
        protected getIdProperty() { return SynchronizationRow.idProperty; }
        protected getLocalTextPrefix() { return SynchronizationRow.localTextPrefix; }
        protected getNameProperty() { return SynchronizationRow.nameProperty; }
        protected getService() { return SynchronizationService.baseUrl; }

        protected form = new SynchronizationForm(this.idPrefix);

    }
}