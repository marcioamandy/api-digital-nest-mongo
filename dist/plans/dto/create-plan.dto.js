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
exports.CreatePlanDto = void 0;
const mongoose_1 = require("mongoose");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreatePlanDto {
}
exports.CreatePlanDto = CreatePlanDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo nome tem que ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo nome não pode ser vazio' }),
    (0, class_validator_1.MinLength)(4, { message: 'O campo nome deve ter pelo menos 4 caracteres' }),
    (0, class_validator_1.MaxLength)(50, { message: 'O campo nome deve ter no máximo 50 caracteres' }),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'O campo valor tem que ser um número' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo valor não pode ser vazio' }),
    (0, class_transformer_1.Type)(() => mongoose_1.default.Types.Decimal128),
    __metadata("design:type", mongoose_1.default.Types.Decimal128)
], CreatePlanDto.prototype, "value", void 0);
//# sourceMappingURL=create-plan.dto.js.map