namespace Cidob.Authorization {
    export declare let userDefinition: ScriptUserDefinition;

    Object.defineProperty(Authorization, 'userDefinition', {
        get: function () {
            return Q.getRemoteData('UserData');
        }
    });

    export function hasPermission(permissionKey: string) {
        let ud = userDefinition;
        return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
    }
    export function getUserId() {
        return 0;
        //return userDefinition.UserId;
    }
}