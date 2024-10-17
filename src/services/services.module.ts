import { Module, forwardRef } from '@nestjs/common';
import { ServicesService } from './service/services.service';
import { ServicesController } from './services.controller';
import { ServicesRepository } from './repository/services.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceSchema } from './entities/service.schema';
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from 'src/auth/jwt/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Service',
        schema: ServiceSchema,
      },
    ]),
    forwardRef(() => AuthModule),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [ServicesController],
  providers: [ServicesService, ServicesRepository, JwtStrategy],
})
export class ServicesModule {}
