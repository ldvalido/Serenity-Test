
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

        protected form = new OnlineTemplateForm(this.idPrefix);

        private feetPropertyGrid: Serenity.PropertyGrid;
        private feetForm: OnlineFeetForm;
        private feetValidator: JQueryValidation.Validator;

        constructor() {
            super();
            this.feetPropertyGrid = new Serenity.PropertyGrid(this.byId("FeetPropertyGrid"), {
                items: Q.getForm(OnlineFeetForm.formKey).filter(x => x.name != 'OnlineFeetID'),
                useCategories: true
            });

            this.feetForm = new OnlineFeetForm((this.feetPropertyGrid as any).idPrefix);

            this.feetValidator = this.byId("FeetForm").validate(Q.validateOptions({}));
        }

        // Save the customer and the order
        protected saveFeet(callback: (response: Serenity.SaveResponse) => void, onSuccess?: (response: Serenity.SaveResponse) => void): boolean {
            var templateId = this.get_entityId();
            // Get current tab
            var currTab = Serenity.TabsExtensions.activeTabKey(this.tabs);

            // Select the correct tab and validate to see the error message in tab
            Serenity.TabsExtensions.selectTab(this.tabs, "Template");
            if (!this.feetValidator.form()) {
                return false;
            }

            // Re-select initial tab
            Serenity.TabsExtensions.selectTab(this.tabs, currTab);

            // prepare an empty entity to serialize customer details into
            var c = <OnlineFeetRow>{};
            this.feetPropertyGrid.save(c);

            OnlineFeetService.Update({
                EntityId: id,
                Entity: c
            }, response => {
                // reload customer list just in case
                Q.reloadLookup(OnlineFeetRow.lookupKey);

                // set flag that we are triggering customer select change event
                // otherwise active tab will change to first one
                this.selfChange++;
                try {
                    // trigger change so that customer select updates its text
                    // in case if Company Name is changed
                    this.form.TemplateID.element.change();
                }
                finally {
                    this.selfChange--;
                }

                onSuccess(response);
            });

            return true;
        }



        // Call super.save to save Order entity
        protected saveTemplate(callback: (response: Serenity.SaveResponse) => void, onSuccess?: (response: Serenity.SaveResponse) => void) {
            super.save(callback);
            onSuccess(callback);
        }

        protected saveAll(callback: (response: Serenity.SaveResponse) => void, onSuccess?: (response: Serenity.SaveResponse) => void) {
            this.saveTemplate(callback,
                // If customer success, save Order entity
                resp => {
                    this.saveFeet(callback);
                }
            );
        }

        // This is called when save/update button is pressed
        protected save(callback: (response: Serenity.SaveResponse) => void) {
            //this.saveAll(callback);
            this.saveAll(callback);
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