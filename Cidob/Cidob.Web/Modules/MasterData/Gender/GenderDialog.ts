﻿
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class GenderDialog extends Serenity.EntityDialog<GenderRow, any> {
        protected getFormKey() { return GenderForm.formKey; }
        protected getIdProperty() { return GenderRow.idProperty; }
        protected getLocalTextPrefix() { return GenderRow.localTextPrefix; }
        protected getNameProperty() { return GenderRow.nameProperty; }
        protected getService() { return GenderService.baseUrl; }

        protected form = new GenderForm(this.idPrefix);

    }
}