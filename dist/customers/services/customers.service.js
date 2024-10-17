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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const customer_repository_1 = require("../repository/customer.repository");
const customer_entity_1 = require("../entities/customer.entity");
let CustomerService = class CustomerService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createCustomerDto, userId) {
        try {
            const entity = new customer_entity_1.Customer({
                id: null,
                name: createCustomerDto.name,
                whatsapp: createCustomerDto.whatsapp,
                login: createCustomerDto.login,
                password: createCustomerDto.password,
                serviceId: createCustomerDto.serviceId,
                planId: createCustomerDto.planId,
                invoice: createCustomerDto.invoice,
                comment: createCustomerDto.comment,
                validateDate: createCustomerDto.validateDate,
                sendNotificationOn: createCustomerDto.sendNotificationOn,
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
    async update(id, updateCustomerDto) {
        return await this.repo.update(id, updateCustomerDto);
    }
    async delete(id) {
        return await this.repo.delete(id);
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [customer_repository_1.CustomerRepository])
], CustomerService);
//# sourceMappingURL=customers.service.js.map