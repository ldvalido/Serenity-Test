declare namespace Cidob.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Cidob.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace Cidob.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Cidob.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace Cidob.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace Cidob.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): RSVP.Promise<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Cidob.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Cidob.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Cidob.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace Cidob.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        private rolePermissions;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        get_value(): UserPermissionRow[];
        set_value(value: UserPermissionRow[]): void;
        get_rolePermissions(): string[];
        set_rolePermissions(value: string[]): void;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Cidob.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Cidob.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Cidob.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Cidob {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace Cidob.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace Cidob.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Cidob.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace Cidob.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace Cidob.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace Cidob.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Cidob.LanguageList {
    function getValue(): string[][];
}
declare namespace Cidob.Administration {
}
declare namespace Cidob.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
}
declare namespace Cidob.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace Cidob.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.Administration {
}
declare namespace Cidob.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
}
declare namespace Cidob.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Cidob.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Cidob.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace Cidob.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace Cidob.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Cidob.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
        }
    }
}
declare namespace Cidob.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Cidob.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Cidob.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace Cidob.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Cidob.Administration {
}
declare namespace Cidob.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
}
declare namespace Cidob.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Cidob.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Granted: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace Cidob.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace Cidob.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Cidob.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Cidob.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Cidob.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace Cidob.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace Cidob.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Cidob.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const UserImage: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const Password: string;
            const PasswordConfirm: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace Cidob.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace Cidob.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Cidob.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Cidob.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        namespace Fields {
            const UserPreferenceId: string;
            const UserId: string;
            const PreferenceType: string;
            const Name: string;
            const Value: string;
        }
    }
}
declare namespace Cidob.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const Retrieve: string;
        }
    }
}
declare namespace Cidob.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace Cidob.Default {
    class BaseGroupForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BaseGroupForm {
        IdGroup: Serenity.IntegerEditor;
    }
}
declare namespace Cidob.Default {
    interface BaseGroupRow {
        IdBase?: number;
        IdGroup?: number;
        IdBaseIdProduct?: number;
        IdBaseOrder?: number;
        IdBaseDescription?: string;
        IdBasePrintName?: string;
        IdBaseFrom?: number;
        IdBaseTo?: number;
        IdBaseEscatola?: boolean;
        IdBaseNeedArch?: boolean;
        IdBaseNeedTransversalArch?: boolean;
        IdGroupDescription?: string;
        IdGroupEnabled?: boolean;
    }
    namespace BaseGroupRow {
        const idProperty = "IdBase";
        const localTextPrefix = "Default.BaseGroup";
        namespace Fields {
            const IdBase: any;
            const IdGroup: any;
            const IdBaseIdProduct: string;
            const IdBaseOrder: string;
            const IdBaseDescription: string;
            const IdBasePrintName: string;
            const IdBaseFrom: string;
            const IdBaseTo: string;
            const IdBaseEscatola: string;
            const IdBaseNeedArch: string;
            const IdBaseNeedTransversalArch: string;
            const IdGroupDescription: string;
            const IdGroupEnabled: string;
        }
    }
}
declare namespace Cidob.Default {
    namespace BaseGroupService {
        const baseUrl = "Default/BaseGroup";
        function Create(request: Serenity.SaveRequest<BaseGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BaseGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BaseGroupRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BaseGroupRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.Default {
    class BaseTransversalArchForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BaseTransversalArchForm {
        IdTransversalArch: Serenity.IntegerEditor;
    }
}
declare namespace Cidob.Default {
    interface BaseTransversalArchRow {
        IdBase?: number;
        IdTransversalArch?: number;
        IdBaseIdProduct?: number;
        IdBaseOrder?: number;
        IdBaseDescription?: string;
        IdBasePrintName?: string;
        IdBaseFrom?: number;
        IdBaseTo?: number;
        IdBaseEscatola?: boolean;
        IdBaseNeedArch?: boolean;
        IdBaseNeedTransversalArch?: boolean;
        IdTransversalArchIdProduct?: number;
        IdTransversalArchOrder?: number;
        IdTransversalArchDescription?: string;
        IdTransversalArchPrintName?: string;
    }
    namespace BaseTransversalArchRow {
        const idProperty = "IdBase";
        const localTextPrefix = "Default.BaseTransversalArch";
        namespace Fields {
            const IdBase: any;
            const IdTransversalArch: any;
            const IdBaseIdProduct: string;
            const IdBaseOrder: string;
            const IdBaseDescription: string;
            const IdBasePrintName: string;
            const IdBaseFrom: string;
            const IdBaseTo: string;
            const IdBaseEscatola: string;
            const IdBaseNeedArch: string;
            const IdBaseNeedTransversalArch: string;
            const IdTransversalArchIdProduct: string;
            const IdTransversalArchOrder: string;
            const IdTransversalArchDescription: string;
            const IdTransversalArchPrintName: string;
        }
    }
}
declare namespace Cidob.Default {
    namespace BaseTransversalArchService {
        const baseUrl = "Default/BaseTransversalArch";
        function Create(request: Serenity.SaveRequest<BaseTransversalArchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BaseTransversalArchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BaseTransversalArchRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BaseTransversalArchRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Cidob {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Cidob {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Cidob {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Cidob.MasterData {
    class ArchForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ArchForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintDescription: Serenity.StringEditor;
    }
}
declare namespace Cidob.MasterData {
    interface ArchRow {
        Id?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintDescription?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }
    namespace ArchRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.Arch";
        namespace Fields {
            const Id: any;
            const IdProduct: any;
            const Order: any;
            const Description: any;
            const PrintDescription: any;
            const IdProductDescription: string;
            const IdProductCode: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace ArchService {
        const baseUrl = "MasterData/Arch";
        function Create(request: Serenity.SaveRequest<ArchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ArchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ArchRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ArchRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class BaseForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BaseForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
        From: Serenity.IntegerEditor;
        To: Serenity.IntegerEditor;
        Escatola: Serenity.BooleanEditor;
        NeedArch: Serenity.BooleanEditor;
        NeedTransversalArch: Serenity.BooleanEditor;
    }
}
declare namespace Cidob.MasterData {
    class BaseGroupForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BaseGroupForm {
        IdGroup: Serenity.IntegerEditor;
    }
}
declare namespace Cidob.MasterData {
    interface BaseGroupRow {
        IdBase?: number;
        IdGroup?: number;
        IdBaseIdProduct?: number;
        IdBaseOrder?: number;
        IdBaseDescription?: string;
        IdBasePrintName?: string;
        IdBaseFrom?: number;
        IdBaseTo?: number;
        IdBaseEscatola?: boolean;
        IdBaseNeedArch?: boolean;
        IdBaseNeedTransversalArch?: boolean;
        IdGroupDescription?: string;
        IdGroupEnabled?: boolean;
    }
    namespace BaseGroupRow {
        const idProperty = "IdBase";
        const localTextPrefix = "MasterData.BaseGroup";
        namespace Fields {
            const IdBase: any;
            const IdGroup: any;
            const IdBaseIdProduct: string;
            const IdBaseOrder: string;
            const IdBaseDescription: string;
            const IdBasePrintName: string;
            const IdBaseFrom: string;
            const IdBaseTo: string;
            const IdBaseEscatola: string;
            const IdBaseNeedArch: string;
            const IdBaseNeedTransversalArch: string;
            const IdGroupDescription: string;
            const IdGroupEnabled: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace BaseGroupService {
        const baseUrl = "MasterData/BaseGroup";
        function Create(request: Serenity.SaveRequest<BaseGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BaseGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BaseGroupRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BaseGroupRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    interface BaseRow {
        IdBase?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        From?: number;
        To?: number;
        Escatola?: boolean;
        NeedArch?: boolean;
        NeedTransversalArch?: boolean;
        IdProductDescription?: string;
        IdProductCode?: string;
    }
    namespace BaseRow {
        const idProperty = "IdBase";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.Base";
        namespace Fields {
            const IdBase: any;
            const IdProduct: any;
            const Order: any;
            const Description: any;
            const PrintName: any;
            const From: any;
            const To: any;
            const Escatola: any;
            const NeedArch: any;
            const NeedTransversalArch: any;
            const IdProductDescription: string;
            const IdProductCode: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace BaseService {
        const baseUrl = "MasterData/Base";
        function Create(request: Serenity.SaveRequest<BaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BaseRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BaseRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class BaseTransversalArchForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BaseTransversalArchForm {
        IdTransversalArch: Serenity.IntegerEditor;
    }
}
declare namespace Cidob.MasterData {
    interface BaseTransversalArchRow {
        IdBase?: number;
        IdTransversalArch?: number;
        IdBaseIdProduct?: number;
        IdBaseOrder?: number;
        IdBaseDescription?: string;
        IdBasePrintName?: string;
        IdBaseFrom?: number;
        IdBaseTo?: number;
        IdBaseEscatola?: boolean;
        IdBaseNeedArch?: boolean;
        IdBaseNeedTransversalArch?: boolean;
        IdTransversalArchIdProduct?: number;
        IdTransversalArchOrder?: number;
        IdTransversalArchDescription?: string;
        IdTransversalArchPrintName?: string;
    }
    namespace BaseTransversalArchRow {
        const idProperty = "IdBase";
        const localTextPrefix = "MasterData.BaseTransversalArch";
        namespace Fields {
            const IdBase: any;
            const IdTransversalArch: any;
            const IdBaseIdProduct: string;
            const IdBaseOrder: string;
            const IdBaseDescription: string;
            const IdBasePrintName: string;
            const IdBaseFrom: string;
            const IdBaseTo: string;
            const IdBaseEscatola: string;
            const IdBaseNeedArch: string;
            const IdBaseNeedTransversalArch: string;
            const IdTransversalArchIdProduct: string;
            const IdTransversalArchOrder: string;
            const IdTransversalArchDescription: string;
            const IdTransversalArchPrintName: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace BaseTransversalArchService {
        const baseUrl = "MasterData/BaseTransversalArch";
        function Create(request: Serenity.SaveRequest<BaseTransversalArchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BaseTransversalArchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BaseTransversalArchRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BaseTransversalArchRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class BrandForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BrandForm {
        Description: Serenity.StringEditor;
        Enabled: Serenity.BooleanEditor;
    }
}
declare namespace Cidob.MasterData {
    interface BrandRow {
        IdBrands?: number;
        Description?: string;
        Enabled?: boolean;
    }
    namespace BrandRow {
        const idProperty = "IdBrands";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.Brand";
        namespace Fields {
            const IdBrands: any;
            const Description: any;
            const Enabled: any;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace BrandService {
        const baseUrl = "MasterData/Brand";
        function Create(request: Serenity.SaveRequest<BrandRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BrandRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BrandRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BrandRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class CoverForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CoverForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
    }
}
declare namespace Cidob.MasterData {
    interface CoverRow {
        IdCover?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }
    namespace CoverRow {
        const idProperty = "IdCover";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.Cover";
        namespace Fields {
            const IdCover: any;
            const IdProduct: any;
            const Order: any;
            const Description: any;
            const PrintName: any;
            const IdProductDescription: string;
            const IdProductCode: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace CoverService {
        const baseUrl = "MasterData/Cover";
        function Create(request: Serenity.SaveRequest<CoverRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CoverRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CoverRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CoverRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class CtForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CtForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
    }
}
declare namespace Cidob.MasterData {
    interface CtRow {
        IdCt?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }
    namespace CtRow {
        const idProperty = "IdCt";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.Ct";
        namespace Fields {
            const IdCt: any;
            const IdProduct: any;
            const Order: any;
            const Description: any;
            const PrintName: any;
            const IdProductDescription: string;
            const IdProductCode: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace CtService {
        const baseUrl = "MasterData/Ct";
        function Create(request: Serenity.SaveRequest<CtRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CtRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CtRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CtRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class DigitalForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DigitalForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
    }
}
declare namespace Cidob.MasterData {
    interface DigitalRow {
        IdDigital?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }
    namespace DigitalRow {
        const idProperty = "IdDigital";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.Digital";
        namespace Fields {
            const IdDigital: any;
            const IdProduct: any;
            const Order: any;
            const Description: any;
            const PrintName: any;
            const IdProductDescription: string;
            const IdProductCode: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace DigitalService {
        const baseUrl = "MasterData/Digital";
        function Create(request: Serenity.SaveRequest<DigitalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DigitalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DigitalRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DigitalRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class GroupForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface GroupForm {
        Description: Serenity.StringEditor;
        Enabled: Serenity.BooleanEditor;
    }
}
declare namespace Cidob.MasterData {
    interface GroupRow {
        IdBrands?: number;
        Description?: string;
        Enabled?: boolean;
    }
    namespace GroupRow {
        const idProperty = "IdBrands";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.Group";
        namespace Fields {
            const IdBrands: any;
            const Description: any;
            const Enabled: any;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace GroupService {
        const baseUrl = "MasterData/Group";
        function Create(request: Serenity.SaveRequest<GroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GroupRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GroupRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class HeelForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface HeelForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
    }
}
declare namespace Cidob.MasterData {
    interface HeelRow {
        IdHeel?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }
    namespace HeelRow {
        const idProperty = "IdHeel";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.Heel";
        namespace Fields {
            const IdHeel: any;
            const IdProduct: any;
            const Order: any;
            const Description: any;
            const PrintName: any;
            const IdProductDescription: string;
            const IdProductCode: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace HeelService {
        const baseUrl = "MasterData/Heel";
        function Create(request: Serenity.SaveRequest<HeelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<HeelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HeelRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<HeelRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class OliveForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OliveForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
    }
}
declare namespace Cidob.MasterData {
    interface OliveRow {
        IdOlive?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }
    namespace OliveRow {
        const idProperty = "IdOlive";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.Olive";
        namespace Fields {
            const IdOlive: any;
            const IdProduct: any;
            const Order: any;
            const Description: any;
            const PrintName: any;
            const IdProductDescription: string;
            const IdProductCode: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace OliveService {
        const baseUrl = "MasterData/Olive";
        function Create(request: Serenity.SaveRequest<OliveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OliveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OliveRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OliveRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductForm {
        Description: Serenity.StringEditor;
        Code: Serenity.StringEditor;
    }
}
declare namespace Cidob.MasterData {
    interface ProductRow {
        IdProduct?: number;
        Description?: string;
        Code?: string;
    }
    namespace ProductRow {
        const idProperty = "IdProduct";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.Product";
        namespace Fields {
            const IdProduct: any;
            const Description: any;
            const Code: any;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace ProductService {
        const baseUrl = "MasterData/Product";
        function Create(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class RaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RaForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
    }
}
declare namespace Cidob.MasterData {
    interface RaRow {
        IdRa?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }
    namespace RaRow {
        const idProperty = "IdRa";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.Ra";
        namespace Fields {
            const IdRa: any;
            const IdProduct: any;
            const Order: any;
            const Description: any;
            const PrintName: any;
            const IdProductDescription: string;
            const IdProductCode: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace RaService {
        const baseUrl = "MasterData/Ra";
        function Create(request: Serenity.SaveRequest<RaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RaRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RaRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class ShapeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ShapeForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
    }
}
declare namespace Cidob.MasterData {
    interface ShapeRow {
        IdShape?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }
    namespace ShapeRow {
        const idProperty = "IdShape";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.Shape";
        namespace Fields {
            const IdShape: any;
            const IdProduct: any;
            const Order: any;
            const Description: any;
            const PrintName: any;
            const IdProductDescription: string;
            const IdProductCode: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace ShapeService {
        const baseUrl = "MasterData/Shape";
        function Create(request: Serenity.SaveRequest<ShapeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShapeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShapeRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShapeRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class TemplateForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TemplateForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
    }
}
declare namespace Cidob.MasterData {
    interface TemplateRow {
        IdTemplate?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }
    namespace TemplateRow {
        const idProperty = "IdTemplate";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.Template";
        namespace Fields {
            const IdTemplate: any;
            const IdProduct: any;
            const Order: any;
            const Description: any;
            const PrintName: any;
            const IdProductDescription: string;
            const IdProductCode: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace TemplateService {
        const baseUrl = "MasterData/Template";
        function Create(request: Serenity.SaveRequest<TemplateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TemplateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TemplateRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TemplateRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class TemplateTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TemplateTypeForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
    }
}
declare namespace Cidob.MasterData {
    interface TemplateTypeRow {
        IdTemplateType?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }
    namespace TemplateTypeRow {
        const idProperty = "IdTemplateType";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.TemplateType";
        namespace Fields {
            const IdTemplateType: any;
            const IdProduct: any;
            const Order: any;
            const Description: any;
            const PrintName: any;
            const IdProductDescription: string;
            const IdProductCode: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace TemplateTypeService {
        const baseUrl = "MasterData/TemplateType";
        function Create(request: Serenity.SaveRequest<TemplateTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TemplateTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TemplateTypeRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TemplateTypeRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.MasterData {
    class TransversalArchForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TransversalArchForm {
        IdProduct: Serenity.IntegerEditor;
        Order: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        PrintName: Serenity.StringEditor;
    }
}
declare namespace Cidob.MasterData {
    interface TransversalArchRow {
        IdTransversalArch?: number;
        IdProduct?: number;
        Order?: number;
        Description?: string;
        PrintName?: string;
        IdProductDescription?: string;
        IdProductCode?: string;
    }
    namespace TransversalArchRow {
        const idProperty = "IdTransversalArch";
        const nameProperty = "Description";
        const localTextPrefix = "MasterData.TransversalArch";
        namespace Fields {
            const IdTransversalArch: any;
            const IdProduct: any;
            const Order: any;
            const Description: any;
            const PrintName: any;
            const IdProductDescription: string;
            const IdProductCode: string;
        }
    }
}
declare namespace Cidob.MasterData {
    namespace TransversalArchService {
        const baseUrl = "MasterData/TransversalArch";
        function Create(request: Serenity.SaveRequest<TransversalArchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TransversalArchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransversalArchRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransversalArchRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Cidob.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Cidob.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Cidob.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
}
declare namespace Cidob.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Cidob.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
}
declare namespace Cidob.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Cidob.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Cidob.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Cidob.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Cidob.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Cidob {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Cidob.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Cidob.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Cidob.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace Cidob.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace Cidob.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyItems;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace Cidob.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace Cidob.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace Cidob.ScriptInitialization {
}
declare namespace Cidob.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace Cidob.MasterData {
    class ArchDialog extends Serenity.EntityDialog<ArchRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ArchForm;
    }
}
declare namespace Cidob.MasterData {
    class ArchEditor extends Common.GridEditorBase<ArchRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ArchEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class ArchEditorDialog extends Common.GridEditorDialog<ArchRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ArchForm;
    }
}
declare namespace Cidob.MasterData {
    class ArchGrid extends Serenity.EntityGrid<ArchRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ArchDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class BaseDialog extends Serenity.EntityDialog<BaseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BaseForm;
        dialogOpen(): void;
    }
}
declare namespace Cidob.MasterData {
    class BaseEditor extends Common.GridEditorBase<BaseRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BaseEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class BaseEditorDialog extends Common.GridEditorDialog<BaseRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: BaseForm;
    }
}
declare namespace Cidob.MasterData {
    class BaseGrid extends Serenity.EntityGrid<BaseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BaseDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class CoverDialog extends Serenity.EntityDialog<CoverRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CoverForm;
    }
}
declare namespace Cidob.MasterData {
    class CoverEditor extends Common.GridEditorBase<CoverRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CoverEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class CoverEditorDialog extends Common.GridEditorDialog<CoverRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: CoverForm;
    }
}
declare namespace Cidob.MasterData {
    class CoverGrid extends Serenity.EntityGrid<CoverRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CoverDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class CtDialog extends Serenity.EntityDialog<CtRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CtForm;
    }
}
declare namespace Cidob.MasterData {
    class CtEditor extends Common.GridEditorBase<CtRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CtEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class CtEditorDialog extends Common.GridEditorDialog<CtRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: CtForm;
    }
}
declare namespace Cidob.MasterData {
    class CtGrid extends Serenity.EntityGrid<CtRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CtDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class DigitalDialog extends Serenity.EntityDialog<DigitalRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DigitalForm;
    }
}
declare namespace Cidob.MasterData {
    class DigitalEditor extends Common.GridEditorBase<DigitalRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DigitalEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class DigitalEditorDialog extends Common.GridEditorDialog<DigitalRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: DigitalForm;
    }
}
declare namespace Cidob.MasterData {
    class DigitalGrid extends Serenity.EntityGrid<DigitalRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DigitalDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class GroupDialog extends Serenity.EntityDialog<GroupRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: GroupForm;
    }
}
declare namespace Cidob.MasterData {
    class GroupEditor extends Common.GridEditorBase<GroupRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GroupEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class GroupEditorDialog extends Common.GridEditorDialog<GroupRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: GroupForm;
    }
}
declare namespace Cidob.MasterData {
    class GroupGrid extends Serenity.EntityGrid<GroupRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GroupDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class HeelDialog extends Serenity.EntityDialog<HeelRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: HeelForm;
    }
}
declare namespace Cidob.MasterData {
    class HeelEditor extends Common.GridEditorBase<HeelRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof HeelEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class HeelEditorDialog extends Common.GridEditorDialog<HeelRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: HeelForm;
    }
}
declare namespace Cidob.MasterData {
    class HeelGrid extends Serenity.EntityGrid<HeelRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof HeelDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class OliveDialog extends Serenity.EntityDialog<OliveRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OliveForm;
    }
}
declare namespace Cidob.MasterData {
    class OliveEditor extends Common.GridEditorBase<OliveRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OliveEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class OliveEditorDialog extends Common.GridEditorDialog<OliveRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: OliveForm;
    }
}
declare namespace Cidob.MasterData {
    class OliveGrid extends Serenity.EntityGrid<OliveRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OliveDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
    }
}
declare namespace Cidob.MasterData {
    class ProductEditor extends Common.GridEditorBase<ProductRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class ProductEditorDialog extends Common.GridEditorDialog<ProductRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ProductForm;
    }
}
declare namespace Cidob.MasterData {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class RaDialog extends Serenity.EntityDialog<RaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RaForm;
    }
}
declare namespace Cidob.MasterData {
    class RaEditor extends Common.GridEditorBase<RaRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RaEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class RaEditorDialog extends Common.GridEditorDialog<RaRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: RaForm;
    }
}
declare namespace Cidob.MasterData {
    class RaGrid extends Serenity.EntityGrid<RaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class ShapeDialog extends Serenity.EntityDialog<ShapeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ShapeForm;
    }
}
declare namespace Cidob.MasterData {
    class ShapeEditor extends Common.GridEditorBase<ShapeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ShapeEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class ShapeEditorDialog extends Common.GridEditorDialog<ShapeRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ShapeForm;
    }
}
declare namespace Cidob.MasterData {
    class ShapeGrid extends Serenity.EntityGrid<ShapeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ShapeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class TemplateDialog extends Serenity.EntityDialog<TemplateRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TemplateForm;
    }
}
declare namespace Cidob.MasterData {
    class TemplateEditor extends Common.GridEditorBase<TemplateRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TemplateEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class TemplateEditorDialog extends Common.GridEditorDialog<TemplateRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: TemplateForm;
    }
}
declare namespace Cidob.MasterData {
    class TemplateGrid extends Serenity.EntityGrid<TemplateRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TemplateDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class TemplateTypeDialog extends Serenity.EntityDialog<TemplateTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TemplateTypeForm;
    }
}
declare namespace Cidob.MasterData {
    class TemplateTypeEditor extends Common.GridEditorBase<TemplateTypeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TemplateTypeEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class TemplateTypeEditorDialog extends Common.GridEditorDialog<TemplateTypeRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: TemplateTypeForm;
    }
}
declare namespace Cidob.MasterData {
    class TemplateTypeGrid extends Serenity.EntityGrid<TemplateTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TemplateTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class TransversalArchDialog extends Serenity.EntityDialog<TransversalArchRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TransversalArchForm;
    }
}
declare namespace Cidob.MasterData {
    class TransversalArchEditor extends Common.GridEditorBase<TransversalArchRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransversalArchEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.MasterData {
    class TransversalArchEditorDialog extends Common.GridEditorDialog<TransversalArchRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: TransversalArchForm;
    }
}
declare namespace Cidob.MasterData {
    class TransversalArchGrid extends Serenity.EntityGrid<TransversalArchRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransversalArchDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Cidob.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
