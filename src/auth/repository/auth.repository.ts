import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginUserDTO } from '../dto/login-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { sign } from 'jsonwebtoken';
import { Payload } from 'src/types/payload.type';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>){} 

  async signPayload(payload: Payload) {
    return sign(payload, process.env.SECRET_KEY, { expiresIn: '7d' });
  }

  async authUser(UserDTO: LoginUserDTO) {
    const { email, password } = UserDTO;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new HttpException(
        'Usuário não existe no sistema',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!password || !user.password) {
      throw new HttpException('Credenciais inválidas', HttpStatus.BAD_REQUEST);
    }
    if (await bcrypt.compare(password, user.password)) {
      const { password, ...userWithoutPassword } = user.toObject();
      return userWithoutPassword;
    } else {
      throw new HttpException('Credenciais inválidas', HttpStatus.BAD_REQUEST);
    }
  }
}
