"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(data) {
        this.name = data.name;
        this.whatsapp = data.whatsapp;
        this.login = data.login;
        this.password = data.password;
        this.serviceId = data.serviceId;
        this.planId = data.planId;
        this.invoice = data.invoice;
        this.comment = data.comment;
        this.validateDate = data.validateDate;
        this.sendNotificationOn = data.sendNotificationOn;
        this.userId = data.userId;
        this.createAt = data.createAt;
        this.updateAt = data.updateAt;
        this.deleted = data.deleted;
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.entity.js.map