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
exports.ServicesRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ServicesRepository = class ServicesRepository {
    constructor(serviceModel) {
        this.serviceModel = serviceModel;
    }
    async create(doc) {
        try {
            const result = await new this.serviceModel(doc).save();
            return result.id;
        }
        catch (error) {
            console.error('Erro ao criar serviço:', error);
            throw new common_1.InternalServerErrorException('Falha ao criar serviço');
        }
    }
    async findAll() {
        try {
            return await this.serviceModel.find({ deleted: false });
        }
        catch (error) {
            console.error('Erro ao recuperar serviços:', error);
            throw new common_1.InternalServerErrorException('Falha ao recuperar serviços');
        }
    }
    async verificar(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const service = await this.serviceModel.findOne({
                _id: id,
                deleted: false,
            });
            if (!service) {
                throw new common_1.NotFoundException(`Serviço com o ID ${id} não encontrado!`);
            }
            return service;
        }
        catch (error) {
            console.error(`Erro ao recuperar serviço com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao recuperar serviço ${id}`);
        }
    }
    async findOne(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const service = await this.serviceModel.findOne({
                _id: id,
                deleted: false,
            });
            if (!service) {
                throw new common_1.NotFoundException(`Serviço com o ID ${id} não encontrado!`);
            }
            return service;
        }
        catch (error) {
            console.error(`Erro ao recuperar serviço com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao recuperar serviço ${id}`);
        }
    }
    async update(id, updateServiceDto) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const service = await this.serviceModel.findById(id);
            if (!service) {
                throw new common_1.NotFoundException(`Serviço com o ID ${id} não encontrado!`);
            }
            if (service.deleted) {
                throw new common_1.BadRequestException(`Não é possível alterar um serviço que está marcado como deletado.`);
            }
            const updatedService = await this.serviceModel.findByIdAndUpdate(id, {
                name: updateServiceDto.name,
                cost: updateServiceDto.cost,
                updateAt: new Date(),
            }, { new: true });
            if (!updatedService) {
                throw new common_1.NotFoundException(`Serviço com o ID ${id} não encontrado!`);
            }
            return updatedService;
        }
        catch (error) {
            console.error(`Erro ao alterar o serviço com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao alterar serviço ${id}`);
        }
    }
    async delete(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const result = await this.serviceModel.updateOne({ _id: id }, {
                deleted: true,
                updateAt: new Date(),
            });
            if (result.modifiedCount === 0) {
                throw new common_1.NotFoundException(`Serviço com o ID ${id} não encontrado!`);
            }
            else {
                return true;
            }
        }
        catch (error) {
            console.error(`Erro ao deletar o serviço com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Falha ao deletar serviço');
        }
    }
    isValidObjectId(id) {
        return /^[0-9a-fA-F]{24}$/.test(id);
    }
};
exports.ServicesRepository = ServicesRepository;
exports.ServicesRepository = ServicesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Service')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ServicesRepository);
//# sourceMappingURL=services.repository.js.map