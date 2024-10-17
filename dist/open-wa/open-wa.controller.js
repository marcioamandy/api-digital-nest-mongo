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
exports.OpenWAController = void 0;
const common_1 = require("@nestjs/common");
const open_wa_service_1 = require("./open-wa.service");
const wa_automate_1 = require("@open-wa/wa-automate");
let OpenWAController = class OpenWAController {
    constructor(openWASession) {
        this.openWASession = openWASession;
    }
    async getQRCode(res) {
        try {
            wa_automate_1.ev.on('qr.**', async (image) => {
                const imageData = image.split(',')[1];
                const imageBuffer = Buffer.from(imageData, 'base64');
                res.setHeader('Content-Type', 'image/png');
                res.send(imageBuffer);
            });
            await this.openWASession.startSession();
        }
        catch (err) {
            console.error('Erro ao iniciar a sessão Open-WA:', err);
            res.status(500).send('Erro ao obter o código QR.');
        }
    }
};
exports.OpenWAController = OpenWAController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OpenWAController.prototype, "getQRCode", null);
exports.OpenWAController = OpenWAController = __decorate([
    (0, common_1.Controller)('qr-code'),
    __metadata("design:paramtypes", [open_wa_service_1.OpenWASession])
], OpenWAController);
//# sourceMappingURL=open-wa.controller.js.map