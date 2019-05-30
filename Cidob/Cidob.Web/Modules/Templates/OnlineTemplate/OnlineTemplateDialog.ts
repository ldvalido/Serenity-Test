
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
        IdAgency: string;
        Number: number;
        Name: string;
        Email: string;
        Age: string;
        Entity: string;
        IdGender: number;
        IdBase: number;
        IdShape: number;
        IdCover: number;
        Observations: string;
        Quantity: number;
        Is34: boolean;
        Urgent: boolean;
        constructor(Reference: string, IdAgency: string, Number: number, Name: string, Email: string, Age: string, Entity: string, IdGender: number, IdBase: number, IdShape: number, IdCover: number, Observations: string, Quantity: number, Is34: boolean, Urgent: boolean) {
            this.Reference = Reference;
            this.IdAgency = IdAgency;
            this.Number = Number;
            this.Name = Name;
            this.Email = Email;
            this.Age = Age;
            this.Entity = Entity;
            this.IdGender = IdGender;
            this.IdBase = IdBase;
            this.IdShape = IdShape;
            this.IdCover = IdCover;
            this.Observations = Observations;
            this.Quantity = Quantity;
            this.Is34 = Is34;
            this.Urgent = Urgent;
        }
    }

    export class Data {
        cmbName: string;
        url: string;
        idProperty: string;
        friendlyProperty: string;
        bodyData: string;
        allowBlank: boolean;

        constructor(cmbName: string, url: string, bodyData: string, idProperty: string, friendlyProperty: string, allowBlank: boolean) {
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
        protected txtOlive;
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
        protected txtId;
        protected txtReference;
        protected txtNumber;
        protected txtName;
        protected txtEmail;
        protected txtAge;
        protected txtEntity;
        protected chkUrgent;

        dialogOpen() {
            super.dialogOpen();

            var metadata = this.getDictData();
            this.fillData(metadata, () => {
                if (this.isEditMode()) {
                    this.fillOnlineTemplate(this.entity);
                    this.fillOnlineFeet(this.entity.IdOnlineTemplate);
                }
            });
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
            $(this.cmbBase).on('change', () => {
                this.fillTemplatesComponents(this.cmbBase.val());
            });
            $(this.rdFootBoth).on('click', () => {
                $(this.chkFootRight).prop('checked', false);
                $(this.chkFootLeft).prop('checked', false);
                $(this.chkFootRight).prop('disabled', true);
                $(this.chkFootLeft).prop('disabled', true);
                this.openTab(event, 'Both', ['Ambos']);
            });
            $(this.rdFootSingle).on('click', () => {
                $(this.chkFootRight).prop('checked', true);
                $(this.chkFootLeft).prop('checked', true);

                $(this.chkFootRight).prop('disabled', false);
                $(this.chkFootLeft).prop('disabled', false);
                this.openTab(event, 'Both', ['Izquierdo', 'Derecho']);
            });
            $(this.chkFootLeft).on('click', () => {
                var checkedSides = [];
                if ((this.chkFootLeft).prop('checked')) {
                    checkedSides.push('Izquierdo');
                }
                if ((this.chkFootRight).prop('checked')) {
                    checkedSides.push('Derecho');
                }
                this.openTab(event, 'Both', checkedSides);
            });

            $(this.chkFootRight).on('click', () => {
                var checkedSides = [];
                if ((this.chkFootLeft).prop('checked')) {
                    checkedSides.push('Izquierdo');
                }
                if ((this.chkFootRight).prop('checked')) {
                    checkedSides.push('Derecho');
                }
                this.openTab(event, 'Both', checkedSides);
            });
            this.doValidateByNumber($(this.cmbBase), $(this.txtOlive), '/services/MasterData/Base/Retrieve');

            this.fillFeaturedTemplates(liFeaturedTemplates);
            this.fillUserData();
            this.rdFootBoth.click();
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }

        doValidateByNumber(cmb, txt, url) {
            var self = this;
            $(cmb).on('change', function () {
                self.post(url, { 'EntityId': this.value }, function (cb) {

                    $(txt).attr({
                        min: cb.Entity.From,
                        max: cb.Entity.To
                    });
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
                Q.confirm("¿Está seguro de borrar estos elementos?", function () {
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

        fillTemplatesComponents(idBase: number) {
            $(this.cmbInternalMedial).prop('disabled', false);
            $(this.cmbExternalMedial).prop('disabled', false);
            $(this.cmbShape).prop('disabled', false);
            $(this.cmbCover).prop('disabled', false);

            var metadata = this.getConditionalData(idBase);
            this.fillData(metadata, () => {
            });

        }
        fillFeaturedTemplates(liFeaturedTemplates: any) {
            var url = "/Services/Templates/FeaturedTemplate/List";
            var filter = { Take: 100, Criteria: [['IdUserCreation'], '=', Authorization.userDefinition.UserId] };
            this.post(url, filter, (response: any) => {
                for (var i = 0; i < response.Entities.length; i++) {
                    var entity = response.Entities[i];
                    this.addFeaturedTemplate(liFeaturedTemplates, entity);
                }
            });

        }

        post(url: string, filter: any, cb: any) {
            $.post({
                contentType: 'application/json',
                url: url,
                data: JSON.stringify(filter),
                success: (response: any) => {
                    cb.call(this, response);
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
            this.txtOlive = $("#txtOlive").first();
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
            this.txtId = $("#txtTd").first();
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
            this.txtInternalMedial.val("");
            this.txtExternalMedial.val("");
            this.txtOlive.val("0");
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
        updateUserData(agency, agencyId) {
            $.post({
                contentType: 'application/json',
                url: '/Services/Configuration/UserPrefix/Update',
                data: JSON.stringify({
                    Entity: {
                        IdUser: agency.IdUser,
                        Prefix: agency.Prefix,
                        TicketNumber: agencyId,
                        IdUserPrefix: agency.IdUserPrefix

                    },
                    EntityId: agency.IdUserPrefix
                })
            });
        }
        fillUserData() {
            $.post({
                contentType: 'application/json',
                url: '/Services/Configuration/UserPrefix/List',
                data: JSON.stringify({
                    Take: 1,
                    ContainsText: Cidob.Authorization.userDefinition.UserId,
                    IncludeColumns: ['IdUserPrefix', 'IdUserDisplayName', 'Prefix', 'TicketNumber']
                }),
                success: (data: any) => {
                    var entity = data.Entities[0];
                    var currentTicketNumber = isNaN(entity.TicketNumber) ? 1 : parseInt(data.Entities[0].TicketNumber) + 1;
                    this.txtId.val(entity.Prefix + "-" + currentTicketNumber.toString().padStart(7, "0"));
                    this.updateUserData(entity, currentTicketNumber++);
                }
            });
        }
        fillOnlineTemplate(data: any) {
            this.txtId.val(data.IdAgency);
            this.txtReference.val(data.Reference);
            this.txtNumber.val(data.Number);
            this.txtName.val(data.Name);
            this.txtEmail.val(data.Email);
            this.txtAge.val(data.Age);
            this.txtEntity.val(data.Entity);
            this.chkUrgent.prop('checked', data.Urgent);
            this.cmbGender.val(data.IdGender);
            this.cmbBase.val(data.IdBase);
            this.chk34.prop('checked', data.Is34);
            this.cmbShape.val(data.IdShape);
            this.cmbCover.val(data.IdCover);
            this.txtQuantity.val(data.Quantity);
            this.fillObservations(data.Observations);
        }
        fillObservations(comments) {
            if (!comments) return;
            var commentParts = comments.split("\n");
            if (commentParts.length > 0) {
                this.txtObservation2.val(commentParts[1]);
            }
            this.txtObservation1.val(commentParts[0]);
        }
        fillOnlineFeet(idOnlineTemplate: number) {
            $.post({
                contentType: 'application/json',
                data: JSON.stringify({ EntityId: idOnlineTemplate }),
                url: '/Services/Templates/OnlineFeet/Retrieve',
                success: (data: any) => {
                    this.cmbInternalMedial.val(data.Entity.IdInternalArch);
                    this.txtInternalMedial.val(data.Entity.InternalArchNumber);

                    this.cmbExternalMedial.val(data.Entity.IdExternalArch);
                    this.txtExternalMedial.val(data.Entity.ExternalArchNumber);

                    this.cmbOlive.val(data.Entity.IdOlive);
                    this.txtOlive.val(data.Entity.OliveNumber);

                    this.cmbCt.val(data.Entity.IdCt);
                    this.txtCt.val(data.Entity.CtNumber);

                    this.cmbRa.val(data.Entity.IdRa);
                    this.txtRa.val(data.Entity.RaNumber);

                    this.cmbHeel.val(data.Entity.IdHeel);
                    this.txtHeel.val(data.Entity.HeelNumber);

                    this.chkSingle.prop('checked', data.Entity.IsSingleMit);
                    this.chkDouble.prop('checked', data.Entity.IsDoubleMit);

                    this.setProgressiveValue("chkBar", data.Entity.BarValue);
                    this.setProgressiveValue("chkNeck", data.Entity.NeckValue);

                    this.txtAddaptToNumber.val(data.Entity.AddaptToNumber);
                    this.cmbDigital.val(data.Entity.IdDigital);
                    this.chkNeckBack.prop("checked", data.Entity.BehindNeck);

                }
            });
        }
        fillData(dataDict: Array<Data>, cb: any) {
            var dictLength = dataDict.length;
            var count = 0;
            dataDict.forEach(element => {
                $.post({
                    contentType: 'application/json',
                    data: element.bodyData || '',
                    url: element.url,
                    success: (data: any) => {
                        count++;
                        var cmb = $("#" + element.cmbName);
                        cmb.empty();
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
                        if (count == dictLength && cb != null) {
                            cb.apply();
                        }
                    }
                });
            });
        }
        getConditionalData(idBase: number): Array<Data> {

            let returnValue: Array<Data> = [];
            returnValue.push(new Data("cmbInternalMedial", "/Services/Relationship/BaseArch/List", '{Sort: [\"Order\"], Take: 100, Criteria:  [[\"IdBase\"],\"=\",' + idBase + '], "IncludeColumns": [\"IdArchDescription\"]}', "IdArch", "IdArchDescription", true));
            returnValue.push(new Data("cmbExternalMedial", "/Services/Relationship/BaseTransversalArch/List", '{Sort: [\"Order\"], Take: 100, Criteria:  [[\"IdBase\"],\"=\",' + idBase + '], "IncludeColumns": [\"IdTransversalArchDescription\"]}', "IdTransversalArch", "IdTransversalArchDescription", true));
            returnValue.push(new Data("cmbShape", "/Services/Relationship/BaseShape/List", '{Sort: [\"Order\"], Take: 100, Criteria:  [[\"IdBase\"],\"=\",' + idBase + '], "IncludeColumns": [\"IdShapeDescription\"]}', "IdShape", "IdShapeDescription", true));
            returnValue.push(new Data("cmbCover", "/Services/Relationship/BaseCover/List", '{Sort: [\"Order\"], Take: 100, Criteria:  [[\"IdBase\"],\"=\",' + idBase + '], "IncludeColumns": [\"IdCoverDescription\"]}', "IdCover", "IdCoverDescription", true));
            return returnValue;
        }
        getDictData(): Array<Data> {
            let returnValue: Array<Data> = [];
            returnValue.push(new Data("cmbGender", "/Services/MasterData/Gender/List", "{}", "IdGender", "Description", false));

            returnValue.push(new Data("cmbBase", "/Services/MasterData/Base/List", '{Sort: [\"Order\"]}', "IdBase", "Description", true));
            returnValue.push(new Data("cmbCt", "/Services/MasterData/CT/List", '{Sort: [\"Order\"]}', "IdCt", "Description", true));
            returnValue.push(new Data("cmbRa", "/Services/MasterData/RA/List", '{Sort: [\"Order\"]}', "IdRa", "Description", true));
            returnValue.push(new Data("cmbHeel", "/Services/MasterData/Heel/List", '{Sort: [\"Order\"]}', "IdHeel", "Description", true));
            returnValue.push(new Data("cmbDigital", "/Services/MasterData/Digital/List", '{Sort: [\"Order\"]}', "IdDigital", "Description", true));
            returnValue.push(new Data("cmbOlive", "/Services/MasterData/Olive/List", '{Sort: [\"Order\"]}', "IdOlive", "Description", true));
            return returnValue;
        }

        hasValue(ctrl: any, minimumValueLength?: number): boolean {
            var minLength = minimumValueLength == undefined ? 0 : minimumValueLength;
            var content = ctrl.val();
            var returnValue = content != null && content !== '' && ctrl.valid();
            if (returnValue) {
                returnValue = returnValue && content.length >= minLength;
            }
            ctrl.addClass(returnValue ? 'valid' : 'error');
            return returnValue;
        }

        isValid(): boolean {
            var returnValue = false;
            var isNameValid = this.hasValue(this.txtName);
            var isAgeValid = this.hasValue(this.txtAge);
            var isGenderValid = this.hasValue(this.cmbGender);
            var isBaseValid = this.hasValue(this.cmbBase);
            var isShapeValid = this.hasValue(this.cmbShape);
            var isCoverValid = this.hasValue(this.cmbCover);

            returnValue =
                isNameValid &&
                isAgeValid &&
                isGenderValid &&
                isBaseValid &&
                isShapeValid &&
                isCoverValid;
            console.log(returnValue);
            return returnValue;
        }
        saveFeet(data: any, callback: any, form: any) {
            var onlineFeet = new OnlineFeet(
                parseInt(this.cmbInternalMedial.val()),
                parseInt(this.cmbExternalMedial.val()),
                parseInt(this.cmbOlive.val()),
                parseInt(this.cmbCt.val()),
                parseInt(this.cmbRa.val()),
                parseInt(this.cmbHeel.val()),
                this.chkSingle.prop('checked'),
                this.chkDouble.prop('checked'),
                parseInt(this.txtInternalMedial.val()),
                parseInt(this.txtExternalMedial.val()),
                parseInt(this.txtOlive.val()),
                parseInt(this.txtCt.val()),
                parseInt(this.txtRa.val()),
                parseInt(this.txtHeel.val()),
                this.getProgressiveValue("chkBar"),
                this.getProgressiveValue("chkNeck"),
                this.chkNeckBack.prop("checked"),
                parseInt(this.cmbDigital.val()),
                parseInt(this.txtAddaptToNumber.val()),
                data.EntityId
            );
            $.post({
                url: !this.isEditMode() ? '/Services/Templates/OnlineFeet/Create' : '/Services/Templates/OnlineFeet/Update',
                contentType: 'application/json',
                data: JSON.stringify({ Entity: onlineFeet, EntityId: this.entity.IdOnlineTemplate }),
                success: (data: any) => {
                    callback.apply(data);
                }
            });
        }
        setProgressiveValue(baseCtrlName: string, ctrlValue: any) {
            for (var i = 1; i <= 5; i++) {
                var ctrlName = "#" + baseCtrlName + i;
                var ctrl = $(ctrlName);
                ctrl.prop("checked", ctrlValue.includes(i));
            }
        }
        getProgressiveValue(baseCtrlName: string): string {
            var returnValue = "";
            for (var i = 1; i <= 5; i++) {
                var ctrlName = "#" + baseCtrlName + i;
                var ctrl = $(ctrlName);
                if (ctrl.prop("checked")) {
                    returnValue += i;
                }
            }
            return returnValue;
        }
        save(callback: any) {
            var self = this;
            if (self.isValid()) {
                var onlineTemplate = new OnlineTemplate(
                    this.txtReference.val(),
                    this.txtId.val(),
                    parseInt(this.txtNumber.val()),
                    this.txtName.val(),
                    this.txtEmail.val(),
                    this.txtAge.val(),
                    this.txtEntity.val(),
                    parseInt(this.cmbGender.val()),
                    parseInt(this.cmbBase.val()),
                    parseInt(this.cmbShape.val()),
                    parseInt(this.cmbCover.val()),
                    this.txtObservation1.val() + "\n" + this.txtObservation2.val(),
                    parseInt(this.txtQuantity.val()),
                    this.chk34.prop("checked"),
                    this.chkUrgent.prop("checked")
                );
                $.post({
                    url: !this.isEditMode() ? '/Services/Templates/OnlineTemplate/Create' : '/Services/Templates/OnlineTemplate/Update',
                    contentType: 'application/json',
                    data: JSON.stringify({ Entity: onlineTemplate, EntityId: this.entity.IdOnlineTemplate }),
                    success: (data: any) => {
                        self.saveFeet(data, callback, self);
                        self.element.dialog().dialog('close');
                    }
                });
            } else {
                Q.notifyError(Q.text("Validation.InvalidFormMessage"));
            }
        }
        openTab(evt, footSide, textSideVisible) {
            // Declare all variables
            var i, tabcontent, tablinks;

            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
                if (textSideVisible.includes(tablinks[i].outerText)) {
                    tablinks[i].style.display = "block";
                } else {
                    tablinks[i].style.display = "none";
                }
            }
            document.getElementById(footSide).style.display = "block";

        }
    }
}