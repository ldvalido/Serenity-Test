
namespace Cidob.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ShapeDialog extends Serenity.EntityDialog<ShapeRow, any> {
        protected getFormKey() { return ShapeForm.formKey; }
        protected getIdProperty() { return ShapeRow.idProperty; }
        protected getLocalTextPrefix() { return ShapeRow.localTextPrefix; }
        protected getNameProperty() { return ShapeRow.nameProperty; }
        protected getService() { return ShapeService.baseUrl; }

        protected form = new ShapeForm(this.idPrefix);

    }
}