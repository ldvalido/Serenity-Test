
namespace Cidob.Templates {
    
    @Serenity.Decorators.registerClass()
    export class OnlineTemplateGrid extends Serenity.EntityGrid<OnlineTemplateRow, any> {
        protected getColumnsKey() { return 'Templates.OnlineTemplate'; }
        protected getDialogType() { return OnlineTemplateDialog; }
        protected getIdProperty() { return OnlineTemplateRow.idProperty; }
        protected getLocalTextPrefix() { return OnlineTemplateRow.localTextPrefix; }
        protected getService() { return OnlineTemplateService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
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