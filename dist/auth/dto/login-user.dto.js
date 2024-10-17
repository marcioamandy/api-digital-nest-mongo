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
exports.LoginUserDTO = void 0;
const class_validator_1 = require("class-validator");
class LoginUserDTO {
}
exports.LoginUserDTO = LoginUserDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo senha deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo senha não pode ser vazio' }),
    (0, class_validator_1.IsStrongPassword)({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
    }, {
        message: 'A senha deve conter pelo menos 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 símbolo',
    }),
    __metadata("design:type", String)
], LoginUserDTO.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'O campo email deve ser um endereço de email válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo email não pode ser vazio' }),
    (0, class_validator_1.MaxLength)(200, {
        message: 'O campo email deve ter no máximo 200 caracteres',
    }),
    __metadata("design:type", String)
], LoginUserDTO.prototype, "email", void 0);
//# sourceMappingURL=login-user.dto.js.map