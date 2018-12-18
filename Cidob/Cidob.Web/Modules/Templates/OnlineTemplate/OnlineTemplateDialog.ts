
namespace Cidob.Templates {
    export class OnlineFeet {
        constructor(IdInternalArch: number, IdExternalArch: number, IdOlive: number, IdCt: number, IdRa: number, IdHeel: number, IsSingleMit: boolean, IsDoubleMit: boolean, InternalArchNumber: number, ExternalArchNumber: number, OliveNumber: number, CtNumber: number, RaNumber: number, HeelNumber: number, BarValue: string, NeckValue: string, BehindNeck: boolean, IdDigital: number, AddaptToNumber: number, IdOnlineTemplate: number) {
            this.IdInternalArch = IdInternalArch;
            this.IdExternalArch = IdExternalArch;
            this.IdOlive = IdOlive;
            this.IdCt = IdCt;
            this.IdRa = IdRa;
            this.IdHeel = IdHeel;
            this.IsSingleMit = IsSingleMit;
            this.IsDoubleMit = IsDoubleMit;
            this.InternalArchNumber = InternalArchNumber;
            this.ExternalArchNumber = ExternalArchNumber;
            this.OliveNumber = OliveNumber;
            this.CtNumber = CtNumber;
            this.RaNumber = RaNumber;
            this.HeelNumber = HeelNumber;
            this.BarValue = BarValue;
            this.NeckValue = NeckValue;
            this.BehindNeck = BehindNeck;
            this.IdDigital = IdDigital;
            this.AddaptToNumber = AddaptToNumber;
            this.IdOnlineTemplate = IdOnlineTemplate;
        }

        IdInternalArch: number;
        IdExternalArch: number;
        IdOlive: number;
        IdCt: number;
        IdRa: number;
        IdHeel: number;
        IsSingleMit: boolean;
        IsDoubleMit: boolean;
        InternalArchNumber: number;
        ExternalArchNumber: number;
        OliveNumber: number;
        CtNumber: number;
        RaNumber: number;
        HeelNumber: number;
        BarValue: string;
        NeckValue: string;
        BehindNeck: boolean;
        IdDigital: number;
        AddaptToNumber: number;
        IdOnlineTemplate: number;

        
    }
    export class OnlineTemplate {
        Reference: string;
        Number: number;
        Name: String;
        Email: String;
        IdGender: number;
        IdBase: number;
        IdShape: number;
        IdCover: number;
        Observations: string;
        Quantity: number;
        Is34: boolean;
        constructor(Reference: String, Number: number, Name: String, Email: String, IdGender: number, IdBase: number, IdShape: number, IdCover: number, Observations: string, Quantity: number, Is34:boolean) {
            this.Reference = Reference;
            this.Number = Number;
            this.Name = Name;
            this.Email = Email;
            this.IdGender = IdGender;
            this.IdBase = IdBase;
            this.IdShape = IdShape;
            this.IdCover = IdCover;
            this.Observations = Observations;
            this.Quantity = Quantity;
            this.Is34 = Is34;
        }
    }
    
    export class Data {
        cmbName: string;
        url: string;
        idProperty:string;
        friendlyProperty: string;
        bodyData: string;
        allowBlank: boolean;

