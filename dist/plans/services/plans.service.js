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
exports.PlanService = void 0;
const common_1 = require("@nestjs/common");
const plan_repository_1 = require("../repository/plan.repository");
const plan_entity_1 = require("../entities/plan.entity");
let PlanService = class PlanService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createPlanDto, userId) {
        try {
            const entity = new plan_entity_1.Plan({
                id: null,
                name: createPlanDto.name,
                value: createPlanDto.value,
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
    async update(id, updatePlanDto) {
        return await this.repo.update(id, updatePlanDto);
    }
    async delete(id) {
        return await this.repo.delete(id);
    }
};
exports.PlanService = PlanService;
exports.PlanService = PlanService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [plan_repository_1.PlanRepository])
], PlanService);
//# sourceMappingURL=plans.service.js.map