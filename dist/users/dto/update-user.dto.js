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
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
const class_validator_1 = require("class-validator");
const user_enum_1 = require("../entities/user.enum");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo nome deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo nome não pode ser vazio' }),
    (0, class_validator_1.MinLength)(4, { message: 'O campo nome deve ter pelo menos 4 caracteres' }),
    (0, class_validator_1.MaxLength)(50, { message: 'O campo nome deve ter no máximo 50 caracteres' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "name", void 0);
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
], UpdateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo whatsapp deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo whatsapp não pode ser vazio' }),
    (0, class_validator_1.Matches)(/^\d{9,11}$/, {
        message: 'O campo whatsapp deve ter entre 9 e 11 números',
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "whatsapp", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'O campo email deve ser um endereço de email válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo email não pode ser vazio' }),
    (0, class_validator_1.MaxLength)(200, {
        message: 'O campo email deve ter no máximo 200 caracteres',
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo matrícula deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo matrícula não pode ser vazio' }),
    (0, class_validator_1.MinLength)(4, {
        message: 'O campo matrícula deve ter pelo menos 4 caracteres',
    }),
    (0, class_validator_1.MaxLength)(20, {
        message: 'O campo matrícula deve ter no máximo 20 caracteres',
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "registration", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo empresa deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo empresa não pode ser vazio' }),
    (0, class_validator_1.MinLength)(4, { message: 'O campo empresa deve ter pelo menos 4 caracteres' }),
    (0, class_validator_1.MaxLength)(50, {
        message: 'O campo empresa deve ter no máximo 50 caracteres',
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo status precisa ser selecionado' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo tipo precisa ser selecionado' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "type", void 0);
//# sourceMappingURL=update-user.dto.js.map