        constructor(cmbName:string, url:string, bodyData:string, idProperty: string, friendlyProperty:string, allowBlank: boolean){
            this.cmbName = cmbName;
            this.url = url;
            this.idProperty = idProperty;
            this.friendlyProperty = friendlyProperty;
            this.bodyData = bodyData;
            this.allowBlank = allowBlank;
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

        //Controls
        protected cmbBase;
        protected cmbShape;
        protected cmbCover;
        protected cmbGender;
        protected cmbCt;
        protected cmbRa;
        protected cmbHeel;
        protected cmbOlive;
        protected cmbDigital;
        protected cmbInternalMedial;
        protected cmbExternalMedial;
        protected txtInternalMedial;
        protected txtExternalMedial;
        protected txtMetatarsal;
        protected txtHeel;
        protected txtRa;
        protected txtCt;
        protected txtAddaptToNumber;
        protected txtQuantity;
        protected txtObservation1;
        protected txtObservation2;
        protected chk34;
        protected chkSingle;
        protected chkDouble;
        protected chkBar1;
        protected chkBar2;
        protected chkBar3;
        protected chkBar4;
        protected chkBar5;
        protected chkNeck1;
        protected chkNeck2;
        protected chkNeck3;
        protected chkNeck4;
        protected chkNeck5;
        protected chkNeckBack;
        protected rdFootBoth;
        protected rdFootSingle;
        protected chkFootLeft;
        protected chkFootRight;
        protected txtReference;
        protected txtNumber;
        protected txtName;
        protected txtEmail;
        protected txtAge;
        protected txtEntity;
        protected chkUrgent;

        dialogOpen() {
            super.dialogOpen();
            if (this.isEditMode()) {
                alert(this.entity);   
            }
            var metadata = this.getDictData();
            this.fillData(metadata);
            this.setUi();
            var btnClear = this.element.find("#btnClear")[0];
            var btnSearch = this.element.find("#btnSearch")[0];
            var btnFeaturedTemplateDelete = this.element.find("#btnFeaturedTemplateDelete")[0];
            var liFeaturedTemplates = this.element.find("#liFeaturedTemplates")[0];
            $(this.chkBar1).change(() => { $(this.chkNeck1).prop('checked', false); });
            $(this.chkBar2).change(() => { $(this.chkNeck2).prop('checked', false); });
            $(this.chkBar3).change(() => { $(this.chkNeck3).prop('checked', false); });
            $(this.chkBar4).change(() => { $(this.chkNeck4).prop('checked', false); });
            $(this.chkBar5).change(() => { $(this.chkNeck5).prop('checked', false); });

            $(this.chkNeck1).change(() => { $(this.chkBar1).prop('checked', false); });
            $(this.chkNeck2).change(() => { $(this.chkBar2).prop('checked', false); });
            $(this.chkNeck3).change(() => { $(this.chkBar3).prop('checked', false); });
            $(this.chkNeck4).change(() => { $(this.chkBar4).prop('checked', false); });
            $(this.chkNeck5).change(() => { $(this.chkBar5).prop('checked', false); });

            $(btnClear).click(() => {
                this.clear();
            });
            $(btnSearch).click(() => {
                this.doSearch();
            });
            $(btnFeaturedTemplateDelete).click(() => {
                this.doFeaturedTemplateConfirmDelete(liFeaturedTemplates);
            });
            this.fillFeaturedTemplates(liFeaturedTemplates);
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            $(txtReference).on("keyup", function() {
                var selection = window.getSelection().toString();
                if (selection !== '') {
                    return;
                }

                // When the arrow keys are pressed, abort.
                if ($.inArray(event.keyCode, [38, 40, 37, 39]) !== -1) {
                    return;
                }

                var $this = $(this);
                var input = $this.val();
                input = input.replace(/[\W\s\._\-]+/g, '');

                var split = 3;
                var chunk = [];

                if (input.length > split) {
                    chunk.push(input.substr(0, split));
                    chunk.push(input.substr(split, input.length - split));
                } else {
                    chunk.push(input);
                }

                $this.val(function() {
                    return chunk.join("-").toUpperCase();
                });
            });
        }

        doFeaturedTemplateDelete(idFeaturedTemplate: number) {

            var url = "/Services/Templates/FeaturedTemplate/Delete";
            $.post(
            {
                contentType: 'application/json',
                url: url,
                data: JSON.stringify({ EntityId: idFeaturedTemplate })

            });
        }

        doFeaturedTemplateConfirmDelete(liFeaturedTemplates: any) {
            var self = this;
            var elements = this.element.find("input[name='chkFeaturedTemplate']");
            var lstToPerform = [];
            for (var i = 0; i < elements.length; i++) {
                var el = elements[i];
                if (el.checked) {
                    lstToPerform.push(el.id);
                }
            }

            if (lstToPerform.length > 0) {
                Q.confirm("¿Está seguro de borrar estos elementos?", function() {
                    for (var i = 0; i < lstToPerform.length; i++) {
                        self.doFeaturedTemplateDelete(lstToPerform[i]);
                    }
                    Q.notifySuccess("Operación exitosa");
                    $(liFeaturedTemplates).empty();
                    self.fillFeaturedTemplates(liFeaturedTemplates);
                }, {
                    title: 'Confirmación'
                });

            }
        }

        fillFeaturedTemplates(liFeaturedTemplates: any) {
            var url = "/Services/Templates/FeaturedTemplate/List";
            var filter = { Take: 100, Criteria: [['IdUserCreation'], '=', Authorization.userDefinition.UserId] };
            $.post({
                contentType: 'application/json',
                url: url,
                data: JSON.stringify(filter),
                success: (response: any) => {
                    for (var i = 0; i < response.Entities.length; i++) {
                        var entity = response.Entities[i];
                        this.addFeaturedTemplate(liFeaturedTemplates, entity);
                    }
                }
            });
        }

        addFeaturedTemplate(liFeaturedTemplates: any, entity: any) {
            var pattern = '<li><input class="form-check-input" type="checkbox" value="" name="chkFeaturedTemplate" id="{0}" tabIndex="-1"><label class="form-check-label" for="test">&nbsp;&nbsp;&nbsp;{1} </label></li>';
            var textToAdd = this.format(pattern, entity.IdFeaturedTemplate, entity.Title);
            liFeaturedTemplates.innerHTML += textToAdd;


        }

        format(...args: any[]) {
            var s = args[0];
            for (var i = 0; i < args.length - 1; i++) {
                var reg = new RegExp("\\{" + i + "\\}", "gm");
                s = s.replace(reg, args[i + 1]);
            }

            return s;
        }

        doSearch() {
            var filter = {
                Reference: this.txtReference.val(),
                Number: this.isEmpty(this.txtNumber.val()) ? null : parseInt(this.txtNumber.val())
            }
            var request = { take: 100, EqualityFilter: filter };

            var url = "/Services/Templates/OnlineTemplate/List";
            $.post({
                contentType: 'application/json',
                data: JSON.stringify(request),
                url: url,
                success: (response: any) => {
                    alert(response.TotalCount);
                    switch (response.TotalCount) {
                    case 0:
                        break;
                    case 1:
                        //fill Data
                        break;
                    case 2:
                        //chooseRecord();
                        break;
                    }
                }
            })
        }

        isEmpty(data: any) {
            if (typeof (data) === 'object') {
                if (JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]') {
                    return true;
                } else if (!data) {
                    return true;
                }
                return false;
            } else if (typeof (data) === 'string') {
                if (!data.trim()) {
                    return true;
                }
                return false;
            } else if (typeof (data) === 'undefined') {
                return true;
            } else {
                return false;
            }
        }

