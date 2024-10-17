"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan = void 0;
class Plan {
    constructor(data) {
        this.name = data.name;
        this.value = data.value;
        this.userId = data.userId;
        this.createAt = data.createAt;
        this.updateAt = data.updateAt;
        this.deleted = data.deleted;
    }
}
exports.Plan = Plan;
//# sourceMappingURL=plan.entity.js.map