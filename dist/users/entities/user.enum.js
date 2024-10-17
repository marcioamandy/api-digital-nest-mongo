"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserType = exports.UserStatus = void 0;
var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "A";
    UserStatus["Inactive"] = "I";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var UserType;
(function (UserType) {
    UserType["Administrative"] = "A";
    UserType["Visitor"] = "V";
    UserType["Publisher"] = "P";
})(UserType || (exports.UserType = UserType = {}));
//# sourceMappingURL=user.enum.js.map