        setUi() {
            this.cmbBase = $("#cmbBase").first();
            this.cmbShape = $("#cmbShape").first();
            this.cmbCover = $("#cmbCover").first();
            this.cmbGender = $("#cmbGender").first();
            this.cmbCt = $("#cmbCt").first();
            this.cmbRa = $("#cmbRa").first();
            this.cmbHeel = $("#cmbHeel").first();
            this.cmbOlive = $("#cmbOlive").first();
            this.cmbDigital = $("#cmbDigital").first();
            this.txtInternalMedial = $("#txtInternalMedial").first();
            this.txtExternalMedial = $("#txtExternalMedial").first();
            this.txtMetatarsal = $("#txtMetatarsal").first();
            this.txtHeel = $("#txtHeel").first();
            this.txtRa = $("#txtRa").first();
            this.txtCt = $("#txtCt").first();
            this.txtAddaptToNumber = $("#txtAddaptToNumber").first();
            this.txtObservation1 = $("#txtObservation1").first();
            this.txtObservation2 = $("#txtObservation2").first();
            this.txtQuantity = $("#txtQuantity").first();
            this.chk34 = $("#chk34").first();
            this.chkSingle = $("#chkSingle").first();
            this.chkDouble = $("#chkDouble").first();
            this.chkBar1 = $("#chkBar1").first();
            this.chkBar2 = $("#chkBar2").first();
            this.chkBar3 = $("#chkBar3").first();
            this.chkBar4 = $("#chkBar4").first();
            this.chkBar5 = $("#chkBar5").first();
            this.chkNeck1 = $("#chkNeck1").first();
            this.chkNeck2 = $("#chkNeck2").first();
            this.chkNeck3 = $("#chkNeck3").first();
            this.chkNeck4 = $("#chkNeck4").first();
            this.chkNeck5 = $("#chkNeck5").first();
            this.chkNeckBack = $("#chkNeckBack").first();
            this.rdFootBoth = $("#rdFootBoth").first();
            this.rdFootSingle = $("#rdFootSingle").first();
            this.chkFootLeft = $("#chkFootLeft").first();
            this.chkFootRight = $("#chkFootRight").first();
            this.txtReference = $("#txtReference").first();
            this.txtNumber = $("#txtNumber").first();
            this.txtName = $("#txtName").first();
            this.txtEmail = $("#txtEmail").first();
            this.txtAge = $("#txtAge").first();
            this.txtEntity = $("#txtEntity").first();
            this.chkUrgent = $("#chkUrgent").first();
            this.cmbInternalMedial = $("#cmbInternalMedial").first();
            this.cmbExternalMedial = $("#cmbExternalMedial").first();
        }

