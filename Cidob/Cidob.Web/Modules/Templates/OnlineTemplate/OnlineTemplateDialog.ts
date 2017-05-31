
namespace Cidob.Templates {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class OnlineTemplateDialog extends Serenity.EntityDialog<OnlineTemplateRow, any> {
        protected getFormKey() { return OnlineTemplateForm.formKey; }
        protected getIdProperty() { return OnlineTemplateRow.idProperty; }
        protected getLocalTextPrefix() { return OnlineTemplateRow.localTextPrefix; }
        protected getNameProperty() { return OnlineTemplateRow.nameProperty; }
        protected getService() { return OnlineTemplateService.baseUrl; }
        
        private feetPropertyGrid: Serenity.PropertyGrid;
        private feetForm: OnlineFeetForm;
        private feetValidator: JQueryValidation.Validator;

        constructor() {
            super();
           this.feetPropertyGrid = new Serenity.PropertyGrid(this.byId("FeetPropertyGrid"), {
               items: Q.getForm(OnlineFeetForm.formKey).filter(x => x.name != 'OnlineFeetID'),
               useCategories: true
           });

           this.feetForm = new OnlineFeetForm(this.feetPropertyGrid as any).idPrefix);

           this.feetValidator = this.byId("FeetForm").validate(Q.validateOptions({}));
        }

        dialogOpen() {
            super.dialogOpen();
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }
        loadEntity(entity: OnlineTemplateRow) {
            super.loadEntity(entity);

            //Serenity.TabsExtensions.setDisabled(this.tabs, 'Feet', this.isNewOrDeleted());

            //this.agendaGrid.customerID = entity.CustomerID;
        }
    }
}