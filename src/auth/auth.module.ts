import { UsersService } from '../users/service/users.service';
import { UsersModule } from '../users/users.module';
import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { ServicesModule } from '../services/services.module';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthRepository } from './repository/auth.repository';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    forwardRef(() => ServicesModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  exports: [AuthService, JwtService],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, JwtStrategy, UsersService, JwtService],
})
export class AuthModule {}
