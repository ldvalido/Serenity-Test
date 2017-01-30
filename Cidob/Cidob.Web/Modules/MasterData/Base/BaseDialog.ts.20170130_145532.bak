
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class BaseDialog extends Serenity.EntityDialog<BaseRow, any> {
        protected getFormKey() { return BaseForm.formKey; }
        protected getIdProperty() { return BaseRow.idProperty; }
        protected getLocalTextPrefix() { return BaseRow.localTextPrefix; }
        protected getNameProperty() { return BaseRow.nameProperty; }
        protected getService() { return BaseService.baseUrl; }

        protected form = new BaseForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}