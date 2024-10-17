"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const services_module_1 = require("./services/services.module");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
require("dotenv/config");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const plans_module_1 = require("./plans/plans.module");
const customers_module_1 = require("./customers/customers.module");
const open_wa_module_1 = require("./open-wa/open-wa.module");
const open_wa_controller_1 = require("./open-wa/open-wa.controller");
const open_wa_service_1 = require("./open-wa/open-wa.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI, {
                autoCreate: true,
            }),
            services_module_1.ServicesModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            plans_module_1.PlanModule,
            customers_module_1.CustomersModule,
            open_wa_module_1.OpenWAModule,
        ],
        controllers: [app_controller_1.AppController, open_wa_controller_1.OpenWAController],
        providers: [app_service_1.AppService, open_wa_service_1.OpenWASession],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map