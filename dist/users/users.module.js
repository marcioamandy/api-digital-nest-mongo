"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./service/users.service");
const users_controller_1 = require("./users.controller");
const users_repository_1 = require("./repository/users.repository");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./entities/user.schema");
const auth_module_1 = require("../auth/auth.module");
const jwt_strategy_1 = require("../auth/jwt/jwt.strategy");
const jwt_1 = require("@nestjs/jwt");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'User',
                    schema: user_schema_1.UserSchema,
                },
            ]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_KEY,
                signOptions: { expiresIn: '7d' },
            }),
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, users_repository_1.UserRepository, jwt_strategy_1.JwtStrategy],
        exports: [users_service_1.UsersService, users_repository_1.UserRepository, mongoose_1.MongooseModule],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map