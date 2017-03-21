var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            return LanguageDialog;
        }(Serenity.EntityDialog));
        LanguageDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageDialog);
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            return LanguageGrid;
        }(Serenity.EntityGrid));
        LanguageGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageGrid);
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            return RoleDialog;
        }(Serenity.EntityDialog));
        RoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleDialog);
        Administration.RoleDialog = RoleDialog;
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            return RoleGrid;
        }(Serenity.EntityGrid));
        RoleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleGrid);
        Administration.RoleGrid = RoleGrid;
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        RolePermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RolePermissionDialog);
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            return TranslationGrid;
        }(Serenity.EntityGrid));
        TranslationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TranslationGrid);
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Cidob.Authorization || (Cidob.Authorization = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            return UserDialog;
        }(Serenity.EntityDialog));
        UserDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserDialog);
        Administration.UserDialog = UserDialog;
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            return UserGrid;
        }(Serenity.EntityGrid));
        UserGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], UserGrid);
        Administration.UserGrid = UserGrid;
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        PermissionCheckEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
        ], PermissionCheckEditor);
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        UserPermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserPermissionDialog);
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        RoleCheckEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], RoleCheckEditor);
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        UserRoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserRoleDialog);
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Cidob.BasicProgressDialog = BasicProgressDialog;
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Cidob.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Cidob.DialogUtils || (Cidob.DialogUtils = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            return EnumSelectFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "enumKey", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "allowClear", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
        EnumSelectFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], EnumSelectFormatter);
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            return GridEditorBase;
        }(Serenity.EntityGrid));
        GridEditorBase = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], GridEditorBase);
        Common.GridEditorBase = GridEditorBase;
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        GridEditorDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GridEditorDialog);
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Cidob.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Cidob.LanguageList || (Cidob.LanguageList = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super.apply(this, arguments) || this;
            }
            return LanguageForm;
        }(Serenity.PrefixedContext));
        LanguageForm.formKey = 'Administration.Language';
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super.apply(this, arguments) || this;
            }
            return RoleForm;
        }(Serenity.PrefixedContext));
        RoleForm.formKey = 'Administration.Role';
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super.apply(this, arguments) || this;
            }
            return UserForm;
        }(Serenity.PrefixedContext));
        UserForm.formKey = 'Administration.User';
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'UserImage', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Cidob.Administration || (Cidob.Administration = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Default;
    (function (Default) {
        var BaseGroupForm = (function (_super) {
            __extends(BaseGroupForm, _super);
            function BaseGroupForm() {
                return _super.apply(this, arguments) || this;
            }
            return BaseGroupForm;
        }(Serenity.PrefixedContext));
        BaseGroupForm.formKey = 'Default.BaseGroup';
        Default.BaseGroupForm = BaseGroupForm;
        [['IdGroup', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(BaseGroupForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Default = Cidob.Default || (Cidob.Default = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Default;
    (function (Default) {
        var BaseGroupRow;
        (function (BaseGroupRow) {
            BaseGroupRow.idProperty = 'IdBase';
            BaseGroupRow.localTextPrefix = 'Default.BaseGroup';
            var Fields;
            (function (Fields) {
            })(Fields = BaseGroupRow.Fields || (BaseGroupRow.Fields = {}));
            ['IdBase', 'IdGroup', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdGroupDescription', 'IdGroupEnabled'].forEach(function (x) { return Fields[x] = x; });
        })(BaseGroupRow = Default.BaseGroupRow || (Default.BaseGroupRow = {}));
    })(Default = Cidob.Default || (Cidob.Default = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Default;
    (function (Default) {
        var BaseGroupService;
        (function (BaseGroupService) {
            BaseGroupService.baseUrl = 'Default/BaseGroup';
            var Methods;
            (function (Methods) {
            })(Methods = BaseGroupService.Methods || (BaseGroupService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BaseGroupService[x] = function (r, s, o) { return Q.serviceRequest(BaseGroupService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BaseGroupService.baseUrl + '/' + x;
            });
        })(BaseGroupService = Default.BaseGroupService || (Default.BaseGroupService = {}));
    })(Default = Cidob.Default || (Cidob.Default = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Default;
    (function (Default) {
        var BaseTransversalArchForm = (function (_super) {
            __extends(BaseTransversalArchForm, _super);
            function BaseTransversalArchForm() {
                return _super.apply(this, arguments) || this;
            }
            return BaseTransversalArchForm;
        }(Serenity.PrefixedContext));
        BaseTransversalArchForm.formKey = 'Default.BaseTransversalArch';
        Default.BaseTransversalArchForm = BaseTransversalArchForm;
        [['IdTransversalArch', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(BaseTransversalArchForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Default = Cidob.Default || (Cidob.Default = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Default;
    (function (Default) {
        var BaseTransversalArchRow;
        (function (BaseTransversalArchRow) {
            BaseTransversalArchRow.idProperty = 'IdBase';
            BaseTransversalArchRow.localTextPrefix = 'Default.BaseTransversalArch';
            var Fields;
            (function (Fields) {
            })(Fields = BaseTransversalArchRow.Fields || (BaseTransversalArchRow.Fields = {}));
            ['IdBase', 'IdTransversalArch', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdTransversalArchIdProduct', 'IdTransversalArchOrder', 'IdTransversalArchDescription', 'IdTransversalArchPrintName'].forEach(function (x) { return Fields[x] = x; });
        })(BaseTransversalArchRow = Default.BaseTransversalArchRow || (Default.BaseTransversalArchRow = {}));
    })(Default = Cidob.Default || (Cidob.Default = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Default;
    (function (Default) {
        var BaseTransversalArchService;
        (function (BaseTransversalArchService) {
            BaseTransversalArchService.baseUrl = 'Default/BaseTransversalArch';
            var Methods;
            (function (Methods) {
            })(Methods = BaseTransversalArchService.Methods || (BaseTransversalArchService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BaseTransversalArchService[x] = function (r, s, o) { return Q.serviceRequest(BaseTransversalArchService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BaseTransversalArchService.baseUrl + '/' + x;
            });
        })(BaseTransversalArchService = Default.BaseTransversalArchService || (Default.BaseTransversalArchService = {}));
    })(Default = Cidob.Default || (Cidob.Default = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ArchForm = (function (_super) {
            __extends(ArchForm, _super);
            function ArchForm() {
                return _super.apply(this, arguments) || this;
            }
            return ArchForm;
        }(Serenity.PrefixedContext));
        ArchForm.formKey = 'MasterData.Arch';
        MasterData.ArchForm = ArchForm;
        [['IdProduct', function () { return Serenity.IntegerEditor; }], ['Order', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['PrintDescription', function () { return Serenity.StringEditor; }], ['IsValenti', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(ArchForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ArchRow;
        (function (ArchRow) {
            ArchRow.idProperty = 'Id';
            ArchRow.nameProperty = 'Description';
            ArchRow.localTextPrefix = 'MasterData.Arch';
            var Fields;
            (function (Fields) {
            })(Fields = ArchRow.Fields || (ArchRow.Fields = {}));
            ['Id', 'IdProduct', 'Order', 'Description', 'PrintDescription', 'IsValenti', 'IdProductDescription', 'IdProductCode'].forEach(function (x) { return Fields[x] = x; });
        })(ArchRow = MasterData.ArchRow || (MasterData.ArchRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ArchService;
        (function (ArchService) {
            ArchService.baseUrl = 'MasterData/Arch';
            var Methods;
            (function (Methods) {
            })(Methods = ArchService.Methods || (ArchService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ArchService[x] = function (r, s, o) { return Q.serviceRequest(ArchService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ArchService.baseUrl + '/' + x;
            });
        })(ArchService = MasterData.ArchService || (MasterData.ArchService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BaseForm = (function (_super) {
            __extends(BaseForm, _super);
            function BaseForm() {
                return _super.apply(this, arguments) || this;
            }
            return BaseForm;
        }(Serenity.PrefixedContext));
        BaseForm.formKey = 'MasterData.Base';
        MasterData.BaseForm = BaseForm;
        [['IdProduct', function () { return Serenity.IntegerEditor; }], ['Order', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['PrintName', function () { return Serenity.StringEditor; }], ['From', function () { return Serenity.IntegerEditor; }], ['To', function () { return Serenity.IntegerEditor; }], ['Escatola', function () { return Serenity.BooleanEditor; }], ['NeedArch', function () { return Serenity.BooleanEditor; }], ['NeedTransversalArch', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(BaseForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BaseGroupForm = (function (_super) {
            __extends(BaseGroupForm, _super);
            function BaseGroupForm() {
                return _super.apply(this, arguments) || this;
            }
            return BaseGroupForm;
        }(Serenity.PrefixedContext));
        BaseGroupForm.formKey = 'MasterData.BaseGroup';
        MasterData.BaseGroupForm = BaseGroupForm;
        [['IdGroup', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(BaseGroupForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BaseGroupRow;
        (function (BaseGroupRow) {
            BaseGroupRow.idProperty = 'IdBase';
            BaseGroupRow.localTextPrefix = 'MasterData.BaseGroup';
            var Fields;
            (function (Fields) {
            })(Fields = BaseGroupRow.Fields || (BaseGroupRow.Fields = {}));
            ['IdBase', 'IdGroup', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdGroupDescription', 'IdGroupEnabled'].forEach(function (x) { return Fields[x] = x; });
        })(BaseGroupRow = MasterData.BaseGroupRow || (MasterData.BaseGroupRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BaseGroupService;
        (function (BaseGroupService) {
            BaseGroupService.baseUrl = 'MasterData/BaseGroup';
            var Methods;
            (function (Methods) {
            })(Methods = BaseGroupService.Methods || (BaseGroupService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BaseGroupService[x] = function (r, s, o) { return Q.serviceRequest(BaseGroupService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BaseGroupService.baseUrl + '/' + x;
            });
        })(BaseGroupService = MasterData.BaseGroupService || (MasterData.BaseGroupService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BaseRow;
        (function (BaseRow) {
            BaseRow.idProperty = 'IdBase';
            BaseRow.nameProperty = 'Description';
            BaseRow.localTextPrefix = 'MasterData.Base';
            var Fields;
            (function (Fields) {
            })(Fields = BaseRow.Fields || (BaseRow.Fields = {}));
            ['IdBase', 'IdProduct', 'Order', 'Description', 'PrintName', 'From', 'To', 'Escatola', 'NeedArch', 'NeedTransversalArch', 'IdProductDescription', 'IdProductCode'].forEach(function (x) { return Fields[x] = x; });
        })(BaseRow = MasterData.BaseRow || (MasterData.BaseRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BaseService;
        (function (BaseService) {
            BaseService.baseUrl = 'MasterData/Base';
            var Methods;
            (function (Methods) {
            })(Methods = BaseService.Methods || (BaseService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BaseService[x] = function (r, s, o) { return Q.serviceRequest(BaseService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BaseService.baseUrl + '/' + x;
            });
        })(BaseService = MasterData.BaseService || (MasterData.BaseService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BaseTransversalArchForm = (function (_super) {
            __extends(BaseTransversalArchForm, _super);
            function BaseTransversalArchForm() {
                return _super.apply(this, arguments) || this;
            }
            return BaseTransversalArchForm;
        }(Serenity.PrefixedContext));
        BaseTransversalArchForm.formKey = 'MasterData.BaseTransversalArch';
        MasterData.BaseTransversalArchForm = BaseTransversalArchForm;
        [['IdTransversalArch', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(BaseTransversalArchForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BaseTransversalArchRow;
        (function (BaseTransversalArchRow) {
            BaseTransversalArchRow.idProperty = 'IdBase';
            BaseTransversalArchRow.localTextPrefix = 'MasterData.BaseTransversalArch';
            var Fields;
            (function (Fields) {
            })(Fields = BaseTransversalArchRow.Fields || (BaseTransversalArchRow.Fields = {}));
            ['IdBase', 'IdTransversalArch', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdTransversalArchIdProduct', 'IdTransversalArchOrder', 'IdTransversalArchDescription', 'IdTransversalArchPrintName'].forEach(function (x) { return Fields[x] = x; });
        })(BaseTransversalArchRow = MasterData.BaseTransversalArchRow || (MasterData.BaseTransversalArchRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BaseTransversalArchService;
        (function (BaseTransversalArchService) {
            BaseTransversalArchService.baseUrl = 'MasterData/BaseTransversalArch';
            var Methods;
            (function (Methods) {
            })(Methods = BaseTransversalArchService.Methods || (BaseTransversalArchService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BaseTransversalArchService[x] = function (r, s, o) { return Q.serviceRequest(BaseTransversalArchService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BaseTransversalArchService.baseUrl + '/' + x;
            });
        })(BaseTransversalArchService = MasterData.BaseTransversalArchService || (MasterData.BaseTransversalArchService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BrandForm = (function (_super) {
            __extends(BrandForm, _super);
            function BrandForm() {
                return _super.apply(this, arguments) || this;
            }
            return BrandForm;
        }(Serenity.PrefixedContext));
        BrandForm.formKey = 'MasterData.Brand';
        MasterData.BrandForm = BrandForm;
        [['Description', function () { return Serenity.StringEditor; }], ['Enabled', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(BrandForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BrandRow;
        (function (BrandRow) {
            BrandRow.idProperty = 'IdBrands';
            BrandRow.nameProperty = 'Description';
            BrandRow.localTextPrefix = 'MasterData.Brand';
            var Fields;
            (function (Fields) {
            })(Fields = BrandRow.Fields || (BrandRow.Fields = {}));
            ['IdBrands', 'Description', 'Enabled'].forEach(function (x) { return Fields[x] = x; });
        })(BrandRow = MasterData.BrandRow || (MasterData.BrandRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BrandService;
        (function (BrandService) {
            BrandService.baseUrl = 'MasterData/Brand';
            var Methods;
            (function (Methods) {
            })(Methods = BrandService.Methods || (BrandService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BrandService[x] = function (r, s, o) { return Q.serviceRequest(BrandService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BrandService.baseUrl + '/' + x;
            });
        })(BrandService = MasterData.BrandService || (MasterData.BrandService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CoverForm = (function (_super) {
            __extends(CoverForm, _super);
            function CoverForm() {
                return _super.apply(this, arguments) || this;
            }
            return CoverForm;
        }(Serenity.PrefixedContext));
        CoverForm.formKey = 'MasterData.Cover';
        MasterData.CoverForm = CoverForm;
        [['IdProduct', function () { return Serenity.IntegerEditor; }], ['Order', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['PrintName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CoverForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CoverRow;
        (function (CoverRow) {
            CoverRow.idProperty = 'IdCover';
            CoverRow.nameProperty = 'Description';
            CoverRow.localTextPrefix = 'MasterData.Cover';
            var Fields;
            (function (Fields) {
            })(Fields = CoverRow.Fields || (CoverRow.Fields = {}));
            ['IdCover', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(function (x) { return Fields[x] = x; });
        })(CoverRow = MasterData.CoverRow || (MasterData.CoverRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CoverService;
        (function (CoverService) {
            CoverService.baseUrl = 'MasterData/Cover';
            var Methods;
            (function (Methods) {
            })(Methods = CoverService.Methods || (CoverService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CoverService[x] = function (r, s, o) { return Q.serviceRequest(CoverService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CoverService.baseUrl + '/' + x;
            });
        })(CoverService = MasterData.CoverService || (MasterData.CoverService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CtForm = (function (_super) {
            __extends(CtForm, _super);
            function CtForm() {
                return _super.apply(this, arguments) || this;
            }
            return CtForm;
        }(Serenity.PrefixedContext));
        CtForm.formKey = 'MasterData.Ct';
        MasterData.CtForm = CtForm;
        [['IdCt', function () { return Serenity.IntegerEditor; }], ['IdProduct', function () { return Serenity.IntegerEditor; }], ['Order', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['PrintName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CtForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CtRow;
        (function (CtRow) {
            CtRow.idProperty = 'IdCt';
            CtRow.nameProperty = 'Description';
            CtRow.localTextPrefix = 'MasterData.Ct';
            var Fields;
            (function (Fields) {
            })(Fields = CtRow.Fields || (CtRow.Fields = {}));
            ['IdCt', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(function (x) { return Fields[x] = x; });
        })(CtRow = MasterData.CtRow || (MasterData.CtRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CtService;
        (function (CtService) {
            CtService.baseUrl = 'MasterData/Ct';
            var Methods;
            (function (Methods) {
            })(Methods = CtService.Methods || (CtService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CtService[x] = function (r, s, o) { return Q.serviceRequest(CtService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CtService.baseUrl + '/' + x;
            });
        })(CtService = MasterData.CtService || (MasterData.CtService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var DigitalForm = (function (_super) {
            __extends(DigitalForm, _super);
            function DigitalForm() {
                return _super.apply(this, arguments) || this;
            }
            return DigitalForm;
        }(Serenity.PrefixedContext));
        DigitalForm.formKey = 'MasterData.Digital';
        MasterData.DigitalForm = DigitalForm;
        [['IdProduct', function () { return Serenity.IntegerEditor; }], ['Order', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['PrintName', function () { return Serenity.StringEditor; }], ['IsValenti', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(DigitalForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var DigitalRow;
        (function (DigitalRow) {
            DigitalRow.idProperty = 'IdDigital';
            DigitalRow.nameProperty = 'Description';
            DigitalRow.localTextPrefix = 'MasterData.Digital';
            var Fields;
            (function (Fields) {
            })(Fields = DigitalRow.Fields || (DigitalRow.Fields = {}));
            ['IdDigital', 'IdProduct', 'Order', 'Description', 'PrintName', 'IsValenti', 'IdProductDescription', 'IdProductCode'].forEach(function (x) { return Fields[x] = x; });
        })(DigitalRow = MasterData.DigitalRow || (MasterData.DigitalRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var DigitalService;
        (function (DigitalService) {
            DigitalService.baseUrl = 'MasterData/Digital';
            var Methods;
            (function (Methods) {
            })(Methods = DigitalService.Methods || (DigitalService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                DigitalService[x] = function (r, s, o) { return Q.serviceRequest(DigitalService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = DigitalService.baseUrl + '/' + x;
            });
        })(DigitalService = MasterData.DigitalService || (MasterData.DigitalService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GenderForm = (function (_super) {
            __extends(GenderForm, _super);
            function GenderForm() {
                return _super.apply(this, arguments) || this;
            }
            return GenderForm;
        }(Serenity.PrefixedContext));
        GenderForm.formKey = 'MasterData.Gender';
        MasterData.GenderForm = GenderForm;
        [['IdGender', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(GenderForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GenderRow;
        (function (GenderRow) {
            GenderRow.idProperty = 'IdGender';
            GenderRow.nameProperty = 'Description';
            GenderRow.localTextPrefix = 'MasterData.Gender';
            var Fields;
            (function (Fields) {
            })(Fields = GenderRow.Fields || (GenderRow.Fields = {}));
            ['IdGender', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(GenderRow = MasterData.GenderRow || (MasterData.GenderRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GenderService;
        (function (GenderService) {
            GenderService.baseUrl = 'MasterData/Gender';
            var Methods;
            (function (Methods) {
            })(Methods = GenderService.Methods || (GenderService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                GenderService[x] = function (r, s, o) { return Q.serviceRequest(GenderService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = GenderService.baseUrl + '/' + x;
            });
        })(GenderService = MasterData.GenderService || (MasterData.GenderService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GroupForm = (function (_super) {
            __extends(GroupForm, _super);
            function GroupForm() {
                return _super.apply(this, arguments) || this;
            }
            return GroupForm;
        }(Serenity.PrefixedContext));
        GroupForm.formKey = 'MasterData.Group';
        MasterData.GroupForm = GroupForm;
        [['Description', function () { return Serenity.StringEditor; }], ['Enabled', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(GroupForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GroupRow;
        (function (GroupRow) {
            GroupRow.idProperty = 'IdBrands';
            GroupRow.nameProperty = 'Description';
            GroupRow.localTextPrefix = 'MasterData.Group';
            var Fields;
            (function (Fields) {
            })(Fields = GroupRow.Fields || (GroupRow.Fields = {}));
            ['IdBrands', 'Description', 'Enabled'].forEach(function (x) { return Fields[x] = x; });
        })(GroupRow = MasterData.GroupRow || (MasterData.GroupRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GroupService;
        (function (GroupService) {
            GroupService.baseUrl = 'MasterData/Group';
            var Methods;
            (function (Methods) {
            })(Methods = GroupService.Methods || (GroupService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                GroupService[x] = function (r, s, o) { return Q.serviceRequest(GroupService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = GroupService.baseUrl + '/' + x;
            });
        })(GroupService = MasterData.GroupService || (MasterData.GroupService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var HeelForm = (function (_super) {
            __extends(HeelForm, _super);
            function HeelForm() {
                return _super.apply(this, arguments) || this;
            }
            return HeelForm;
        }(Serenity.PrefixedContext));
        HeelForm.formKey = 'MasterData.Heel';
        MasterData.HeelForm = HeelForm;
        [['IdProduct', function () { return Serenity.IntegerEditor; }], ['Order', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['PrintName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(HeelForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var HeelRow;
        (function (HeelRow) {
            HeelRow.idProperty = 'IdHeel';
            HeelRow.nameProperty = 'Description';
            HeelRow.localTextPrefix = 'MasterData.Heel';
            var Fields;
            (function (Fields) {
            })(Fields = HeelRow.Fields || (HeelRow.Fields = {}));
            ['IdHeel', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(function (x) { return Fields[x] = x; });
        })(HeelRow = MasterData.HeelRow || (MasterData.HeelRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var HeelService;
        (function (HeelService) {
            HeelService.baseUrl = 'MasterData/Heel';
            var Methods;
            (function (Methods) {
            })(Methods = HeelService.Methods || (HeelService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                HeelService[x] = function (r, s, o) { return Q.serviceRequest(HeelService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = HeelService.baseUrl + '/' + x;
            });
        })(HeelService = MasterData.HeelService || (MasterData.HeelService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var OliveForm = (function (_super) {
            __extends(OliveForm, _super);
            function OliveForm() {
                return _super.apply(this, arguments) || this;
            }
            return OliveForm;
        }(Serenity.PrefixedContext));
        OliveForm.formKey = 'MasterData.Olive';
        MasterData.OliveForm = OliveForm;
        [['IdProduct', function () { return Serenity.IntegerEditor; }], ['Order', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['PrintName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(OliveForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var OliveRow;
        (function (OliveRow) {
            OliveRow.idProperty = 'IdOlive';
            OliveRow.nameProperty = 'Description';
            OliveRow.localTextPrefix = 'MasterData.Olive';
            var Fields;
            (function (Fields) {
            })(Fields = OliveRow.Fields || (OliveRow.Fields = {}));
            ['IdOlive', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(function (x) { return Fields[x] = x; });
        })(OliveRow = MasterData.OliveRow || (MasterData.OliveRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var OliveService;
        (function (OliveService) {
            OliveService.baseUrl = 'MasterData/Olive';
            var Methods;
            (function (Methods) {
            })(Methods = OliveService.Methods || (OliveService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OliveService[x] = function (r, s, o) { return Q.serviceRequest(OliveService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OliveService.baseUrl + '/' + x;
            });
        })(OliveService = MasterData.OliveService || (MasterData.OliveService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ProductForm = (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm() {
                return _super.apply(this, arguments) || this;
            }
            return ProductForm;
        }(Serenity.PrefixedContext));
        ProductForm.formKey = 'MasterData.Product';
        MasterData.ProductForm = ProductForm;
        [['Description', function () { return Serenity.StringEditor; }], ['Code', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ProductForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'IdProduct';
            ProductRow.nameProperty = 'Description';
            ProductRow.localTextPrefix = 'MasterData.Product';
            var Fields;
            (function (Fields) {
            })(Fields = ProductRow.Fields || (ProductRow.Fields = {}));
            ['IdProduct', 'Description', 'Code'].forEach(function (x) { return Fields[x] = x; });
        })(ProductRow = MasterData.ProductRow || (MasterData.ProductRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'MasterData/Product';
            var Methods;
            (function (Methods) {
            })(Methods = ProductService.Methods || (ProductService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductService[x] = function (r, s, o) { return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductService.baseUrl + '/' + x;
            });
        })(ProductService = MasterData.ProductService || (MasterData.ProductService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var RaForm = (function (_super) {
            __extends(RaForm, _super);
            function RaForm() {
                return _super.apply(this, arguments) || this;
            }
            return RaForm;
        }(Serenity.PrefixedContext));
        RaForm.formKey = 'MasterData.Ra';
        MasterData.RaForm = RaForm;
        [['IdRa', function () { return Serenity.IntegerEditor; }], ['IdProduct', function () { return Serenity.IntegerEditor; }], ['Order', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['PrintName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RaForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var RaRow;
        (function (RaRow) {
            RaRow.idProperty = 'IdRa';
            RaRow.nameProperty = 'Description';
            RaRow.localTextPrefix = 'MasterData.Ra';
            var Fields;
            (function (Fields) {
            })(Fields = RaRow.Fields || (RaRow.Fields = {}));
            ['IdRa', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(function (x) { return Fields[x] = x; });
        })(RaRow = MasterData.RaRow || (MasterData.RaRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var RaService;
        (function (RaService) {
            RaService.baseUrl = 'MasterData/Ra';
            var Methods;
            (function (Methods) {
            })(Methods = RaService.Methods || (RaService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RaService[x] = function (r, s, o) { return Q.serviceRequest(RaService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RaService.baseUrl + '/' + x;
            });
        })(RaService = MasterData.RaService || (MasterData.RaService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ShapeForm = (function (_super) {
            __extends(ShapeForm, _super);
            function ShapeForm() {
                return _super.apply(this, arguments) || this;
            }
            return ShapeForm;
        }(Serenity.PrefixedContext));
        ShapeForm.formKey = 'MasterData.Shape';
        MasterData.ShapeForm = ShapeForm;
        [['IdProduct', function () { return Serenity.IntegerEditor; }], ['Order', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['PrintName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ShapeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ShapeRow;
        (function (ShapeRow) {
            ShapeRow.idProperty = 'IdShape';
            ShapeRow.nameProperty = 'Description';
            ShapeRow.localTextPrefix = 'MasterData.Shape';
            var Fields;
            (function (Fields) {
            })(Fields = ShapeRow.Fields || (ShapeRow.Fields = {}));
            ['IdShape', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(function (x) { return Fields[x] = x; });
        })(ShapeRow = MasterData.ShapeRow || (MasterData.ShapeRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ShapeService;
        (function (ShapeService) {
            ShapeService.baseUrl = 'MasterData/Shape';
            var Methods;
            (function (Methods) {
            })(Methods = ShapeService.Methods || (ShapeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ShapeService[x] = function (r, s, o) { return Q.serviceRequest(ShapeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ShapeService.baseUrl + '/' + x;
            });
        })(ShapeService = MasterData.ShapeService || (MasterData.ShapeService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var TemplateForm = (function (_super) {
            __extends(TemplateForm, _super);
            function TemplateForm() {
                return _super.apply(this, arguments) || this;
            }
            return TemplateForm;
        }(Serenity.PrefixedContext));
        TemplateForm.formKey = 'MasterData.Template';
        MasterData.TemplateForm = TemplateForm;
        [['IdProduct', function () { return Serenity.IntegerEditor; }], ['Order', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['PrintName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TemplateForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var TemplateRow;
        (function (TemplateRow) {
            TemplateRow.idProperty = 'IdTemplate';
            TemplateRow.nameProperty = 'Description';
            TemplateRow.localTextPrefix = 'MasterData.Template';
            var Fields;
            (function (Fields) {
            })(Fields = TemplateRow.Fields || (TemplateRow.Fields = {}));
            ['IdTemplate', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(function (x) { return Fields[x] = x; });
        })(TemplateRow = MasterData.TemplateRow || (MasterData.TemplateRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var TemplateService;
        (function (TemplateService) {
            TemplateService.baseUrl = 'MasterData/Template';
            var Methods;
            (function (Methods) {
            })(Methods = TemplateService.Methods || (TemplateService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TemplateService[x] = function (r, s, o) { return Q.serviceRequest(TemplateService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TemplateService.baseUrl + '/' + x;
            });
        })(TemplateService = MasterData.TemplateService || (MasterData.TemplateService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var TemplateTypeForm = (function (_super) {
            __extends(TemplateTypeForm, _super);
            function TemplateTypeForm() {
                return _super.apply(this, arguments) || this;
            }
            return TemplateTypeForm;
        }(Serenity.PrefixedContext));
        TemplateTypeForm.formKey = 'MasterData.TemplateType';
        MasterData.TemplateTypeForm = TemplateTypeForm;
        [['IdProduct', function () { return Serenity.IntegerEditor; }], ['Order', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['PrintName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TemplateTypeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var TemplateTypeRow;
        (function (TemplateTypeRow) {
            TemplateTypeRow.idProperty = 'IdTemplateType';
            TemplateTypeRow.nameProperty = 'Description';
            TemplateTypeRow.localTextPrefix = 'MasterData.TemplateType';
            var Fields;
            (function (Fields) {
            })(Fields = TemplateTypeRow.Fields || (TemplateTypeRow.Fields = {}));
            ['IdTemplateType', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(function (x) { return Fields[x] = x; });
        })(TemplateTypeRow = MasterData.TemplateTypeRow || (MasterData.TemplateTypeRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var TemplateTypeService;
        (function (TemplateTypeService) {
            TemplateTypeService.baseUrl = 'MasterData/TemplateType';
            var Methods;
            (function (Methods) {
            })(Methods = TemplateTypeService.Methods || (TemplateTypeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TemplateTypeService[x] = function (r, s, o) { return Q.serviceRequest(TemplateTypeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TemplateTypeService.baseUrl + '/' + x;
            });
        })(TemplateTypeService = MasterData.TemplateTypeService || (MasterData.TemplateTypeService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var TransversalArchForm = (function (_super) {
            __extends(TransversalArchForm, _super);
            function TransversalArchForm() {
                return _super.apply(this, arguments) || this;
            }
            return TransversalArchForm;
        }(Serenity.PrefixedContext));
        TransversalArchForm.formKey = 'MasterData.TransversalArch';
        MasterData.TransversalArchForm = TransversalArchForm;
        [['IdProduct', function () { return Serenity.IntegerEditor; }], ['Order', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['PrintName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TransversalArchForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var TransversalArchRow;
        (function (TransversalArchRow) {
            TransversalArchRow.idProperty = 'IdTransversalArch';
            TransversalArchRow.nameProperty = 'Description';
            TransversalArchRow.localTextPrefix = 'MasterData.TransversalArch';
            var Fields;
            (function (Fields) {
            })(Fields = TransversalArchRow.Fields || (TransversalArchRow.Fields = {}));
            ['IdTransversalArch', 'IdProduct', 'Order', 'Description', 'PrintName', 'IdProductDescription', 'IdProductCode'].forEach(function (x) { return Fields[x] = x; });
        })(TransversalArchRow = MasterData.TransversalArchRow || (MasterData.TransversalArchRow = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var TransversalArchService;
        (function (TransversalArchService) {
            TransversalArchService.baseUrl = 'MasterData/TransversalArch';
            var Methods;
            (function (Methods) {
            })(Methods = TransversalArchService.Methods || (TransversalArchService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TransversalArchService[x] = function (r, s, o) { return Q.serviceRequest(TransversalArchService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TransversalArchService.baseUrl + '/' + x;
            });
        })(TransversalArchService = MasterData.TransversalArchService || (MasterData.TransversalArchService = {}));
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super.apply(this, arguments) || this;
            }
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        ChangePasswordForm.formKey = 'Membership.ChangePassword';
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Cidob.Membership || (Cidob.Membership = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super.apply(this, arguments) || this;
            }
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Cidob.Membership || (Cidob.Membership = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super.apply(this, arguments) || this;
            }
            return LoginForm;
        }(Serenity.PrefixedContext));
        LoginForm.formKey = 'Membership.Login';
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Cidob.Membership || (Cidob.Membership = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super.apply(this, arguments) || this;
            }
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        ResetPasswordForm.formKey = 'Membership.ResetPassword';
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Cidob.Membership || (Cidob.Membership = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super.apply(this, arguments) || this;
            }
            return SignUpForm;
        }(Serenity.PrefixedContext));
        SignUpForm.formKey = 'Membership.SignUp';
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Cidob.Membership || (Cidob.Membership = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseArchForm = (function (_super) {
            __extends(BaseArchForm, _super);
            function BaseArchForm() {
                return _super.apply(this, arguments) || this;
            }
            return BaseArchForm;
        }(Serenity.PrefixedContext));
        BaseArchForm.formKey = 'Relationship.BaseArch';
        Relationship.BaseArchForm = BaseArchForm;
        [['IdArch', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(BaseArchForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseArchRow;
        (function (BaseArchRow) {
            BaseArchRow.idProperty = 'IdBase';
            BaseArchRow.localTextPrefix = 'Relationship.BaseArch';
            var Fields;
            (function (Fields) {
            })(Fields = BaseArchRow.Fields || (BaseArchRow.Fields = {}));
            ['IdBase', 'IdArch', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdArchIdProduct', 'IdArchOrder', 'IdArchDescription', 'IdArchPrintDescription'].forEach(function (x) { return Fields[x] = x; });
        })(BaseArchRow = Relationship.BaseArchRow || (Relationship.BaseArchRow = {}));
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseArchService;
        (function (BaseArchService) {
            BaseArchService.baseUrl = 'Relationship/BaseArch';
            var Methods;
            (function (Methods) {
            })(Methods = BaseArchService.Methods || (BaseArchService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BaseArchService[x] = function (r, s, o) { return Q.serviceRequest(BaseArchService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BaseArchService.baseUrl + '/' + x;
            });
        })(BaseArchService = Relationship.BaseArchService || (Relationship.BaseArchService = {}));
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseCoverForm = (function (_super) {
            __extends(BaseCoverForm, _super);
            function BaseCoverForm() {
                return _super.apply(this, arguments) || this;
            }
            return BaseCoverForm;
        }(Serenity.PrefixedContext));
        BaseCoverForm.formKey = 'Relationship.BaseCover';
        Relationship.BaseCoverForm = BaseCoverForm;
        [['IdCover', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(BaseCoverForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseCoverRow;
        (function (BaseCoverRow) {
            BaseCoverRow.idProperty = 'IdBase';
            BaseCoverRow.localTextPrefix = 'Relationship.BaseCover';
            var Fields;
            (function (Fields) {
            })(Fields = BaseCoverRow.Fields || (BaseCoverRow.Fields = {}));
            ['IdBase', 'IdCover', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdCoverIdProduct', 'IdCoverOrder', 'IdCoverDescription', 'IdCoverPrintName'].forEach(function (x) { return Fields[x] = x; });
        })(BaseCoverRow = Relationship.BaseCoverRow || (Relationship.BaseCoverRow = {}));
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseCoverService;
        (function (BaseCoverService) {
            BaseCoverService.baseUrl = 'Relationship/BaseCover';
            var Methods;
            (function (Methods) {
            })(Methods = BaseCoverService.Methods || (BaseCoverService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BaseCoverService[x] = function (r, s, o) { return Q.serviceRequest(BaseCoverService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BaseCoverService.baseUrl + '/' + x;
            });
        })(BaseCoverService = Relationship.BaseCoverService || (Relationship.BaseCoverService = {}));
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseGroupForm = (function (_super) {
            __extends(BaseGroupForm, _super);
            function BaseGroupForm() {
                return _super.apply(this, arguments) || this;
            }
            return BaseGroupForm;
        }(Serenity.PrefixedContext));
        BaseGroupForm.formKey = 'Relationship.BaseGroup';
        Relationship.BaseGroupForm = BaseGroupForm;
        [['IdGroup', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(BaseGroupForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseGroupRow;
        (function (BaseGroupRow) {
            BaseGroupRow.idProperty = 'IdBase';
            BaseGroupRow.localTextPrefix = 'Relationship.BaseGroup';
            var Fields;
            (function (Fields) {
            })(Fields = BaseGroupRow.Fields || (BaseGroupRow.Fields = {}));
            ['IdBase', 'IdGroup', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdGroupDescription', 'IdGroupEnabled'].forEach(function (x) { return Fields[x] = x; });
        })(BaseGroupRow = Relationship.BaseGroupRow || (Relationship.BaseGroupRow = {}));
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseGroupService;
        (function (BaseGroupService) {
            BaseGroupService.baseUrl = 'Relationship/BaseGroup';
            var Methods;
            (function (Methods) {
            })(Methods = BaseGroupService.Methods || (BaseGroupService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BaseGroupService[x] = function (r, s, o) { return Q.serviceRequest(BaseGroupService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BaseGroupService.baseUrl + '/' + x;
            });
        })(BaseGroupService = Relationship.BaseGroupService || (Relationship.BaseGroupService = {}));
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseShapeForm = (function (_super) {
            __extends(BaseShapeForm, _super);
            function BaseShapeForm() {
                return _super.apply(this, arguments) || this;
            }
            return BaseShapeForm;
        }(Serenity.PrefixedContext));
        BaseShapeForm.formKey = 'Relationship.BaseShape';
        Relationship.BaseShapeForm = BaseShapeForm;
        [['IdShape', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(BaseShapeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseShapeRow;
        (function (BaseShapeRow) {
            BaseShapeRow.idProperty = 'IdBase';
            BaseShapeRow.localTextPrefix = 'Relationship.BaseShape';
            var Fields;
            (function (Fields) {
            })(Fields = BaseShapeRow.Fields || (BaseShapeRow.Fields = {}));
            ['IdBase', 'IdShape', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch', 'IdShapeIdProduct', 'IdShapeOrder', 'IdShapeDescription', 'IdShapePrintName'].forEach(function (x) { return Fields[x] = x; });
        })(BaseShapeRow = Relationship.BaseShapeRow || (Relationship.BaseShapeRow = {}));
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseShapeService;
        (function (BaseShapeService) {
            BaseShapeService.baseUrl = 'Relationship/BaseShape';
            var Methods;
            (function (Methods) {
            })(Methods = BaseShapeService.Methods || (BaseShapeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BaseShapeService[x] = function (r, s, o) { return Q.serviceRequest(BaseShapeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BaseShapeService.baseUrl + '/' + x;
            });
        })(BaseShapeService = Relationship.BaseShapeService || (Relationship.BaseShapeService = {}));
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineFeetForm = (function (_super) {
            __extends(OnlineFeetForm, _super);
            function OnlineFeetForm() {
                return _super.apply(this, arguments) || this;
            }
            return OnlineFeetForm;
        }(Serenity.PrefixedContext));
        OnlineFeetForm.formKey = 'Templates.OnlineFeet';
        Templates.OnlineFeetForm = OnlineFeetForm;
        [['TemplateType', function () { return Serenity.IntegerEditor; }], ['IdInternalArch', function () { return Serenity.IntegerEditor; }], ['IdExternalArch', function () { return Serenity.IntegerEditor; }], ['IdOlive', function () { return Serenity.IntegerEditor; }], ['IdCt', function () { return Serenity.IntegerEditor; }], ['IdRa', function () { return Serenity.IntegerEditor; }], ['IdHeel', function () { return Serenity.IntegerEditor; }], ['IsSingleMit', function () { return Serenity.BooleanEditor; }], ['IsDoubleMit', function () { return Serenity.BooleanEditor; }], ['TemplateTypeNumber', function () { return Serenity.IntegerEditor; }], ['InternalArchNumber', function () { return Serenity.IntegerEditor; }], ['ExternalArchNumber', function () { return Serenity.IntegerEditor; }], ['OliveNumber', function () { return Serenity.IntegerEditor; }], ['CtNumber', function () { return Serenity.IntegerEditor; }], ['RaNumber', function () { return Serenity.IntegerEditor; }], ['HeelNumber', function () { return Serenity.IntegerEditor; }], ['BarValue', function () { return Serenity.StringEditor; }], ['NeckValue', function () { return Serenity.StringEditor; }], ['BehindNeck', function () { return Serenity.BooleanEditor; }], ['IdDigital', function () { return Serenity.IntegerEditor; }], ['AddaptToNumber', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(OnlineFeetForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineFeetRow;
        (function (OnlineFeetRow) {
            OnlineFeetRow.idProperty = 'IdOnlineFeet';
            OnlineFeetRow.nameProperty = 'BarValue';
            OnlineFeetRow.localTextPrefix = 'Templates.OnlineFeet';
            var Fields;
            (function (Fields) {
            })(Fields = OnlineFeetRow.Fields || (OnlineFeetRow.Fields = {}));
            ['IdOnlineFeet', 'TemplateType', 'IdInternalArch', 'IdExternalArch', 'IdOlive', 'IdCt', 'IdRa', 'IdHeel', 'IsSingleMit', 'IsDoubleMit', 'TemplateTypeNumber', 'InternalArchNumber', 'ExternalArchNumber', 'OliveNumber', 'CtNumber', 'RaNumber', 'HeelNumber', 'BarValue', 'NeckValue', 'BehindNeck', 'IdDigital', 'AddaptToNumber', 'IdOnlineFeetIdProduct', 'IdOnlineFeetOrder', 'IdOnlineFeetDescription', 'IdOnlineFeetPrintName', 'IdInternalArchIdProduct', 'IdInternalArchOrder', 'IdInternalArchDescription', 'IdInternalArchPrintDescription', 'IdInternalArchIsValenti', 'IdExternalArchIdProduct', 'IdExternalArchOrder', 'IdExternalArchDescription', 'IdExternalArchPrintDescription', 'IdExternalArchIsValenti', 'IdOliveIdProduct', 'IdOliveOrder', 'IdOliveDescription', 'IdOlivePrintName', 'IdRaIdProduct', 'IdRaOrder', 'IdRaDescription', 'IdRaPrintName', 'IdHeelIdProduct', 'IdHeelOrder', 'IdHeelDescription', 'IdHeelPrintName', 'IdDigitalIdProduct', 'IdDigitalOrder', 'IdDigitalDescription', 'IdDigitalPrintName', 'IdDigitalIsValenti'].forEach(function (x) { return Fields[x] = x; });
        })(OnlineFeetRow = Templates.OnlineFeetRow || (Templates.OnlineFeetRow = {}));
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineFeetService;
        (function (OnlineFeetService) {
            OnlineFeetService.baseUrl = 'Templates/OnlineFeet';
            var Methods;
            (function (Methods) {
            })(Methods = OnlineFeetService.Methods || (OnlineFeetService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OnlineFeetService[x] = function (r, s, o) { return Q.serviceRequest(OnlineFeetService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OnlineFeetService.baseUrl + '/' + x;
            });
        })(OnlineFeetService = Templates.OnlineFeetService || (Templates.OnlineFeetService = {}));
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineTemplateForm = (function (_super) {
            __extends(OnlineTemplateForm, _super);
            function OnlineTemplateForm() {
                return _super.apply(this, arguments) || this;
            }
            return OnlineTemplateForm;
        }(Serenity.PrefixedContext));
        OnlineTemplateForm.formKey = 'Templates.OnlineTemplate';
        Templates.OnlineTemplateForm = OnlineTemplateForm;
        [['Reference', function () { return Serenity.StringEditor; }], ['Number', function () { return Serenity.IntegerEditor; }], ['Urgent', function () { return Serenity.BooleanEditor; }], ['IdGender', function () { return Serenity.IntegerEditor; }], ['IdBase', function () { return Serenity.IntegerEditor; }], ['Is34', function () { return Serenity.BooleanEditor; }], ['IdShape', function () { return Serenity.IntegerEditor; }], ['IdCover', function () { return Serenity.IntegerEditor; }], ['Observations', function () { return Serenity.StringEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(OnlineTemplateForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineTemplateRow;
        (function (OnlineTemplateRow) {
            OnlineTemplateRow.idProperty = 'IdOnlineTemplate';
            OnlineTemplateRow.nameProperty = 'Reference';
            OnlineTemplateRow.localTextPrefix = 'Templates.OnlineTemplate';
            var Fields;
            (function (Fields) {
            })(Fields = OnlineTemplateRow.Fields || (OnlineTemplateRow.Fields = {}));
            ['IdOnlineTemplate', 'Reference', 'Number', 'Urgent', 'IdGender', 'IdBase', 'Is34', 'IdShape', 'IdCover', 'Observations', 'Quantity', 'IdOnlineTemplateIdProduct', 'IdOnlineTemplateOrder', 'IdOnlineTemplateDescription', 'IdOnlineTemplatePrintName', 'IdBaseIdProduct', 'IdBaseOrder', 'IdBaseDescription', 'IdBasePrintName', 'IdBaseFrom', 'IdBaseTo', 'IdBaseEscatola', 'IdBaseNeedArch', 'IdBaseNeedTransversalArch'].forEach(function (x) { return Fields[x] = x; });
        })(OnlineTemplateRow = Templates.OnlineTemplateRow || (Templates.OnlineTemplateRow = {}));
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineTemplateService;
        (function (OnlineTemplateService) {
            OnlineTemplateService.baseUrl = 'Templates/OnlineTemplate';
            var Methods;
            (function (Methods) {
            })(Methods = OnlineTemplateService.Methods || (OnlineTemplateService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OnlineTemplateService[x] = function (r, s, o) { return Q.serviceRequest(OnlineTemplateService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OnlineTemplateService.baseUrl + '/' + x;
            });
        })(OnlineTemplateService = Templates.OnlineTemplateService || (Templates.OnlineTemplateService = {}));
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var ReportDialog = (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.propertyItems
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var ReportPage = (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Cidob');
    })(ScriptInitialization = Cidob.ScriptInitialization || (Cidob.ScriptInitialization = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Cidob.Common || (Cidob.Common = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ArchDialog = (function (_super) {
            __extends(ArchDialog, _super);
            function ArchDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.ArchForm(_this.idPrefix);
                return _this;
            }
            ArchDialog.prototype.getFormKey = function () { return MasterData.ArchForm.formKey; };
            ArchDialog.prototype.getIdProperty = function () { return MasterData.ArchRow.idProperty; };
            ArchDialog.prototype.getLocalTextPrefix = function () { return MasterData.ArchRow.localTextPrefix; };
            ArchDialog.prototype.getNameProperty = function () { return MasterData.ArchRow.nameProperty; };
            ArchDialog.prototype.getService = function () { return MasterData.ArchService.baseUrl; };
            return ArchDialog;
        }(Serenity.EntityDialog));
        ArchDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ArchDialog);
        MasterData.ArchDialog = ArchDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ArchEditor = (function (_super) {
            __extends(ArchEditor, _super);
            function ArchEditor(container) {
                return _super.call(this, container) || this;
            }
            ArchEditor.prototype.getColumnsKey = function () { return 'MasterData.Arch'; };
            ArchEditor.prototype.getDialogType = function () { return MasterData.ArchEditorDialog; };
            ArchEditor.prototype.getLocalTextPrefix = function () { return MasterData.ArchRow.localTextPrefix; };
            return ArchEditor;
        }(Cidob.Common.GridEditorBase));
        ArchEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], ArchEditor);
        MasterData.ArchEditor = ArchEditor;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ArchEditorDialog = (function (_super) {
            __extends(ArchEditorDialog, _super);
            function ArchEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.ArchForm(_this.idPrefix);
                return _this;
            }
            ArchEditorDialog.prototype.getFormKey = function () { return MasterData.ArchForm.formKey; };
            ArchEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.ArchRow.localTextPrefix; };
            ArchEditorDialog.prototype.getNameProperty = function () { return MasterData.ArchRow.nameProperty; };
            return ArchEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        ArchEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ArchEditorDialog);
        MasterData.ArchEditorDialog = ArchEditorDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ArchGrid = (function (_super) {
            __extends(ArchGrid, _super);
            function ArchGrid(container) {
                return _super.call(this, container) || this;
            }
            ArchGrid.prototype.getColumnsKey = function () { return 'MasterData.Arch'; };
            ArchGrid.prototype.getDialogType = function () { return MasterData.ArchDialog; };
            ArchGrid.prototype.getIdProperty = function () { return MasterData.ArchRow.idProperty; };
            ArchGrid.prototype.getLocalTextPrefix = function () { return MasterData.ArchRow.localTextPrefix; };
            ArchGrid.prototype.getService = function () { return MasterData.ArchService.baseUrl; };
            return ArchGrid;
        }(Serenity.EntityGrid));
        ArchGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ArchGrid);
        MasterData.ArchGrid = ArchGrid;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BaseDialog = (function (_super) {
            __extends(BaseDialog, _super);
            function BaseDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.BaseForm(_this.idPrefix);
                return _this;
            }
            BaseDialog.prototype.getFormKey = function () { return MasterData.BaseForm.formKey; };
            BaseDialog.prototype.getIdProperty = function () { return MasterData.BaseRow.idProperty; };
            BaseDialog.prototype.getLocalTextPrefix = function () { return MasterData.BaseRow.localTextPrefix; };
            BaseDialog.prototype.getNameProperty = function () { return MasterData.BaseRow.nameProperty; };
            BaseDialog.prototype.getService = function () { return MasterData.BaseService.baseUrl; };
            BaseDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            return BaseDialog;
        }(Serenity.EntityDialog));
        BaseDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive(),
            Serenity.Decorators.maximizable()
        ], BaseDialog);
        MasterData.BaseDialog = BaseDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BaseEditor = (function (_super) {
            __extends(BaseEditor, _super);
            function BaseEditor(container) {
                return _super.call(this, container) || this;
            }
            BaseEditor.prototype.getColumnsKey = function () { return 'MasterData.Base'; };
            BaseEditor.prototype.getDialogType = function () { return MasterData.BaseEditorDialog; };
            BaseEditor.prototype.getLocalTextPrefix = function () { return MasterData.BaseRow.localTextPrefix; };
            return BaseEditor;
        }(Cidob.Common.GridEditorBase));
        BaseEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], BaseEditor);
        MasterData.BaseEditor = BaseEditor;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BaseEditorDialog = (function (_super) {
            __extends(BaseEditorDialog, _super);
            function BaseEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.BaseForm(_this.idPrefix);
                return _this;
            }
            BaseEditorDialog.prototype.getFormKey = function () { return MasterData.BaseForm.formKey; };
            BaseEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.BaseRow.localTextPrefix; };
            BaseEditorDialog.prototype.getNameProperty = function () { return MasterData.BaseRow.nameProperty; };
            return BaseEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        BaseEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BaseEditorDialog);
        MasterData.BaseEditorDialog = BaseEditorDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var BaseGrid = (function (_super) {
            __extends(BaseGrid, _super);
            function BaseGrid(container) {
                return _super.call(this, container) || this;
            }
            BaseGrid.prototype.getColumnsKey = function () { return 'MasterData.Base'; };
            BaseGrid.prototype.getDialogType = function () { return MasterData.BaseDialog; };
            BaseGrid.prototype.getIdProperty = function () { return MasterData.BaseRow.idProperty; };
            BaseGrid.prototype.getLocalTextPrefix = function () { return MasterData.BaseRow.localTextPrefix; };
            BaseGrid.prototype.getService = function () { return MasterData.BaseService.baseUrl; };
            return BaseGrid;
        }(Serenity.EntityGrid));
        BaseGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], BaseGrid);
        MasterData.BaseGrid = BaseGrid;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CoverDialog = (function (_super) {
            __extends(CoverDialog, _super);
            function CoverDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.CoverForm(_this.idPrefix);
                return _this;
            }
            CoverDialog.prototype.getFormKey = function () { return MasterData.CoverForm.formKey; };
            CoverDialog.prototype.getIdProperty = function () { return MasterData.CoverRow.idProperty; };
            CoverDialog.prototype.getLocalTextPrefix = function () { return MasterData.CoverRow.localTextPrefix; };
            CoverDialog.prototype.getNameProperty = function () { return MasterData.CoverRow.nameProperty; };
            CoverDialog.prototype.getService = function () { return MasterData.CoverService.baseUrl; };
            return CoverDialog;
        }(Serenity.EntityDialog));
        CoverDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CoverDialog);
        MasterData.CoverDialog = CoverDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CoverEditor = (function (_super) {
            __extends(CoverEditor, _super);
            function CoverEditor(container) {
                return _super.call(this, container) || this;
            }
            CoverEditor.prototype.getColumnsKey = function () { return 'MasterData.Cover'; };
            CoverEditor.prototype.getDialogType = function () { return MasterData.CoverEditorDialog; };
            CoverEditor.prototype.getLocalTextPrefix = function () { return MasterData.CoverRow.localTextPrefix; };
            return CoverEditor;
        }(Cidob.Common.GridEditorBase));
        CoverEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], CoverEditor);
        MasterData.CoverEditor = CoverEditor;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CoverEditorDialog = (function (_super) {
            __extends(CoverEditorDialog, _super);
            function CoverEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.CoverForm(_this.idPrefix);
                return _this;
            }
            CoverEditorDialog.prototype.getFormKey = function () { return MasterData.CoverForm.formKey; };
            CoverEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.CoverRow.localTextPrefix; };
            CoverEditorDialog.prototype.getNameProperty = function () { return MasterData.CoverRow.nameProperty; };
            return CoverEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        CoverEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CoverEditorDialog);
        MasterData.CoverEditorDialog = CoverEditorDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CoverGrid = (function (_super) {
            __extends(CoverGrid, _super);
            function CoverGrid(container) {
                return _super.call(this, container) || this;
            }
            CoverGrid.prototype.getColumnsKey = function () { return 'MasterData.Cover'; };
            CoverGrid.prototype.getDialogType = function () { return MasterData.CoverDialog; };
            CoverGrid.prototype.getIdProperty = function () { return MasterData.CoverRow.idProperty; };
            CoverGrid.prototype.getLocalTextPrefix = function () { return MasterData.CoverRow.localTextPrefix; };
            CoverGrid.prototype.getService = function () { return MasterData.CoverService.baseUrl; };
            return CoverGrid;
        }(Serenity.EntityGrid));
        CoverGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CoverGrid);
        MasterData.CoverGrid = CoverGrid;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CtDialog = (function (_super) {
            __extends(CtDialog, _super);
            function CtDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.CtForm(_this.idPrefix);
                return _this;
            }
            CtDialog.prototype.getFormKey = function () { return MasterData.CtForm.formKey; };
            CtDialog.prototype.getIdProperty = function () { return MasterData.CtRow.idProperty; };
            CtDialog.prototype.getLocalTextPrefix = function () { return MasterData.CtRow.localTextPrefix; };
            CtDialog.prototype.getNameProperty = function () { return MasterData.CtRow.nameProperty; };
            CtDialog.prototype.getService = function () { return MasterData.CtService.baseUrl; };
            return CtDialog;
        }(Serenity.EntityDialog));
        CtDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CtDialog);
        MasterData.CtDialog = CtDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CtEditor = (function (_super) {
            __extends(CtEditor, _super);
            function CtEditor(container) {
                return _super.call(this, container) || this;
            }
            CtEditor.prototype.getColumnsKey = function () { return 'MasterData.Ct'; };
            CtEditor.prototype.getDialogType = function () { return MasterData.CtEditorDialog; };
            CtEditor.prototype.getLocalTextPrefix = function () { return MasterData.CtRow.localTextPrefix; };
            return CtEditor;
        }(Cidob.Common.GridEditorBase));
        CtEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], CtEditor);
        MasterData.CtEditor = CtEditor;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CtEditorDialog = (function (_super) {
            __extends(CtEditorDialog, _super);
            function CtEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.CtForm(_this.idPrefix);
                return _this;
            }
            CtEditorDialog.prototype.getFormKey = function () { return MasterData.CtForm.formKey; };
            CtEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.CtRow.localTextPrefix; };
            CtEditorDialog.prototype.getNameProperty = function () { return MasterData.CtRow.nameProperty; };
            return CtEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        CtEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CtEditorDialog);
        MasterData.CtEditorDialog = CtEditorDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var CtGrid = (function (_super) {
            __extends(CtGrid, _super);
            function CtGrid(container) {
                return _super.call(this, container) || this;
            }
            CtGrid.prototype.getColumnsKey = function () { return 'MasterData.Ct'; };
            CtGrid.prototype.getDialogType = function () { return MasterData.CtDialog; };
            CtGrid.prototype.getIdProperty = function () { return MasterData.CtRow.idProperty; };
            CtGrid.prototype.getLocalTextPrefix = function () { return MasterData.CtRow.localTextPrefix; };
            CtGrid.prototype.getService = function () { return MasterData.CtService.baseUrl; };
            return CtGrid;
        }(Serenity.EntityGrid));
        CtGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CtGrid);
        MasterData.CtGrid = CtGrid;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var DigitalDialog = (function (_super) {
            __extends(DigitalDialog, _super);
            function DigitalDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.DigitalForm(_this.idPrefix);
                return _this;
            }
            DigitalDialog.prototype.getFormKey = function () { return MasterData.DigitalForm.formKey; };
            DigitalDialog.prototype.getIdProperty = function () { return MasterData.DigitalRow.idProperty; };
            DigitalDialog.prototype.getLocalTextPrefix = function () { return MasterData.DigitalRow.localTextPrefix; };
            DigitalDialog.prototype.getNameProperty = function () { return MasterData.DigitalRow.nameProperty; };
            DigitalDialog.prototype.getService = function () { return MasterData.DigitalService.baseUrl; };
            return DigitalDialog;
        }(Serenity.EntityDialog));
        DigitalDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], DigitalDialog);
        MasterData.DigitalDialog = DigitalDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var DigitalEditor = (function (_super) {
            __extends(DigitalEditor, _super);
            function DigitalEditor(container) {
                return _super.call(this, container) || this;
            }
            DigitalEditor.prototype.getColumnsKey = function () { return 'MasterData.Digital'; };
            DigitalEditor.prototype.getDialogType = function () { return MasterData.DigitalEditorDialog; };
            DigitalEditor.prototype.getLocalTextPrefix = function () { return MasterData.DigitalRow.localTextPrefix; };
            return DigitalEditor;
        }(Cidob.Common.GridEditorBase));
        DigitalEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], DigitalEditor);
        MasterData.DigitalEditor = DigitalEditor;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var DigitalEditorDialog = (function (_super) {
            __extends(DigitalEditorDialog, _super);
            function DigitalEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.DigitalForm(_this.idPrefix);
                return _this;
            }
            DigitalEditorDialog.prototype.getFormKey = function () { return MasterData.DigitalForm.formKey; };
            DigitalEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.DigitalRow.localTextPrefix; };
            DigitalEditorDialog.prototype.getNameProperty = function () { return MasterData.DigitalRow.nameProperty; };
            return DigitalEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        DigitalEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], DigitalEditorDialog);
        MasterData.DigitalEditorDialog = DigitalEditorDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var DigitalGrid = (function (_super) {
            __extends(DigitalGrid, _super);
            function DigitalGrid(container) {
                return _super.call(this, container) || this;
            }
            DigitalGrid.prototype.getColumnsKey = function () { return 'MasterData.Digital'; };
            DigitalGrid.prototype.getDialogType = function () { return MasterData.DigitalDialog; };
            DigitalGrid.prototype.getIdProperty = function () { return MasterData.DigitalRow.idProperty; };
            DigitalGrid.prototype.getLocalTextPrefix = function () { return MasterData.DigitalRow.localTextPrefix; };
            DigitalGrid.prototype.getService = function () { return MasterData.DigitalService.baseUrl; };
            return DigitalGrid;
        }(Serenity.EntityGrid));
        DigitalGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], DigitalGrid);
        MasterData.DigitalGrid = DigitalGrid;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GenderDialog = (function (_super) {
            __extends(GenderDialog, _super);
            function GenderDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.GenderForm(_this.idPrefix);
                return _this;
            }
            GenderDialog.prototype.getFormKey = function () { return MasterData.GenderForm.formKey; };
            GenderDialog.prototype.getIdProperty = function () { return MasterData.GenderRow.idProperty; };
            GenderDialog.prototype.getLocalTextPrefix = function () { return MasterData.GenderRow.localTextPrefix; };
            GenderDialog.prototype.getNameProperty = function () { return MasterData.GenderRow.nameProperty; };
            GenderDialog.prototype.getService = function () { return MasterData.GenderService.baseUrl; };
            return GenderDialog;
        }(Serenity.EntityDialog));
        GenderDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], GenderDialog);
        MasterData.GenderDialog = GenderDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GenderEditor = (function (_super) {
            __extends(GenderEditor, _super);
            function GenderEditor(container) {
                return _super.call(this, container) || this;
            }
            GenderEditor.prototype.getColumnsKey = function () { return 'MasterData.Gender'; };
            GenderEditor.prototype.getDialogType = function () { return MasterData.GenderEditorDialog; };
            GenderEditor.prototype.getLocalTextPrefix = function () { return MasterData.GenderRow.localTextPrefix; };
            return GenderEditor;
        }(Cidob.Common.GridEditorBase));
        GenderEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], GenderEditor);
        MasterData.GenderEditor = GenderEditor;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GenderEditorDialog = (function (_super) {
            __extends(GenderEditorDialog, _super);
            function GenderEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.GenderForm(_this.idPrefix);
                return _this;
            }
            GenderEditorDialog.prototype.getFormKey = function () { return MasterData.GenderForm.formKey; };
            GenderEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.GenderRow.localTextPrefix; };
            GenderEditorDialog.prototype.getNameProperty = function () { return MasterData.GenderRow.nameProperty; };
            return GenderEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        GenderEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], GenderEditorDialog);
        MasterData.GenderEditorDialog = GenderEditorDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GenderGrid = (function (_super) {
            __extends(GenderGrid, _super);
            function GenderGrid(container) {
                return _super.call(this, container) || this;
            }
            GenderGrid.prototype.getColumnsKey = function () { return 'MasterData.Gender'; };
            GenderGrid.prototype.getDialogType = function () { return MasterData.GenderDialog; };
            GenderGrid.prototype.getIdProperty = function () { return MasterData.GenderRow.idProperty; };
            GenderGrid.prototype.getLocalTextPrefix = function () { return MasterData.GenderRow.localTextPrefix; };
            GenderGrid.prototype.getService = function () { return MasterData.GenderService.baseUrl; };
            return GenderGrid;
        }(Serenity.EntityGrid));
        GenderGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], GenderGrid);
        MasterData.GenderGrid = GenderGrid;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GroupDialog = (function (_super) {
            __extends(GroupDialog, _super);
            function GroupDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.GroupForm(_this.idPrefix);
                return _this;
            }
            GroupDialog.prototype.getFormKey = function () { return MasterData.GroupForm.formKey; };
            GroupDialog.prototype.getIdProperty = function () { return MasterData.GroupRow.idProperty; };
            GroupDialog.prototype.getLocalTextPrefix = function () { return MasterData.GroupRow.localTextPrefix; };
            GroupDialog.prototype.getNameProperty = function () { return MasterData.GroupRow.nameProperty; };
            GroupDialog.prototype.getService = function () { return MasterData.GroupService.baseUrl; };
            return GroupDialog;
        }(Serenity.EntityDialog));
        GroupDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], GroupDialog);
        MasterData.GroupDialog = GroupDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GroupEditor = (function (_super) {
            __extends(GroupEditor, _super);
            function GroupEditor(container) {
                return _super.call(this, container) || this;
            }
            GroupEditor.prototype.getColumnsKey = function () { return 'MasterData.Group'; };
            GroupEditor.prototype.getDialogType = function () { return MasterData.GroupEditorDialog; };
            GroupEditor.prototype.getLocalTextPrefix = function () { return MasterData.GroupRow.localTextPrefix; };
            return GroupEditor;
        }(Cidob.Common.GridEditorBase));
        GroupEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], GroupEditor);
        MasterData.GroupEditor = GroupEditor;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GroupEditorDialog = (function (_super) {
            __extends(GroupEditorDialog, _super);
            function GroupEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.GroupForm(_this.idPrefix);
                return _this;
            }
            GroupEditorDialog.prototype.getFormKey = function () { return MasterData.GroupForm.formKey; };
            GroupEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.GroupRow.localTextPrefix; };
            GroupEditorDialog.prototype.getNameProperty = function () { return MasterData.GroupRow.nameProperty; };
            return GroupEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        GroupEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], GroupEditorDialog);
        MasterData.GroupEditorDialog = GroupEditorDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var GroupGrid = (function (_super) {
            __extends(GroupGrid, _super);
            function GroupGrid(container) {
                return _super.call(this, container) || this;
            }
            GroupGrid.prototype.getColumnsKey = function () { return 'MasterData.Group'; };
            GroupGrid.prototype.getDialogType = function () { return MasterData.GroupDialog; };
            GroupGrid.prototype.getIdProperty = function () { return MasterData.GroupRow.idProperty; };
            GroupGrid.prototype.getLocalTextPrefix = function () { return MasterData.GroupRow.localTextPrefix; };
            GroupGrid.prototype.getService = function () { return MasterData.GroupService.baseUrl; };
            return GroupGrid;
        }(Serenity.EntityGrid));
        GroupGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], GroupGrid);
        MasterData.GroupGrid = GroupGrid;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var HeelDialog = (function (_super) {
            __extends(HeelDialog, _super);
            function HeelDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.HeelForm(_this.idPrefix);
                return _this;
            }
            HeelDialog.prototype.getFormKey = function () { return MasterData.HeelForm.formKey; };
            HeelDialog.prototype.getIdProperty = function () { return MasterData.HeelRow.idProperty; };
            HeelDialog.prototype.getLocalTextPrefix = function () { return MasterData.HeelRow.localTextPrefix; };
            HeelDialog.prototype.getNameProperty = function () { return MasterData.HeelRow.nameProperty; };
            HeelDialog.prototype.getService = function () { return MasterData.HeelService.baseUrl; };
            return HeelDialog;
        }(Serenity.EntityDialog));
        HeelDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], HeelDialog);
        MasterData.HeelDialog = HeelDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var HeelEditor = (function (_super) {
            __extends(HeelEditor, _super);
            function HeelEditor(container) {
                return _super.call(this, container) || this;
            }
            HeelEditor.prototype.getColumnsKey = function () { return 'MasterData.Heel'; };
            HeelEditor.prototype.getDialogType = function () { return MasterData.HeelEditorDialog; };
            HeelEditor.prototype.getLocalTextPrefix = function () { return MasterData.HeelRow.localTextPrefix; };
            return HeelEditor;
        }(Cidob.Common.GridEditorBase));
        HeelEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], HeelEditor);
        MasterData.HeelEditor = HeelEditor;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var HeelEditorDialog = (function (_super) {
            __extends(HeelEditorDialog, _super);
            function HeelEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.HeelForm(_this.idPrefix);
                return _this;
            }
            HeelEditorDialog.prototype.getFormKey = function () { return MasterData.HeelForm.formKey; };
            HeelEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.HeelRow.localTextPrefix; };
            HeelEditorDialog.prototype.getNameProperty = function () { return MasterData.HeelRow.nameProperty; };
            return HeelEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        HeelEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], HeelEditorDialog);
        MasterData.HeelEditorDialog = HeelEditorDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var HeelGrid = (function (_super) {
            __extends(HeelGrid, _super);
            function HeelGrid(container) {
                return _super.call(this, container) || this;
            }
            HeelGrid.prototype.getColumnsKey = function () { return 'MasterData.Heel'; };
            HeelGrid.prototype.getDialogType = function () { return MasterData.HeelDialog; };
            HeelGrid.prototype.getIdProperty = function () { return MasterData.HeelRow.idProperty; };
            HeelGrid.prototype.getLocalTextPrefix = function () { return MasterData.HeelRow.localTextPrefix; };
            HeelGrid.prototype.getService = function () { return MasterData.HeelService.baseUrl; };
            return HeelGrid;
        }(Serenity.EntityGrid));
        HeelGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], HeelGrid);
        MasterData.HeelGrid = HeelGrid;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var OliveDialog = (function (_super) {
            __extends(OliveDialog, _super);
            function OliveDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.OliveForm(_this.idPrefix);
                return _this;
            }
            OliveDialog.prototype.getFormKey = function () { return MasterData.OliveForm.formKey; };
            OliveDialog.prototype.getIdProperty = function () { return MasterData.OliveRow.idProperty; };
            OliveDialog.prototype.getLocalTextPrefix = function () { return MasterData.OliveRow.localTextPrefix; };
            OliveDialog.prototype.getNameProperty = function () { return MasterData.OliveRow.nameProperty; };
            OliveDialog.prototype.getService = function () { return MasterData.OliveService.baseUrl; };
            return OliveDialog;
        }(Serenity.EntityDialog));
        OliveDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], OliveDialog);
        MasterData.OliveDialog = OliveDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var OliveEditor = (function (_super) {
            __extends(OliveEditor, _super);
            function OliveEditor(container) {
                return _super.call(this, container) || this;
            }
            OliveEditor.prototype.getColumnsKey = function () { return 'MasterData.Olive'; };
            OliveEditor.prototype.getDialogType = function () { return MasterData.OliveEditorDialog; };
            OliveEditor.prototype.getLocalTextPrefix = function () { return MasterData.OliveRow.localTextPrefix; };
            return OliveEditor;
        }(Cidob.Common.GridEditorBase));
        OliveEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], OliveEditor);
        MasterData.OliveEditor = OliveEditor;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var OliveEditorDialog = (function (_super) {
            __extends(OliveEditorDialog, _super);
            function OliveEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.OliveForm(_this.idPrefix);
                return _this;
            }
            OliveEditorDialog.prototype.getFormKey = function () { return MasterData.OliveForm.formKey; };
            OliveEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.OliveRow.localTextPrefix; };
            OliveEditorDialog.prototype.getNameProperty = function () { return MasterData.OliveRow.nameProperty; };
            return OliveEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        OliveEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], OliveEditorDialog);
        MasterData.OliveEditorDialog = OliveEditorDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var OliveGrid = (function (_super) {
            __extends(OliveGrid, _super);
            function OliveGrid(container) {
                return _super.call(this, container) || this;
            }
            OliveGrid.prototype.getColumnsKey = function () { return 'MasterData.Olive'; };
            OliveGrid.prototype.getDialogType = function () { return MasterData.OliveDialog; };
            OliveGrid.prototype.getIdProperty = function () { return MasterData.OliveRow.idProperty; };
            OliveGrid.prototype.getLocalTextPrefix = function () { return MasterData.OliveRow.localTextPrefix; };
            OliveGrid.prototype.getService = function () { return MasterData.OliveService.baseUrl; };
            return OliveGrid;
        }(Serenity.EntityGrid));
        OliveGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], OliveGrid);
        MasterData.OliveGrid = OliveGrid;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ProductDialog = (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return MasterData.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return MasterData.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return MasterData.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return MasterData.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return MasterData.ProductService.baseUrl; };
            return ProductDialog;
        }(Serenity.EntityDialog));
        ProductDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ProductDialog);
        MasterData.ProductDialog = ProductDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ProductEditor = (function (_super) {
            __extends(ProductEditor, _super);
            function ProductEditor(container) {
                return _super.call(this, container) || this;
            }
            ProductEditor.prototype.getColumnsKey = function () { return 'MasterData.Product'; };
            ProductEditor.prototype.getDialogType = function () { return MasterData.ProductEditorDialog; };
            ProductEditor.prototype.getLocalTextPrefix = function () { return MasterData.ProductRow.localTextPrefix; };
            return ProductEditor;
        }(Cidob.Common.GridEditorBase));
        ProductEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], ProductEditor);
        MasterData.ProductEditor = ProductEditor;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ProductEditorDialog = (function (_super) {
            __extends(ProductEditorDialog, _super);
            function ProductEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductEditorDialog.prototype.getFormKey = function () { return MasterData.ProductForm.formKey; };
            ProductEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.ProductRow.localTextPrefix; };
            ProductEditorDialog.prototype.getNameProperty = function () { return MasterData.ProductRow.nameProperty; };
            return ProductEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        ProductEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ProductEditorDialog);
        MasterData.ProductEditorDialog = ProductEditorDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ProductGrid = (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return 'MasterData.Product'; };
            ProductGrid.prototype.getDialogType = function () { return MasterData.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return MasterData.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return MasterData.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return MasterData.ProductService.baseUrl; };
            return ProductGrid;
        }(Serenity.EntityGrid));
        ProductGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ProductGrid);
        MasterData.ProductGrid = ProductGrid;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var RaDialog = (function (_super) {
            __extends(RaDialog, _super);
            function RaDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.RaForm(_this.idPrefix);
                return _this;
            }
            RaDialog.prototype.getFormKey = function () { return MasterData.RaForm.formKey; };
            RaDialog.prototype.getIdProperty = function () { return MasterData.RaRow.idProperty; };
            RaDialog.prototype.getLocalTextPrefix = function () { return MasterData.RaRow.localTextPrefix; };
            RaDialog.prototype.getNameProperty = function () { return MasterData.RaRow.nameProperty; };
            RaDialog.prototype.getService = function () { return MasterData.RaService.baseUrl; };
            return RaDialog;
        }(Serenity.EntityDialog));
        RaDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], RaDialog);
        MasterData.RaDialog = RaDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var RaEditor = (function (_super) {
            __extends(RaEditor, _super);
            function RaEditor(container) {
                return _super.call(this, container) || this;
            }
            RaEditor.prototype.getColumnsKey = function () { return 'MasterData.Ra'; };
            RaEditor.prototype.getDialogType = function () { return MasterData.RaEditorDialog; };
            RaEditor.prototype.getLocalTextPrefix = function () { return MasterData.RaRow.localTextPrefix; };
            return RaEditor;
        }(Cidob.Common.GridEditorBase));
        RaEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], RaEditor);
        MasterData.RaEditor = RaEditor;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var RaEditorDialog = (function (_super) {
            __extends(RaEditorDialog, _super);
            function RaEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.RaForm(_this.idPrefix);
                return _this;
            }
            RaEditorDialog.prototype.getFormKey = function () { return MasterData.RaForm.formKey; };
            RaEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.RaRow.localTextPrefix; };
            RaEditorDialog.prototype.getNameProperty = function () { return MasterData.RaRow.nameProperty; };
            return RaEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        RaEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], RaEditorDialog);
        MasterData.RaEditorDialog = RaEditorDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var RaGrid = (function (_super) {
            __extends(RaGrid, _super);
            function RaGrid(container) {
                return _super.call(this, container) || this;
            }
            RaGrid.prototype.getColumnsKey = function () { return 'MasterData.Ra'; };
            RaGrid.prototype.getDialogType = function () { return MasterData.RaDialog; };
            RaGrid.prototype.getIdProperty = function () { return MasterData.RaRow.idProperty; };
            RaGrid.prototype.getLocalTextPrefix = function () { return MasterData.RaRow.localTextPrefix; };
            RaGrid.prototype.getService = function () { return MasterData.RaService.baseUrl; };
            return RaGrid;
        }(Serenity.EntityGrid));
        RaGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RaGrid);
        MasterData.RaGrid = RaGrid;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ShapeDialog = (function (_super) {
            __extends(ShapeDialog, _super);
            function ShapeDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.ShapeForm(_this.idPrefix);
                return _this;
            }
            ShapeDialog.prototype.getFormKey = function () { return MasterData.ShapeForm.formKey; };
            ShapeDialog.prototype.getIdProperty = function () { return MasterData.ShapeRow.idProperty; };
            ShapeDialog.prototype.getLocalTextPrefix = function () { return MasterData.ShapeRow.localTextPrefix; };
            ShapeDialog.prototype.getNameProperty = function () { return MasterData.ShapeRow.nameProperty; };
            ShapeDialog.prototype.getService = function () { return MasterData.ShapeService.baseUrl; };
            return ShapeDialog;
        }(Serenity.EntityDialog));
        ShapeDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ShapeDialog);
        MasterData.ShapeDialog = ShapeDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ShapeEditor = (function (_super) {
            __extends(ShapeEditor, _super);
            function ShapeEditor(container) {
                return _super.call(this, container) || this;
            }
            ShapeEditor.prototype.getColumnsKey = function () { return 'MasterData.Shape'; };
            ShapeEditor.prototype.getDialogType = function () { return MasterData.ShapeEditorDialog; };
            ShapeEditor.prototype.getLocalTextPrefix = function () { return MasterData.ShapeRow.localTextPrefix; };
            return ShapeEditor;
        }(Cidob.Common.GridEditorBase));
        ShapeEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], ShapeEditor);
        MasterData.ShapeEditor = ShapeEditor;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ShapeEditorDialog = (function (_super) {
            __extends(ShapeEditorDialog, _super);
            function ShapeEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.ShapeForm(_this.idPrefix);
                return _this;
            }
            ShapeEditorDialog.prototype.getFormKey = function () { return MasterData.ShapeForm.formKey; };
            ShapeEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.ShapeRow.localTextPrefix; };
            ShapeEditorDialog.prototype.getNameProperty = function () { return MasterData.ShapeRow.nameProperty; };
            return ShapeEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        ShapeEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ShapeEditorDialog);
        MasterData.ShapeEditorDialog = ShapeEditorDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var ShapeGrid = (function (_super) {
            __extends(ShapeGrid, _super);
            function ShapeGrid(container) {
                return _super.call(this, container) || this;
            }
            ShapeGrid.prototype.getColumnsKey = function () { return 'MasterData.Shape'; };
            ShapeGrid.prototype.getDialogType = function () { return MasterData.ShapeDialog; };
            ShapeGrid.prototype.getIdProperty = function () { return MasterData.ShapeRow.idProperty; };
            ShapeGrid.prototype.getLocalTextPrefix = function () { return MasterData.ShapeRow.localTextPrefix; };
            ShapeGrid.prototype.getService = function () { return MasterData.ShapeService.baseUrl; };
            return ShapeGrid;
        }(Serenity.EntityGrid));
        ShapeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ShapeGrid);
        MasterData.ShapeGrid = ShapeGrid;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var TransversalArchDialog = (function (_super) {
            __extends(TransversalArchDialog, _super);
            function TransversalArchDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.TransversalArchForm(_this.idPrefix);
                return _this;
            }
            TransversalArchDialog.prototype.getFormKey = function () { return MasterData.TransversalArchForm.formKey; };
            TransversalArchDialog.prototype.getIdProperty = function () { return MasterData.TransversalArchRow.idProperty; };
            TransversalArchDialog.prototype.getLocalTextPrefix = function () { return MasterData.TransversalArchRow.localTextPrefix; };
            TransversalArchDialog.prototype.getNameProperty = function () { return MasterData.TransversalArchRow.nameProperty; };
            TransversalArchDialog.prototype.getService = function () { return MasterData.TransversalArchService.baseUrl; };
            return TransversalArchDialog;
        }(Serenity.EntityDialog));
        TransversalArchDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], TransversalArchDialog);
        MasterData.TransversalArchDialog = TransversalArchDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var TransversalArchEditor = (function (_super) {
            __extends(TransversalArchEditor, _super);
            function TransversalArchEditor(container) {
                return _super.call(this, container) || this;
            }
            TransversalArchEditor.prototype.getColumnsKey = function () { return 'MasterData.TransversalArch'; };
            TransversalArchEditor.prototype.getDialogType = function () { return MasterData.TransversalArchEditorDialog; };
            TransversalArchEditor.prototype.getLocalTextPrefix = function () { return MasterData.TransversalArchRow.localTextPrefix; };
            return TransversalArchEditor;
        }(Cidob.Common.GridEditorBase));
        TransversalArchEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], TransversalArchEditor);
        MasterData.TransversalArchEditor = TransversalArchEditor;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var TransversalArchEditorDialog = (function (_super) {
            __extends(TransversalArchEditorDialog, _super);
            function TransversalArchEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.TransversalArchForm(_this.idPrefix);
                return _this;
            }
            TransversalArchEditorDialog.prototype.getFormKey = function () { return MasterData.TransversalArchForm.formKey; };
            TransversalArchEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.TransversalArchRow.localTextPrefix; };
            TransversalArchEditorDialog.prototype.getNameProperty = function () { return MasterData.TransversalArchRow.nameProperty; };
            return TransversalArchEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        TransversalArchEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], TransversalArchEditorDialog);
        MasterData.TransversalArchEditorDialog = TransversalArchEditorDialog;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var MasterData;
    (function (MasterData) {
        var TransversalArchGrid = (function (_super) {
            __extends(TransversalArchGrid, _super);
            function TransversalArchGrid(container) {
                return _super.call(this, container) || this;
            }
            TransversalArchGrid.prototype.getColumnsKey = function () { return 'MasterData.TransversalArch'; };
            TransversalArchGrid.prototype.getDialogType = function () { return MasterData.TransversalArchDialog; };
            TransversalArchGrid.prototype.getIdProperty = function () { return MasterData.TransversalArchRow.idProperty; };
            TransversalArchGrid.prototype.getLocalTextPrefix = function () { return MasterData.TransversalArchRow.localTextPrefix; };
            TransversalArchGrid.prototype.getService = function () { return MasterData.TransversalArchService.baseUrl; };
            return TransversalArchGrid;
        }(Serenity.EntityGrid));
        TransversalArchGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TransversalArchGrid);
        MasterData.TransversalArchGrid = TransversalArchGrid;
    })(MasterData = Cidob.MasterData || (Cidob.MasterData = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        ChangePasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangePasswordPanel);
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Cidob.Membership || (Cidob.Membership = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        ForgotPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ForgotPasswordPanel);
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Cidob.Membership || (Cidob.Membership = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Membership;
    (function (Membership) {
        var LoginPanel = (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $(function () {
                    $('body').vegas({
                        delay: 10000,
                        cover: true,
                        overlay: Q.resolveUrl("~/scripts/vegas/overlays/01.png"),
                        slides: [
                            { src: Q.resolveUrl('~/content/site/slides/slide1.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide2.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                            { src: Q.resolveUrl('~/content/site/slides/slide4.jpg'), transition: 'blur' },
                            { src: Q.resolveUrl('~/content/site/slides/slide5.jpg'), transition: 'swirlLeft' }
                        ]
                    });
                });
                _this.form = new Membership.LoginForm(_this.idPrefix);
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            return LoginPanel;
        }(Serenity.PropertyPanel));
        LoginPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], LoginPanel);
        Membership.LoginPanel = LoginPanel;
    })(Membership = Cidob.Membership || (Cidob.Membership = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        ResetPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ResetPasswordPanel);
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Cidob.Membership || (Cidob.Membership = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        SignUpPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], SignUpPanel);
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Cidob.Membership || (Cidob.Membership = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseArchDialog = (function (_super) {
            __extends(BaseArchDialog, _super);
            function BaseArchDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Relationship.BaseArchForm(_this.idPrefix);
                return _this;
            }
            BaseArchDialog.prototype.getFormKey = function () { return Relationship.BaseArchForm.formKey; };
            BaseArchDialog.prototype.getIdProperty = function () { return Relationship.BaseArchRow.idProperty; };
            BaseArchDialog.prototype.getLocalTextPrefix = function () { return Relationship.BaseArchRow.localTextPrefix; };
            BaseArchDialog.prototype.getService = function () { return Relationship.BaseArchService.baseUrl; };
            return BaseArchDialog;
        }(Serenity.EntityDialog));
        BaseArchDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BaseArchDialog);
        Relationship.BaseArchDialog = BaseArchDialog;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseArchEditor = (function (_super) {
            __extends(BaseArchEditor, _super);
            function BaseArchEditor(container) {
                return _super.call(this, container) || this;
            }
            BaseArchEditor.prototype.getColumnsKey = function () { return 'Relationship.BaseArch'; };
            BaseArchEditor.prototype.getDialogType = function () { return Relationship.BaseArchEditorDialog; };
            BaseArchEditor.prototype.getLocalTextPrefix = function () { return Relationship.BaseArchRow.localTextPrefix; };
            return BaseArchEditor;
        }(Cidob.Common.GridEditorBase));
        BaseArchEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], BaseArchEditor);
        Relationship.BaseArchEditor = BaseArchEditor;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseArchEditorDialog = (function (_super) {
            __extends(BaseArchEditorDialog, _super);
            function BaseArchEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Relationship.BaseArchForm(_this.idPrefix);
                return _this;
            }
            BaseArchEditorDialog.prototype.getFormKey = function () { return Relationship.BaseArchForm.formKey; };
            BaseArchEditorDialog.prototype.getLocalTextPrefix = function () { return Relationship.BaseArchRow.localTextPrefix; };
            return BaseArchEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        BaseArchEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BaseArchEditorDialog);
        Relationship.BaseArchEditorDialog = BaseArchEditorDialog;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseArchGrid = (function (_super) {
            __extends(BaseArchGrid, _super);
            function BaseArchGrid(container) {
                return _super.call(this, container) || this;
            }
            BaseArchGrid.prototype.getColumnsKey = function () { return 'Relationship.BaseArch'; };
            BaseArchGrid.prototype.getDialogType = function () { return Relationship.BaseArchDialog; };
            BaseArchGrid.prototype.getIdProperty = function () { return Relationship.BaseArchRow.idProperty; };
            BaseArchGrid.prototype.getLocalTextPrefix = function () { return Relationship.BaseArchRow.localTextPrefix; };
            BaseArchGrid.prototype.getService = function () { return Relationship.BaseArchService.baseUrl; };
            return BaseArchGrid;
        }(Serenity.EntityGrid));
        BaseArchGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], BaseArchGrid);
        Relationship.BaseArchGrid = BaseArchGrid;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseCoverDialog = (function (_super) {
            __extends(BaseCoverDialog, _super);
            function BaseCoverDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Relationship.BaseCoverForm(_this.idPrefix);
                return _this;
            }
            BaseCoverDialog.prototype.getFormKey = function () { return Relationship.BaseCoverForm.formKey; };
            BaseCoverDialog.prototype.getIdProperty = function () { return Relationship.BaseCoverRow.idProperty; };
            BaseCoverDialog.prototype.getLocalTextPrefix = function () { return Relationship.BaseCoverRow.localTextPrefix; };
            BaseCoverDialog.prototype.getService = function () { return Relationship.BaseCoverService.baseUrl; };
            return BaseCoverDialog;
        }(Serenity.EntityDialog));
        BaseCoverDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BaseCoverDialog);
        Relationship.BaseCoverDialog = BaseCoverDialog;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseCoverEditor = (function (_super) {
            __extends(BaseCoverEditor, _super);
            function BaseCoverEditor(container) {
                return _super.call(this, container) || this;
            }
            BaseCoverEditor.prototype.getColumnsKey = function () { return 'Relationship.BaseCover'; };
            BaseCoverEditor.prototype.getDialogType = function () { return Relationship.BaseCoverEditorDialog; };
            BaseCoverEditor.prototype.getLocalTextPrefix = function () { return Relationship.BaseCoverRow.localTextPrefix; };
            return BaseCoverEditor;
        }(Cidob.Common.GridEditorBase));
        BaseCoverEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], BaseCoverEditor);
        Relationship.BaseCoverEditor = BaseCoverEditor;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseCoverEditorDialog = (function (_super) {
            __extends(BaseCoverEditorDialog, _super);
            function BaseCoverEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Relationship.BaseCoverForm(_this.idPrefix);
                return _this;
            }
            BaseCoverEditorDialog.prototype.getFormKey = function () { return Relationship.BaseCoverForm.formKey; };
            BaseCoverEditorDialog.prototype.getLocalTextPrefix = function () { return Relationship.BaseCoverRow.localTextPrefix; };
            return BaseCoverEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        BaseCoverEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BaseCoverEditorDialog);
        Relationship.BaseCoverEditorDialog = BaseCoverEditorDialog;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseCoverGrid = (function (_super) {
            __extends(BaseCoverGrid, _super);
            function BaseCoverGrid(container) {
                return _super.call(this, container) || this;
            }
            BaseCoverGrid.prototype.getColumnsKey = function () { return 'Relationship.BaseCover'; };
            BaseCoverGrid.prototype.getDialogType = function () { return Relationship.BaseCoverDialog; };
            BaseCoverGrid.prototype.getIdProperty = function () { return Relationship.BaseCoverRow.idProperty; };
            BaseCoverGrid.prototype.getLocalTextPrefix = function () { return Relationship.BaseCoverRow.localTextPrefix; };
            BaseCoverGrid.prototype.getService = function () { return Relationship.BaseCoverService.baseUrl; };
            return BaseCoverGrid;
        }(Serenity.EntityGrid));
        BaseCoverGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], BaseCoverGrid);
        Relationship.BaseCoverGrid = BaseCoverGrid;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseGroupDialog = (function (_super) {
            __extends(BaseGroupDialog, _super);
            function BaseGroupDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Relationship.BaseGroupForm(_this.idPrefix);
                return _this;
            }
            BaseGroupDialog.prototype.getFormKey = function () { return Relationship.BaseGroupForm.formKey; };
            BaseGroupDialog.prototype.getIdProperty = function () { return Relationship.BaseGroupRow.idProperty; };
            BaseGroupDialog.prototype.getLocalTextPrefix = function () { return Relationship.BaseGroupRow.localTextPrefix; };
            BaseGroupDialog.prototype.getService = function () { return Relationship.BaseGroupService.baseUrl; };
            return BaseGroupDialog;
        }(Serenity.EntityDialog));
        BaseGroupDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BaseGroupDialog);
        Relationship.BaseGroupDialog = BaseGroupDialog;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseGroupEditor = (function (_super) {
            __extends(BaseGroupEditor, _super);
            function BaseGroupEditor(container) {
                return _super.call(this, container) || this;
            }
            BaseGroupEditor.prototype.getColumnsKey = function () { return 'Relationship.BaseGroup'; };
            BaseGroupEditor.prototype.getDialogType = function () { return Relationship.BaseGroupEditorDialog; };
            BaseGroupEditor.prototype.getLocalTextPrefix = function () { return Relationship.BaseGroupRow.localTextPrefix; };
            return BaseGroupEditor;
        }(Cidob.Common.GridEditorBase));
        BaseGroupEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], BaseGroupEditor);
        Relationship.BaseGroupEditor = BaseGroupEditor;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseGroupEditorDialog = (function (_super) {
            __extends(BaseGroupEditorDialog, _super);
            function BaseGroupEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Relationship.BaseGroupForm(_this.idPrefix);
                return _this;
            }
            BaseGroupEditorDialog.prototype.getFormKey = function () { return Relationship.BaseGroupForm.formKey; };
            BaseGroupEditorDialog.prototype.getLocalTextPrefix = function () { return Relationship.BaseGroupRow.localTextPrefix; };
            return BaseGroupEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        BaseGroupEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BaseGroupEditorDialog);
        Relationship.BaseGroupEditorDialog = BaseGroupEditorDialog;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseGroupGrid = (function (_super) {
            __extends(BaseGroupGrid, _super);
            function BaseGroupGrid(container) {
                return _super.call(this, container) || this;
            }
            BaseGroupGrid.prototype.getColumnsKey = function () { return 'Relationship.BaseGroup'; };
            BaseGroupGrid.prototype.getDialogType = function () { return Relationship.BaseGroupDialog; };
            BaseGroupGrid.prototype.getIdProperty = function () { return Relationship.BaseGroupRow.idProperty; };
            BaseGroupGrid.prototype.getLocalTextPrefix = function () { return Relationship.BaseGroupRow.localTextPrefix; };
            BaseGroupGrid.prototype.getService = function () { return Relationship.BaseGroupService.baseUrl; };
            return BaseGroupGrid;
        }(Serenity.EntityGrid));
        BaseGroupGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], BaseGroupGrid);
        Relationship.BaseGroupGrid = BaseGroupGrid;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseShapeDialog = (function (_super) {
            __extends(BaseShapeDialog, _super);
            function BaseShapeDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Relationship.BaseShapeForm(_this.idPrefix);
                return _this;
            }
            BaseShapeDialog.prototype.getFormKey = function () { return Relationship.BaseShapeForm.formKey; };
            BaseShapeDialog.prototype.getIdProperty = function () { return Relationship.BaseShapeRow.idProperty; };
            BaseShapeDialog.prototype.getLocalTextPrefix = function () { return Relationship.BaseShapeRow.localTextPrefix; };
            BaseShapeDialog.prototype.getService = function () { return Relationship.BaseShapeService.baseUrl; };
            return BaseShapeDialog;
        }(Serenity.EntityDialog));
        BaseShapeDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BaseShapeDialog);
        Relationship.BaseShapeDialog = BaseShapeDialog;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseShapeEditor = (function (_super) {
            __extends(BaseShapeEditor, _super);
            function BaseShapeEditor(container) {
                return _super.call(this, container) || this;
            }
            BaseShapeEditor.prototype.getColumnsKey = function () { return 'Relationship.BaseShape'; };
            BaseShapeEditor.prototype.getDialogType = function () { return Relationship.BaseShapeEditorDialog; };
            BaseShapeEditor.prototype.getLocalTextPrefix = function () { return Relationship.BaseShapeRow.localTextPrefix; };
            return BaseShapeEditor;
        }(Cidob.Common.GridEditorBase));
        BaseShapeEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], BaseShapeEditor);
        Relationship.BaseShapeEditor = BaseShapeEditor;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseShapeEditorDialog = (function (_super) {
            __extends(BaseShapeEditorDialog, _super);
            function BaseShapeEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Relationship.BaseShapeForm(_this.idPrefix);
                return _this;
            }
            BaseShapeEditorDialog.prototype.getFormKey = function () { return Relationship.BaseShapeForm.formKey; };
            BaseShapeEditorDialog.prototype.getLocalTextPrefix = function () { return Relationship.BaseShapeRow.localTextPrefix; };
            return BaseShapeEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        BaseShapeEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BaseShapeEditorDialog);
        Relationship.BaseShapeEditorDialog = BaseShapeEditorDialog;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Relationship;
    (function (Relationship) {
        var BaseShapeGrid = (function (_super) {
            __extends(BaseShapeGrid, _super);
            function BaseShapeGrid(container) {
                return _super.call(this, container) || this;
            }
            BaseShapeGrid.prototype.getColumnsKey = function () { return 'Relationship.BaseShape'; };
            BaseShapeGrid.prototype.getDialogType = function () { return Relationship.BaseShapeDialog; };
            BaseShapeGrid.prototype.getIdProperty = function () { return Relationship.BaseShapeRow.idProperty; };
            BaseShapeGrid.prototype.getLocalTextPrefix = function () { return Relationship.BaseShapeRow.localTextPrefix; };
            BaseShapeGrid.prototype.getService = function () { return Relationship.BaseShapeService.baseUrl; };
            return BaseShapeGrid;
        }(Serenity.EntityGrid));
        BaseShapeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], BaseShapeGrid);
        Relationship.BaseShapeGrid = BaseShapeGrid;
    })(Relationship = Cidob.Relationship || (Cidob.Relationship = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineFeetDialog = (function (_super) {
            __extends(OnlineFeetDialog, _super);
            function OnlineFeetDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Templates.OnlineFeetForm(_this.idPrefix);
                return _this;
            }
            OnlineFeetDialog.prototype.getFormKey = function () { return Templates.OnlineFeetForm.formKey; };
            OnlineFeetDialog.prototype.getIdProperty = function () { return Templates.OnlineFeetRow.idProperty; };
            OnlineFeetDialog.prototype.getLocalTextPrefix = function () { return Templates.OnlineFeetRow.localTextPrefix; };
            OnlineFeetDialog.prototype.getNameProperty = function () { return Templates.OnlineFeetRow.nameProperty; };
            OnlineFeetDialog.prototype.getService = function () { return Templates.OnlineFeetService.baseUrl; };
            OnlineFeetDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            return OnlineFeetDialog;
        }(Serenity.EntityDialog));
        OnlineFeetDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive(),
            Serenity.Decorators.maximizable()
        ], OnlineFeetDialog);
        Templates.OnlineFeetDialog = OnlineFeetDialog;
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineFeetEditor = (function (_super) {
            __extends(OnlineFeetEditor, _super);
            function OnlineFeetEditor(container) {
                return _super.call(this, container) || this;
            }
            OnlineFeetEditor.prototype.getColumnsKey = function () { return 'Templates.OnlineFeet'; };
            OnlineFeetEditor.prototype.getDialogType = function () { return Templates.OnlineFeetEditorDialog; };
            OnlineFeetEditor.prototype.getLocalTextPrefix = function () { return Templates.OnlineFeetRow.localTextPrefix; };
            return OnlineFeetEditor;
        }(Cidob.Common.GridEditorBase));
        OnlineFeetEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], OnlineFeetEditor);
        Templates.OnlineFeetEditor = OnlineFeetEditor;
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineFeetEditorDialog = (function (_super) {
            __extends(OnlineFeetEditorDialog, _super);
            function OnlineFeetEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Templates.OnlineFeetForm(_this.idPrefix);
                return _this;
            }
            OnlineFeetEditorDialog.prototype.getFormKey = function () { return Templates.OnlineFeetForm.formKey; };
            OnlineFeetEditorDialog.prototype.getLocalTextPrefix = function () { return Templates.OnlineFeetRow.localTextPrefix; };
            OnlineFeetEditorDialog.prototype.getNameProperty = function () { return Templates.OnlineFeetRow.nameProperty; };
            return OnlineFeetEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        OnlineFeetEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], OnlineFeetEditorDialog);
        Templates.OnlineFeetEditorDialog = OnlineFeetEditorDialog;
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineFeetGrid = (function (_super) {
            __extends(OnlineFeetGrid, _super);
            function OnlineFeetGrid(container) {
                return _super.call(this, container) || this;
            }
            OnlineFeetGrid.prototype.getColumnsKey = function () { return 'Templates.OnlineFeet'; };
            OnlineFeetGrid.prototype.getDialogType = function () { return Templates.OnlineFeetDialog; };
            OnlineFeetGrid.prototype.getIdProperty = function () { return Templates.OnlineFeetRow.idProperty; };
            OnlineFeetGrid.prototype.getLocalTextPrefix = function () { return Templates.OnlineFeetRow.localTextPrefix; };
            OnlineFeetGrid.prototype.getService = function () { return Templates.OnlineFeetService.baseUrl; };
            return OnlineFeetGrid;
        }(Serenity.EntityGrid));
        OnlineFeetGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], OnlineFeetGrid);
        Templates.OnlineFeetGrid = OnlineFeetGrid;
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineTemplateDialog = (function (_super) {
            __extends(OnlineTemplateDialog, _super);
            function OnlineTemplateDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Templates.OnlineTemplateForm(_this.idPrefix);
                return _this;
            }
            OnlineTemplateDialog.prototype.getFormKey = function () { return Templates.OnlineTemplateForm.formKey; };
            OnlineTemplateDialog.prototype.getIdProperty = function () { return Templates.OnlineTemplateRow.idProperty; };
            OnlineTemplateDialog.prototype.getLocalTextPrefix = function () { return Templates.OnlineTemplateRow.localTextPrefix; };
            OnlineTemplateDialog.prototype.getNameProperty = function () { return Templates.OnlineTemplateRow.nameProperty; };
            OnlineTemplateDialog.prototype.getService = function () { return Templates.OnlineTemplateService.baseUrl; };
            OnlineTemplateDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            return OnlineTemplateDialog;
        }(Serenity.EntityDialog));
        OnlineTemplateDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive(),
            Serenity.Decorators.maximizable()
        ], OnlineTemplateDialog);
        Templates.OnlineTemplateDialog = OnlineTemplateDialog;
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineTemplateEditor = (function (_super) {
            __extends(OnlineTemplateEditor, _super);
            function OnlineTemplateEditor(container) {
                return _super.call(this, container) || this;
            }
            OnlineTemplateEditor.prototype.getColumnsKey = function () { return 'Templates.OnlineTemplate'; };
            OnlineTemplateEditor.prototype.getDialogType = function () { return Templates.OnlineTemplateEditorDialog; };
            OnlineTemplateEditor.prototype.getLocalTextPrefix = function () { return Templates.OnlineTemplateRow.localTextPrefix; };
            return OnlineTemplateEditor;
        }(Cidob.Common.GridEditorBase));
        OnlineTemplateEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], OnlineTemplateEditor);
        Templates.OnlineTemplateEditor = OnlineTemplateEditor;
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineTemplateEditorDialog = (function (_super) {
            __extends(OnlineTemplateEditorDialog, _super);
            function OnlineTemplateEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Templates.OnlineTemplateForm(_this.idPrefix);
                return _this;
            }
            OnlineTemplateEditorDialog.prototype.getFormKey = function () { return Templates.OnlineTemplateForm.formKey; };
            OnlineTemplateEditorDialog.prototype.getLocalTextPrefix = function () { return Templates.OnlineTemplateRow.localTextPrefix; };
            OnlineTemplateEditorDialog.prototype.getNameProperty = function () { return Templates.OnlineTemplateRow.nameProperty; };
            return OnlineTemplateEditorDialog;
        }(Cidob.Common.GridEditorDialog));
        OnlineTemplateEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], OnlineTemplateEditorDialog);
        Templates.OnlineTemplateEditorDialog = OnlineTemplateEditorDialog;
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
var Cidob;
(function (Cidob) {
    var Templates;
    (function (Templates) {
        var OnlineTemplateGrid = (function (_super) {
            __extends(OnlineTemplateGrid, _super);
            function OnlineTemplateGrid(container) {
                return _super.call(this, container) || this;
            }
            OnlineTemplateGrid.prototype.getColumnsKey = function () { return 'Templates.OnlineTemplate'; };
            OnlineTemplateGrid.prototype.getDialogType = function () { return Templates.OnlineTemplateDialog; };
            OnlineTemplateGrid.prototype.getIdProperty = function () { return Templates.OnlineTemplateRow.idProperty; };
            OnlineTemplateGrid.prototype.getLocalTextPrefix = function () { return Templates.OnlineTemplateRow.localTextPrefix; };
            OnlineTemplateGrid.prototype.getService = function () { return Templates.OnlineTemplateService.baseUrl; };
            return OnlineTemplateGrid;
        }(Serenity.EntityGrid));
        OnlineTemplateGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], OnlineTemplateGrid);
        Templates.OnlineTemplateGrid = OnlineTemplateGrid;
    })(Templates = Cidob.Templates || (Cidob.Templates = {}));
})(Cidob || (Cidob = {}));
//# sourceMappingURL=Cidob.Web.js.map