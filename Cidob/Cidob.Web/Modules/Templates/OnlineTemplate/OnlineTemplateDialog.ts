
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
        private selfChange: number;
        private feetEntity: number;

        protected featuredTemplateButton: JQuery;
        constructor() {
            super();
            this.feetPropertyGrid = new Serenity.PropertyGrid(this.byId("FeetPropertyGrid"), {
                items: Q.getForm(OnlineFeetForm.formKey).filter(x => x.name != 'OnlineFeetID'),
                useCategories: true
            });

            this.feetForm = new OnlineFeetForm((this.feetPropertyGrid as any).idPrefix);

            this.feetValidator = this.byId("FeetForm").validate(Q.validateOptions({}));
            //this.featuredTemplateButton = {
            //        title: 'Save Template',
            //        hotkey: 'alt+p',
            //        cssClass: 'save-and-recover-featured-template-button',
            //        onClick: function () {
            //            alert('traer pantalla');
            //        }
            //    };
        }

        protected updateInterface() {

            // by default cloneButton is hidden in base UpdateInterface method
            super.updateInterface();

            // here we show it if it is edit mode (not new)
            //this.featuredTemplateButton.title = this.isEditMode() ? 'Save Template' : 'Recover Template';
            //this.featuredTemplateButton.toggle(true);
        }

        protected validateTemplate(): boolean {
            var returnValue = true;
            // Get current tab
            var currTab = Serenity.TabsExtensions.activeTabKey(this.tabs);

            // Select the correct tab and validate to see the error message in tab
            Serenity.TabsExtensions.selectTab(this.tabs, "Feet");
            if (!this.feetValidator.form()) {
                returnValue = false;
            }

            // Re-select initial tab
            Serenity.TabsExtensions.selectTab(this.tabs, currTab);
            return returnValue;
        }
        // Save the customer and the order
        protected saveFeet(idOnlineTemplate:number): boolean {

            // prepare an empty entity to serialize customer details into
            var c = <OnlineFeetRow>{};
            this.feetPropertyGrid.save(c);
            c.IdOnlineTemplate = idOnlineTemplate;
            if (this.isNewOrDeleted()) {

                OnlineFeetService.Create({
                    //EntityId: id,
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

                        //this.form.TemplateID.element.change();
                    } finally {
                        this.selfChange--;
                    }
                });
            } else {

                OnlineFeetService.Update({
                    EntityId: c.IdOnlineFeet,
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

                        //this.form.TemplateID.element.change();
                    }
                    finally {
                        this.selfChange--;
                    }
                });
            }

            return true;
        }

        // Call super.save to save Order entity
        protected saveTemplate(callback: (response: Serenity.SaveResponse) => void, onSuccess?: (response: Serenity.SaveResponse) => void) {
            super.save(callback);
        }

        protected saveAll(callback: (response: Serenity.SaveResponse) => void, onSuccess?: (response: Serenity.SaveResponse) => void) {
            this.saveTemplate(callback, onSuccess);
        }

        // This is called when save/update button is pressed
        protected save(callback: (response: Serenity.SaveResponse) => void) {
            if (this.validateTemplate()) {
                this.saveAll(callback, resp => { });   
            }
        }
        protected doDelete(callback: (response: Serenity.SaveResponse) => void) {
            OnlineFeetService.Delete({ EntityId:this.feetEntity.IdOnlineFeet}, response => {
                super.doDelete(callback); 
            });
        }
        onSaveSuccess(callback: (response: Serenity.SaveResponse) => void) {
            var templateId = callback.EntityId;
            this.saveFeet(templateId);
            super.dialogClose();
        }
        dialogOpen() {
            super.dialogOpen();
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }
        loadEntity(entity: OnlineTemplateRow) {
            super.loadEntity(entity);

            OnlineFeetService.List({
                EqualityFilter: { 'IdOnlineTemplate':this.get_entityId()}
            }, response => {
                this.feetEntity = response.Entities[0];
                this.feetPropertyGrid.load(this.feetEntity);
            });
            //Serenity.TabsExtensions.setDisabled(this.tabs, 'Feet', this.isNewOrDeleted());

            //this.agendaGrid.customerID = entity.CustomerID;
        }
    }
}