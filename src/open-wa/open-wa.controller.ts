import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { OpenWASession } from './open-wa.service';
import { ev } from '@open-wa/wa-automate';
import { Roles } from 'src/auth/jwt/roles.decorator';
import { RoleGuard } from '../auth/jwt/role.guard';

@Controller('qr-code')
export class OpenWAController {
  constructor(private readonly openWASession: OpenWASession) {}

  @UseGuards(RoleGuard)
  @Roles('default')
  @Get()
  async getQRCode(@Res() res: Response, @Req() req) {
    try {
      ev.on('qr.**', async (image) => {
        const imageData = image.split(',')[1];
        const imageBuffer = Buffer.from(imageData, 'base64');

        res.setHeader('Content-Type', 'image/png');
        res.send(imageBuffer);
      });

      await this.openWASession.startSession(req.user.id);  
    } catch (err) {
      console.error('Erro ao iniciar a sessão Open-WA:', err);
      res.status(500).send('Erro ao obter o código QR.');
    }
  }
}
