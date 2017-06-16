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
                return "<div><div id='~_Toolbar'></div><ul id='~_FeetList'></ul></div>";
            }
            protected get value() {
                return this.items;
            }
            protected updateContent() {
                var html = [];
                var feetList = this.byId('FeetList');
                feetList.children().remove();
                html.push('Pie :');
                html.push('<input type="radio" name="feetSide" value="both">Ambos Pies');
                html.push('<input type="radio" name="feetSide" value="single">Selección Individual');
                html.push('Tabs');
                feetList.append(html.join(''));

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