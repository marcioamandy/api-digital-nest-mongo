"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(data) {
        this.name = data.name;
        this.password = data.password;
        this.whatsapp = data.whatsapp;
        this.email = data.email;
        this.registration = data.registration;
        this.company = data.company;
        this.status = data.status;
        this.type = data.type;
        this.email_verified = data.email_verified;
        this.whats_verified = data.whats_verified;
        this.createAt = data.createAt;
        this.updateAt = data.updateAt;
        this.deleted = data.deleted;
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map