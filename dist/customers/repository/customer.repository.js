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
exports.CustomerRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CustomerRepository = class CustomerRepository {
    constructor(customerModel) {
        this.customerModel = customerModel;
    }
    async create(doc) {
        try {
            const result = await new this.customerModel(doc).save();
            return result.id;
        }
        catch (error) {
            console.error('Erro ao criar cliente:', error);
            throw new common_1.InternalServerErrorException('Falha ao criar cliente');
        }
    }
    async findAll() {
        try {
            return await this.customerModel.find({ deleted: false });
        }
        catch (error) {
            console.error('Erro ao recuperar clientes:', error);
            throw new common_1.InternalServerErrorException('Falha ao recuperar clientes');
        }
    }
    async verificar(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const customer = await this.customerModel.findOne({
                _id: id,
                deleted: false,
            });
            if (!customer) {
                throw new common_1.NotFoundException(`Cliente com o ID ${id} não encontrado!`);
            }
            return customer;
        }
        catch (error) {
            console.error(`Erro ao recuperar cliente com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao recuperar cliente ${id}`);
        }
    }
    async findOne(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const customer = await this.customerModel.findOne({
                _id: id,
                deleted: false,
            });
            if (!customer) {
                throw new common_1.NotFoundException(`Cliente com o ID ${id} não encontrado!`);
            }
            return customer;
        }
        catch (error) {
            console.error(`Erro ao recuperar cliente com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao recuperar cliente ${id}`);
        }
    }
    async update(id, updateCustomerDto) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const customer = await this.customerModel.findById(id);
            if (!customer) {
                throw new common_1.NotFoundException(`Cliente com o ID ${id} não encontrado!`);
            }
            if (customer.deleted) {
                throw new common_1.BadRequestException(`Não é possível alterar um cliente que está marcado como deletado.`);
            }
            const updatedCustomer = await this.customerModel.findByIdAndUpdate(id, {
                name: updateCustomerDto.name,
                whatsapp: updateCustomerDto.whatsapp,
                login: updateCustomerDto.login,
                password: updateCustomerDto.password,
                serviceId: updateCustomerDto.serviceId,
                planId: updateCustomerDto.planId,
                invoice: updateCustomerDto.invoice,
                comment: updateCustomerDto.comment,
                validateDate: updateCustomerDto.validateDate,
                sendNotificationOn: updateCustomerDto.sendNotificationOn,
                userId: updateCustomerDto.userId,
                updateAt: new Date(),
            }, { new: true });
            if (!updatedCustomer) {
                throw new common_1.NotFoundException(`Cliente com o ID ${id} não encontrado!`);
            }
            return updatedCustomer;
        }
        catch (error) {
            console.error(`Erro ao alterar o cliente com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao alterar cliente ${id}`);
        }
    }
    async delete(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const result = await this.customerModel.updateOne({ _id: id }, {
                deleted: true,
                updateAt: new Date(),
            });
            if (result.modifiedCount === 0) {
                throw new common_1.NotFoundException(`Cliente com o ID ${id} não encontrado!`);
            }
            else {
                return true;
            }
        }
        catch (error) {
            console.error(`Erro ao deletar o cliente com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Falha ao deletar cliente');
        }
    }
    isValidObjectId(id) {
        return /^[0-9a-fA-F]{24}$/.test(id);
    }
};
exports.CustomerRepository = CustomerRepository;
exports.CustomerRepository = CustomerRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Customer')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CustomerRepository);
//# sourceMappingURL=customer.repository.js.map