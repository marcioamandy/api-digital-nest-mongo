"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const open_wa_service_1 = require("./open-wa/open-wa.service");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.useGlobalPipes(new common_1.ValidationPipe());
        await app.listen(3000, () => {
            console.log('API rodando na porta 3000');
        });
        console.log('Aplicação iniciada com sucesso!');
        const openWASession = app.get(open_wa_service_1.OpenWASession);
        await openWASession.startSession();
        console.log('Sessão do WhatsApp iniciada com sucesso!');
    }
    catch (error) {
        console.error('Erro ao iniciar a aplicação:', error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map