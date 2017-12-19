namespace Cidob.Templates
{
    @Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
    @Serenity.Decorators.element("<div/>")
    export class OnlineFeetEditor extends Serenity.TemplatedWidget<any>
        implements Serenity.IGetEditValue, Serenity.ISetEditValue {

        private isDirty: boolean;
        private items: OnlineFeetRow[];
        constructor(div: JQuery) {
                super(div);
            }

            protected getTemplate() {
                return "<div><div id='~_Toolbar'></div><div id='~_FeetList'></div>";
            }
            protected get value() {
                return this.items;
            }
            protected updateContent() {                
                var tabPie = jQuery("li[tabindex=-1]");
                
                var feetList = this.byId('FeetList');
                var forms = $('form');

                feetList.children().remove();
                $('li[tabindex=0]').hide();
                $('.Cidob_Templates_OnlineFeetEditor20_Toolbar').hide();
                for (var i = 0; i< forms.length; i++) {
                    var f = forms[i];
                    
                    if (f.id.indexOf('FeetForm') > 0) {
                        feetList[0].appendChild(f.parentNode);
                        tabPie.hide();
                    }
                }
            }
            protected set value(value: OnlineFeetRow[]) {
                this.items = value || [];
                this.set_isDirty(false);
                this.updateContent();
            }
        public getEditValue(prop: Serenity.PropertyItem, target) {
            target[prop.name] = this.value;
            
        }

        public setEditValue(source, prop: Serenity.PropertyItem) {
            this.value = source[prop.name] || [];
            
        }
        public get_isDirty(): boolean {
            return this.isDirty;
        }

        public set_isDirty(value): void {
            this.isDirty = value;
        }

        public onChange: () => void;
        }

}