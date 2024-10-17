import { Injectable } from '@nestjs/common';
import { Payload } from '../../types/payload.type';
import { LoginUserDTO } from '../dto/login-user.dto';
import { AuthRepository } from '../repository/auth.repository';
import { sign } from 'jsonwebtoken';
import { UsersService } from 'src/users/service/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly repo: AuthRepository,
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signPayload(payLoad: Payload) {
    // return await sign(payLoad, process.env.SECRET_KEY, { expiresIn: '7d' });
    return this.jwtService.sign(payLoad, { secret: process.env.SECRET_KEY });
  }

  async validateUser(payload: Payload) {
    const user = await this.findByPayload(payload);
    if (user) {
      return {
        ...user,
        roles: user.roles || [], // Garante que a propriedade roles esteja definida
      };
    }
    return null;
  }

  async authUser(UserDTO: LoginUserDTO) {
    return await this.repo.authUser(UserDTO);
  }

  async findByPayload(payload: Payload) {
    const { email } = payload;
    return await this.userService.findByEmail(email);
  }
}
