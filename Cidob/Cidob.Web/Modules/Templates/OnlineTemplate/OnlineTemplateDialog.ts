﻿
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
        protected txtAge;
        protected txtEntity;
        protected chkUrgent;

        dialogOpen() {
            super.dialogOpen();
            var metadata = this.getDictData();
            this.fillData(metadata);
            this.setUi();
            var btnClear = this.element.find("#btnClear")[0];
            $(btnClear).click(() => {
                this.clear();
            });
            
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
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
            this.txtAge = $("#txtAge").first();
            this.txtEntity = $("#txtEntity").first();
            this.chkUrgent = $("#chkUrgent").first();
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
            this.txtAge.val("");
            this.txtEntity.val("");
            this.chkUrgent.prop("checked",false);
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
            returnValue.push(new Data("cmbGender", "/Services/MasterData/Gender/List", "IdGender", "Description"));
            returnValue.push(new Data("cmbBase", "/Services/MasterData/Base/List", "IdBase", "PrintName"));
            returnValue.push(new Data("cmbShape","/Services/MasterData/Shape/List","IdShape","PrintName"));
            returnValue.push(new Data("cmbCover","/Services/MasterData/Cover/List","IdCover","PrintName"));
            returnValue.push(new Data("cmbCt", "/Services/MasterData/CT/List","IdCt","PrintName"));
            returnValue.push(new Data("cmbRa", "/Services/MasterData/RA/List", "IdRa", "PrintName"));
            returnValue.push(new Data("cmbHeel", "/Services/MasterData/Heel/List", "IdHeel", "PrintName"));
            returnValue.push(new Data("cmbDigital", "/Services/MasterData/Digital/List", "IdDigital", "PrintName"));
            returnValue.push(new Data("cmbOlive", "/Services/MasterData/Olive/List", "IdOlive", "PrintName"));
            return returnValue;
        }
    }
}