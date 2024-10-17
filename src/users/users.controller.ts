import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './service/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from 'src/auth/jwt/roles.decorator';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { RoleGuard } from '../auth/jwt/role.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Roles('admin')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Get('/all/')
  listAll() {
    return this.usersService.listAll();
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Get('/checkemail/:id')
  verifyEmail(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Get('/checkwhats/:id')
  verifyWhats(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Patch('/revert/:id')
  revert(@Param('id') id: string) {
    return this.usersService.revert(id);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
