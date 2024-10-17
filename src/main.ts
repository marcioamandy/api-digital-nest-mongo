import { OpenWASession } from './open-wa/open-wa.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as crypto from 'crypto';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

     await app.listen(3000, () => {
       console.log('API rodando na porta 3000');
     });
     console.log('Aplicação iniciada com sucesso!');

     //const openWASession = app.get(OpenWASession);
     //await openWASession.startSession();
     //console.log('Sessão do WhatsApp iniciada com sucesso!');
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error);
  }
}
bootstrap();
