
namespace Cidob.Templates {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class OnlineFeetDialog extends Serenity.EntityDialog<OnlineFeetRow, any> {
        protected getFormKey() { return OnlineFeetForm.formKey; }
        protected getIdProperty() { return OnlineFeetRow.idProperty; }
        protected getLocalTextPrefix() { return OnlineFeetRow.localTextPrefix; }
        protected getNameProperty() { return OnlineFeetRow.nameProperty; }
        protected getService() { return OnlineFeetService.baseUrl; }

        protected form = new OnlineFeetForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}