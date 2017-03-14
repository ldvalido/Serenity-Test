
namespace Cidob.Relationship {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BaseShapeDialog extends Serenity.EntityDialog<BaseShapeRow, any> {
        protected getFormKey() { return BaseShapeForm.formKey; }
        protected getIdProperty() { return BaseShapeRow.idProperty; }
        protected getLocalTextPrefix() { return BaseShapeRow.localTextPrefix; }
        protected getService() { return BaseShapeService.baseUrl; }

        protected form = new BaseShapeForm(this.idPrefix);

    }
}