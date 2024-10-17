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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PlanRepository = class PlanRepository {
    constructor(planModel) {
        this.planModel = planModel;
    }
    async create(doc) {
        try {
            const result = await new this.planModel(doc).save();
            return result.id;
        }
        catch (error) {
            console.error('Erro ao criar plano:', error);
            throw new common_1.InternalServerErrorException('Falha ao criar plano');
        }
    }
    async findAll() {
        try {
            return await this.planModel.find({ deleted: false });
        }
        catch (error) {
            console.error('Erro ao recuperar planos:', error);
            throw new common_1.InternalServerErrorException('Falha ao recuperar planos');
        }
    }
    async verificar(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const plan = await this.planModel.findOne({
                _id: id,
                deleted: false,
            });
            if (!plan) {
                throw new common_1.NotFoundException(`Plano com o ID ${id} não encontrado!`);
            }
            return plan;
        }
        catch (error) {
            console.error(`Erro ao recuperar plano com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao recuperar plano ${id}`);
        }
    }
    async findOne(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const plan = await this.planModel.findOne({
                _id: id,
                deleted: false,
            });
            if (!plan) {
                throw new common_1.NotFoundException(`Plano com o ID ${id} não encontrado!`);
            }
            return plan;
        }
        catch (error) {
            console.error(`Erro ao recuperar plano com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao recuperar plano ${id}`);
        }
    }
    async update(id, updatePlanDto) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const plan = await this.planModel.findById(id);
            if (!plan) {
                throw new common_1.NotFoundException(`Plano com o ID ${id} não encontrado!`);
            }
            if (plan.deleted) {
                throw new common_1.BadRequestException(`Não é possível alterar um plano que está marcado como deletado.`);
            }
            const updatedPlan = await this.planModel.findByIdAndUpdate(id, {
                name: updatePlanDto.name,
                cost: updatePlanDto.value,
                updateAt: new Date(),
            }, { new: true });
            if (!updatedPlan) {
                throw new common_1.NotFoundException(`Plano com o ID ${id} não encontrado!`);
            }
            return updatedPlan;
        }
        catch (error) {
            console.error(`Erro ao alterar o plano com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao alterar plano ${id}`);
        }
    }
    async delete(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const result = await this.planModel.updateOne({ _id: id }, {
                deleted: true,
                updateAt: new Date(),
            });
            if (result.modifiedCount === 0) {
                throw new common_1.NotFoundException(`Plano com o ID ${id} não encontrado!`);
            }
            else {
                return true;
            }
        }
        catch (error) {
            console.error(`Erro ao deletar o plano com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Falha ao deletar plano');
        }
    }
    isValidObjectId(id) {
        return /^[0-9a-fA-F]{24}$/.test(id);
    }
};
exports.PlanRepository = PlanRepository;
exports.PlanRepository = PlanRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Plan')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PlanRepository);
//# sourceMappingURL=plan.repository.js.map