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
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const customers_service_1 = require("./services/customers.service");
const create_customer_dto_1 = require("./dto/create-customer.dto");
const update_customer_dto_1 = require("./dto/update-customer.dto");
const roles_decorator_1 = require("../auth/jwt/roles.decorator");
const auth_guard_1 = require("@nestjs/passport/dist/auth.guard");
const role_guard_1 = require("../auth/jwt/role.guard");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    create(createCustomerDto, request) {
        const userId = request.user.id;
        return this.customerService.create(createCustomerDto, userId);
    }
    findAll() {
        return this.customerService.findAll();
    }
    findOne(id) {
        return this.customerService.findOne(id);
    }
    update(id, updateCustomerDto) {
        return this.customerService.update(id, updateCustomerDto);
    }
    delete(id) {
        return this.customerService.delete(id);
    }
};
exports.CustomerController = CustomerController;
__decorate([
    (0, roles_decorator_1.Roles)('default'),
    (0, common_1.UseGuards)((0, auth_guard_1.AuthGuard)('jwt'), role_guard_1.RoleGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto, Object]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)('default'),
    (0, common_1.UseGuards)((0, auth_guard_1.AuthGuard)('jwt'), role_guard_1.RoleGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)('default'),
    (0, common_1.UseGuards)((0, auth_guard_1.AuthGuard)('jwt'), role_guard_1.RoleGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)('default'),
    (0, common_1.UseGuards)((0, auth_guard_1.AuthGuard)('jwt'), role_guard_1.RoleGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_customer_dto_1.UpdateCustomerDto]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)('default'),
    (0, common_1.UseGuards)((0, auth_guard_1.AuthGuard)('jwt'), role_guard_1.RoleGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "delete", null);
exports.CustomerController = CustomerController = __decorate([
    (0, common_1.Controller)('customers'),
    __metadata("design:paramtypes", [customers_service_1.CustomerService])
], CustomerController);
//# sourceMappingURL=customers.controller.js.map