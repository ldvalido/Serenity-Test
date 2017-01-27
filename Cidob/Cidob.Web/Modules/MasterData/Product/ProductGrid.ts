
namespace Cidob.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey() { return 'MasterData.Product'; }
        protected getDialogType() { return ProductDialog; }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getService() { return ProductService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}