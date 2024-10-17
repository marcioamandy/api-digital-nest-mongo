import { Injectable } from '@nestjs/common';
import { create, Client, NotificationLanguage } from '@open-wa/wa-automate';

@Injectable()
export class OpenWASession {
  private client: Client;

  async startSession() {
    try {
      this.client = await create({
        sessionId: 'session',
        multiDevice: true,
        authTimeout: 0,
        blockCrashLogs: true,
        disableSpins: true,
        headless: false,
        hostNotificationLang: NotificationLanguage.PTBR,
        logConsole: true,
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
    } catch (error) {
      console.error('Erro ao iniciar a sessão do Open-WA:', error);
    }
  }
}
