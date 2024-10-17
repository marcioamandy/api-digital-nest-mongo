"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenWASession = void 0;
const common_1 = require("@nestjs/common");
const wa_automate_1 = require("@open-wa/wa-automate");
let OpenWASession = class OpenWASession {
    async startSession(sessionId) {
        try {
            this.client = await (0, wa_automate_1.create)({
                sessionId: sessionId,
                multiDevice: true,
                authTimeout: 0,
                blockCrashLogs: true,
                disableSpins: true,
                headless: false,
                hostNotificationLang: wa_automate_1.NotificationLanguage.PTBR,
                logConsole: false,
                qrLogSkip: false,
                autoRefresh: true,
                popup: 8000,
                qrTimeout: 0,
                executablePath: '/usr/local/bin/chromium',
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
            });
            this.client.onStateChanged((state) => {
                console.log('Estado do cliente:', state);
                if (state === 'CONFLICT' || state === 'UNLAUNCHED')
                    this.client.forceRefocus();
            });
            console.log('Sessão do Open-WA iniciada com sucesso.');
        }
        catch (error) {
            console.error('Erro ao iniciar a sessão do Open-WA:', error);
        }
    }
};
exports.OpenWASession = OpenWASession;
exports.OpenWASession = OpenWASession = __decorate([
    (0, common_1.Injectable)()
], OpenWASession);
//# sourceMappingURL=open-wa.service.js.map