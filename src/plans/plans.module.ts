import { Module, forwardRef } from '@nestjs/common';
import { PlanService } from './services/plans.service';
import { PlanController } from './plans.controller';
import { PlanRepository } from './repository/plan.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanSchema } from './entities/plan.schema';
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from 'src/auth/jwt/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Plan',
        schema: PlanSchema,
      },
    ]),
    forwardRef(() => AuthModule),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [PlanController],
  providers: [PlanService, PlanRepository, JwtStrategy],
})
export class PlanModule {}
