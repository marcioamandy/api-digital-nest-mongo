"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const services_repository_1 = require("../repository/services.repository");
const service_entity_1 = require("../entities/service.entity");
let ServicesService = class ServicesService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createServiceDto, userId) {
        try {
            const entity = new service_entity_1.Service({
                id: null,
                name: createServiceDto.name,
                cost: createServiceDto.cost,
                userId: userId,
                createAt: new Date(),
                updateAt: new Date(),
                deleted: false,
            });
            return await this.repo.create(entity);
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        return await this.repo.findAll();
    }
    async findOne(id) {
        return await this.repo.findOne(id);
    }
    async update(id, updateServiceDto) {
        return await this.repo.update(id, updateServiceDto);
    }
    async delete(id) {
        return await this.repo.delete(id);
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_repository_1.ServicesRepository])
], ServicesService);
//# sourceMappingURL=services.service.js.map