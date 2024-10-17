"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
class Service {
    constructor(data) {
        this.name = data.name;
        this.cost = data.cost;
        this.userId = data.userId;
        this.createAt = data.createAt;
        this.updateAt = data.updateAt;
        this.deleted = data.deleted;
    }
}
exports.Service = Service;
//# sourceMappingURL=service.entity.js.map