import { toUTF8 } from './../../node_modules/mongodb/src/bson';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { LoginUserDTO } from './dto/login-user.dto'; // Adjust the import path as necessary
import { AuthService } from './service//auth.service';
import { UsersService } from '../users/service/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Roles } from './jwt/roles.decorator';
import { RoleGuard } from './jwt/role.guard';
import { Types } from 'mongoose';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Get('/onlyauth')
  @UseGuards(AuthGuard('jwt'))
  async hiddenInformation() {
    return 'hidden information';
  }

  @Get('/anyone')
  async publicInformation() {
    return 'this can be seen by anyone';
  }

  @Post('register')
  @Roles('admin')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  async register(@Body() dto: CreateUserDto) {
    const user = await this.userService.create(dto);
    const payload = {
      id: user._id.toString(),
      email: user.email,
      role: 'default',
    };

    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Get('login')
  async login(@Body() UserDTO: LoginUserDTO) {
    const user = await this.authService.authUser(UserDTO);
    const payload = {
      id: user._id.toString(),
      email: user.email,
      role: 'default',
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }
}
