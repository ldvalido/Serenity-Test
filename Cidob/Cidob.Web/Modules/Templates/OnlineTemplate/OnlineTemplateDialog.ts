
namespace Cidob.Templates {

    export class Data {
        cmbName: string;
        url: string;
        idProperty:string;
        friendlyProperty: string;

        constructor(cmbName:string, url:string, idProperty: string, friendlyProperty:string){
            this.cmbName = cmbName;
            this.url = url;
            this.idProperty = idProperty;
            this.friendlyProperty = friendlyProperty;
        }
     }
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
        
        dialogOpen() {
            super.dialogOpen();
            var metadata = this.getDictData();
            this.fillData(metadata);
            
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }

        fillData(dataDict: Array<Data>) {
            dataDict.forEach(element => {
                $.get(element.url, (data:any) => {
                    var cmb = $("#" + element.cmbName);
                    $(data.Entities).each((pos: number, it: any) => {
                        var friendlyName = it[element.friendlyProperty];
                        var id = it[element.idProperty];
                        var option = $('<option />');
                        option.attr('value', id).text(friendlyName);
                        cmb.append(option);
                    });
                });
            });
        }

        getDictData() : Array<Data> {
            let returnValue:Array<Data> = [];
            returnValue.push(new Data("bases","http://localhost:1725/Services/MasterData/Base/List","IdBase","PrintName"));
            return returnValue;
        }
    }
}