"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = void 0;
const mongoose = require("mongoose");
exports.CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    whatsapp: { type: String, required: false },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    serviceId: { type: String, required: true },
    planId: { type: String, required: true },
    invoice: { type: String, required: true },
    comment: { type: String, required: false },
    validateDate: { type: Date, required: false },
    sendNotificationOn: { type: Object, required: false },
    userId: { type: String, required: true },
    createAt: { type: Date, required: true },
    updateAt: { type: Date, required: true },
    deleted: { type: Boolean, required: true, default: false },
});
//# sourceMappingURL=customer.schema.js.map