        clear() {
            this.cmbBase.val("");
            this.cmbShape.val("");
            this.cmbCover.val("");
            this.cmbGender.val("");
            this.cmbCt.val("");
            this.cmbRa.val("");
            this.cmbHeel.val("");
            this.cmbOlive.val("");
            this.cmbDigital.val("");
            this.txtInternalMedial.val("0");
            this.txtExternalMedial.val("0");
            this.txtMetatarsal.val("0");
            this.txtHeel.val("0");
            this.txtRa.val("0");
            this.txtCt.val("0");
            this.txtAddaptToNumber.val("0");
            this.txtQuantity.val("1");
            this.txtObservation1.val("");
            this.txtObservation2.val("");
            this.chk34.prop("checked", false);
            this.chkSingle.prop("checked", false);
            this.chkDouble.prop("checked", false);
            this.chkBar1.prop("checked", false);
            this.chkBar2.prop("checked", false);
            this.chkBar3.prop("checked", false);
            this.chkBar4.prop("checked", false);
            this.chkBar5.prop("checked", false);
            this.chkNeck1.prop("checked", false);
            this.chkNeck2.prop("checked", false);
            this.chkNeck3.prop("checked", false);
            this.chkNeck4.prop("checked", false);
            this.chkNeck5.prop("checked", false);
            this.chkNeckBack.prop("checked", false);
            this.rdFootBoth.prop("checked", true);
            this.chkFootLeft.prop("checked", false);
            this.chkFootRight.prop("checked", false);
            this.txtReference.val("");
            this.txtNumber.val("");
            this.txtName.val("");
            this.txtEmail.val("");
            this.txtAge.val("");
            this.txtEntity.val("");
            this.chkUrgent.prop("checked", false);
        }
        fillUserData() {
            $.post({
                contentType: 'application/json',
                url: 'Services/Configuration/UserPrefix/List',
                data: null
            
            });
        }
        fillData(dataDict: Array<Data>) {
            dataDict.forEach(element => {
                $.post({
                    contentType: 'application/json',
                    data: element.bodyData || '',
                    url: element.url,
                    success: (data: any) => {
                        var cmb = $("#" + element.cmbName);
                        if (element.allowBlank) {
                            var option = $('<option />');
                            option.attr('value', '').text('');
                            cmb.append(option);
                        }
                        $(data.Entities).each((pos: number, it: any) => {
                            var friendlyName = it[element.friendlyProperty];
                            var id = it[element.idProperty];
                            var option = $('<option />');
                            option.attr('value', id).text(friendlyName);
                            cmb.append(option);
                        });
                    }
                });
            });
        }

        getDictData(): Array<Data> {
            let returnValue: Array<Data> = [];
            returnValue.push(new Data("cmbGender", "/Services/MasterData/Gender/List", "{}", "IdGender", "Description", false));
            returnValue.push(new Data("cmbBase", "/Services/MasterData/Base/List", '{Sort: [\"Order\"]}', "IdBase", "Description", true));
            returnValue.push(new Data("cmbShape", "/Services/MasterData/Shape/List", '{Sort: [\"Order\"]}', "IdShape", "Description", true));
            returnValue.push(new Data("cmbCover", "/Services/MasterData/Cover/List", '{Sort: [\"Order\"]}', "IdCover", "Description", true));
            returnValue.push(new Data("cmbCt", "/Services/MasterData/CT/List", '{Sort: [\"Order\"]}', "IdCt", "Description", true));
            returnValue.push(new Data("cmbRa", "/Services/MasterData/RA/List", '{Sort: [\"Order\"]}', "IdRa", "Description", true));
            returnValue.push(new Data("cmbHeel", "/Services/MasterData/Heel/List", '{Sort: [\"Order\"]}', "IdHeel", "Description", true));
            returnValue.push(new Data("cmbDigital", "/Services/MasterData/Digital/List", '{Sort: [\"Order\"]}', "IdDigital", "Description", true));
            returnValue.push(new Data("cmbOlive", "/Services/MasterData/Olive/List", '{Sort: [\"Order\"]}', "IdOlive", "Description", true));
            returnValue.push(new Data("cmbInternalMedial", "/Services/MasterData/Shape/List", '{Sort: [\"Order\"]}', "IdShape", "Description", true));
            returnValue.push(new Data("cmbExternalMedial", "/Services/MasterData/Shape/List", '{Sort: [\"Order\"]}', "IdShape", "Description", true));
            return returnValue;
        }

