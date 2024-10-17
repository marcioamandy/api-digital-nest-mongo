import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ServicesService } from './service/services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Roles } from 'src/auth/jwt/roles.decorator';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { RoleGuard } from '../auth/jwt/role.guard';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Post()
  create(@Body() createServiceDto: CreateServiceDto, @Req() request) {
    const userId = request.user.id;
    return this.servicesService.create(createServiceDto, userId);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Get()
  findAll() {
    return this.servicesService.findAll();
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(id);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.servicesService.update(id, updateServiceDto);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.servicesService.delete(id);
  }
}
