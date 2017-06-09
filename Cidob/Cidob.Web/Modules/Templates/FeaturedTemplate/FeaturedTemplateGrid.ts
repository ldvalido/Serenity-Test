
namespace Cidob.Templates {
    
    @Serenity.Decorators.registerClass()
    export class FeaturedTemplateGrid extends Serenity.EntityGrid<FeaturedTemplateRow, any> {
        protected getColumnsKey() { return 'Templates.FeaturedTemplate'; }
        protected getDialogType() { return FeaturedTemplateDialog; }
        protected getIdProperty() { return FeaturedTemplateRow.idProperty; }
        protected getLocalTextPrefix() { return FeaturedTemplateRow.localTextPrefix; }
        protected getService() { return FeaturedTemplateService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            //Remove Add Button
            var buttons = super.getButtons();
            buttons = buttons.slice(1, buttons.length);
            return buttons;
        }

        protected onViewSubmit() {
            if (!super.onViewSubmit()) {
                return false;
            }
            var request = this.view.params as Serenity.ListRequest;
            var userId = Authorization.getUserId();
            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [['IdUserCreation'], '=', userId]
                );
            return true;
        }

    }
}