        hasValue(ctrl: any, minimumValueLength?: number): boolean {
            var minLength = minimumValueLength == undefined ? 0 : minimumValueLength;
            var content = ctrl.val();
            var returnValue = content != null && content !== '';
            if (returnValue) {
                returnValue = returnValue && content.length >= minLength;
            }
            ctrl.addClass(returnValue ? 'valid' : 'error');
            return returnValue;
        }
    
        isValid(): boolean {
            var isReferenceValid = this.hasValue(this.txtReference, 10);
            var isNumberValid = this.hasValue(this.txtNumber, 10);
            var isNameValid = this.hasValue(this.txtName);
            var isEmailValid = this.hasValue(this.txtEmail);
            var isAgeValid = this.hasValue(this.txtAge);
            var isEntityValid = this.hasValue(this.txtEntity);
            var isGenderValid = this.hasValue(this.cmbGender);
            var isBaseValid = this.hasValue(this.cmbBase);
            var isShapeValid = this.hasValue(this.cmbShape);
            var isCoverValid = this.hasValue(this.cmbCover);
            var isInternalMediaValid = this.hasValue(this.cmbInternalMedial);
            var isExternalMediaValid = this.hasValue(this.cmbExternalMedial);
            var isOliveValid = this.hasValue(this.cmbOlive);
            var isCtValid = this.hasValue(this.cmbCt);
            

            return isReferenceValid &&
                isNumberValid &&
                isNameValid &&
                isEmailValid &&
                isAgeValid &&
                isEntityValid &&
                isGenderValid &&
                isBaseValid &&
                isShapeValid &&
                isCoverValid &&
                isExternalMediaValid &&
                isInternalMediaValid &&
                isOliveValid &&
                isCtValid ;
        }
        saveFeet(data:any, callback: any, form: any) {
            var onlineFeet = new OnlineFeet(
                parseInt(this.txtInternalMedial.val()),
                parseInt(this.txtExternalMedial.val()),
                parseInt(this.cmbOlive.val()),
                parseInt(this.cmbCt.val()),
                parseInt(this.cmbRa.val()),
                parseInt(this.cmbHeel.val()),
                this.chkSingle.attr('checked'),
                this.chkDouble.attr('checked'),
                parseInt(this.txtInternalMedial.val()),
                parseInt(this.txtExternalMedial.val()),
                parseInt(this.txtMetatarsal.val()),
                parseInt(this.txtCt.val()),
                parseInt(this.txtRa.val()),
                parseInt(this.txtHeel.val()),
                "",
                "",
                this.chkNeckBack.atr("checked"),
                parseInt(this.cmbDigital.val()),
                parseInt(this.txtAddaptToNumber.val()),
                data.id
                );
            $.post({
                url: '/Services/Templates/OnlineFeet/Create',
                contentType: 'application/json',
                data: JSON.stringify({ Entity: onlineFeet }),
                success: (data: any) => {
                    callback.apply(data);
                }
            });
        }
        save(callback: any) {
            var self = this;
            if (this.isValid()) {
                var onlineTemplate = new OnlineTemplate(
                    this.txtReference.val(),
                    parseInt(this.txtNumber.val()),
                    this.txtName.val(),
                    this.txtEmail.val(),
                    parseInt(this.cmbGender.val()),
                    parseInt(this.cmbBase.val()),
                    parseInt(this.cmbShape.val()),
                    parseInt(this.cmbCover.val()),
                    this.txtObservation1.val() + "\n" + this.txtObservation2.val(),
                    parseInt(this.txtQuantity.val()),
                    this.chk34.attr("checked")
                );
                $.post({
                    url: '/Services/Templates/OnlineTemplate/Create',
                    contentType: 'application/json',
                    data: JSON.stringify({ Entity: onlineTemplate }),
                    success: (data: any) => {
                        //self.saveFeet(data, callback, self);
                        self.element.dialog().dialog('close');
                    }
                });
            } else {
                Q.notifyError(Q.text("Validation.InvalidFormMessage"));
            }
        }
}