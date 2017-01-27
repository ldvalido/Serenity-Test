
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ArchDialog extends Serenity.EntityDialog<ArchRow, any> {
        protected getFormKey() { return ArchForm.formKey; }
        protected getIdProperty() { return ArchRow.idProperty; }
        protected getLocalTextPrefix() { return ArchRow.localTextPrefix; }
        protected getNameProperty() { return ArchRow.nameProperty; }
        protected getService() { return ArchService.baseUrl; }

        protected form = new ArchForm(this.idPrefix);

    }
}