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
exports.UpdateCustomerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_customer_dto_1 = require("./create-customer.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class UpdateCustomerDto extends (0, mapped_types_1.PartialType)(create_customer_dto_1.CreateCustomerDto) {
}
exports.UpdateCustomerDto = UpdateCustomerDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo nome deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo nome não pode ser vazio' }),
    (0, class_validator_1.MinLength)(4, { message: 'O campo nome deve ter pelo menos 4 caracteres' }),
    (0, class_validator_1.MaxLength)(50, { message: 'O campo nome deve ter no máximo 50 caracteres' }),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.whatsapp !== undefined && o.whatsapp !== null && o.whatsapp !== ''),
    (0, class_validator_1.IsString)({ message: 'O campo whatsapp deve ser uma string' }),
    (0, class_validator_1.Matches)(/^\d{9,11}$/, {
        message: 'O campo whatsapp deve ter entre 9 e 11 números',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "whatsapp", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'O campo login deve ser um endereço de email válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo login não pode ser vazio' }),
    (0, class_validator_1.MaxLength)(200, {
        message: 'O campo login deve ter no máximo 200 caracteres',
    }),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "login", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo senha deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo senha não pode ser vazio' }),
    (0, class_validator_1.MinLength)(8, { message: 'A senha deve conter pelo menos 8 caracteres' }),
    (0, class_validator_1.MaxLength)(20, { message: 'A senha deve conter no máximo 20 caracteres' }),
    (0, class_validator_1.Matches)(/(?=.*[A-Z])/, {
        message: 'A senha deve conter pelo menos 1 letra maiúscula',
    }),
    (0, class_validator_1.Matches)(/(?=.*[a-z])/, {
        message: 'A senha deve conter pelo menos 1 letra minúscula',
    }),
    (0, class_validator_1.Matches)(/(?=.*[0-9])/, {
        message: 'A senha deve conter pelo menos 1 número',
    }),
    (0, class_validator_1.Matches)(/(?=.*[!@#$%^&*])/, {
        message: 'A senha deve conter pelo menos 1 símbolo',
    }),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo de serviço deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo serviço não pode ser vazio' }),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "serviceId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo de plano deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo plano não pode ser vazio' }),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "planId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo fatura não pode ser vazio' }),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "invoice", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.comment !== undefined && o.comment !== null && o.comment !== ''),
    (0, class_validator_1.IsString)({ message: 'O campo comentário deve ser uma string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "comment", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'O campo data de validação deve ser uma data válida' }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateCustomerDto.prototype, "validateDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateCustomerDto.prototype, "sendNotificationOn", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O campo userId deve ser uma string' }),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "userId", void 0);
//# sourceMappingURL=update-customer.dto.js.map