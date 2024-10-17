"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesModule = void 0;
const common_1 = require("@nestjs/common");
const services_service_1 = require("./service/services.service");
const services_controller_1 = require("./services.controller");
const services_repository_1 = require("./repository/services.repository");
const mongoose_1 = require("@nestjs/mongoose");
const service_schema_1 = require("./entities/service.schema");
const auth_module_1 = require("../auth/auth.module");
const jwt_strategy_1 = require("../auth/jwt/jwt.strategy");
const jwt_1 = require("@nestjs/jwt");
let ServicesModule = class ServicesModule {
};
exports.ServicesModule = ServicesModule;
exports.ServicesModule = ServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Service',
                    schema: service_schema_1.ServiceSchema,
                },
            ]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_KEY,
                signOptions: { expiresIn: '7d' },
            }),
        ],
        controllers: [services_controller_1.ServicesController],
        providers: [services_service_1.ServicesService, services_repository_1.ServicesRepository, jwt_strategy_1.JwtStrategy],
    })
], ServicesModule);
//# sourceMappingURL=services.module.js.map