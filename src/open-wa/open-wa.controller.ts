import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { OpenWASession } from './open-wa.service';
import { ev } from '@open-wa/wa-automate';

@Controller('qr-code')
export class OpenWAController {
  constructor(private readonly openWASession: OpenWASession) {}

  @Get()
  async getQRCode(@Res() res: Response) {
    try {
      ev.on('qr.**', async (image) => {
        const imageData = image.split(',')[1];
        const imageBuffer = Buffer.from(imageData, 'base64');

        res.setHeader('Content-Type', 'image/png');
        res.send(imageBuffer);
      });

      await this.openWASession.startSession();
    } catch (err) {
      console.error('Erro ao iniciar a sessão Open-WA:', err);
      res.status(500).send('Erro ao obter o código QR.');
    }
  }
}
