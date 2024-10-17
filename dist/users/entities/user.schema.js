"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
exports.UserSchema = new mongoose.Schema({
    status: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    whatsapp: { type: String, unique: true, sparse: true, required: false },
    email: { type: String, unique: true, required: true },
    registration: { type: String, unique: true, sparse: true, required: false },
    company: { type: String, required: false, sparse: true },
    type: { type: String, required: true },
    email_verified: { type: Boolean, required: true, default: false },
    whats_verified: { type: Boolean, required: true, default: false },
    createAt: { type: Date, required: true },
    updateAt: { type: Date, required: true },
    deleted: { type: Boolean, required: true, default: false },
}, {
    timestamps: true,
});
async function hashPassword(next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashed = await bcrypt.hash(this.get('password'), 10);
        this.set('password', hashed);
        return next();
    }
    catch (err) {
        return next(err);
    }
}
exports.UserSchema.pre('save', hashPassword);
exports.UserSchema.pre('findOneAndUpdate', async function (next) {
    const update = this.getUpdate();
    if (update && update['password']) {
        const hashed = await bcrypt.hash(update['password'], 10);
        update['password'] = hashed;
    }
    next();
});
exports.default = exports.UserSchema;
//# sourceMappingURL=user.schema.js.map