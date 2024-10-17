"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSchema = void 0;
const mongoose = require("mongoose");
exports.ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cost: { type: mongoose.Types.Decimal128, required: true },
    userId: { type: String, required: true },
    createAt: { type: Date, required: true },
    updateAt: { type: Date, required: true },
    deleted: { type: Boolean, required: true, default: false },
});
//# sourceMappingURL=service.schema.js.map