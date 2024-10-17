import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import 'dotenv/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PlanModule } from './plans/plans.module';
import { CustomersModule } from './customers/customers.module';
import { OpenWAModule } from './open-wa/open-wa.module';
import { OpenWAController } from './open-wa/open-wa.controller';
import { OpenWASession } from './open-wa/open-wa.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      autoCreate: true,
    }),
    ServicesModule,
    UsersModule,
    AuthModule,
    PlanModule,
    CustomersModule,
    OpenWAModule,
  ],
  controllers: [AppController, OpenWAController],
  providers: [AppService, OpenWASession],
})
export class AppModule {}
