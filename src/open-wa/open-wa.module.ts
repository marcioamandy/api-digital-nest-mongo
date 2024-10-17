import { forwardRef, Module } from '@nestjs/common';
import { OpenWASession } from './open-wa.service';
import { OpenWAController } from './open-wa.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [OpenWAController],
  providers: [OpenWASession],
  exports: [OpenWASession],
})
export class OpenWAModule {}
