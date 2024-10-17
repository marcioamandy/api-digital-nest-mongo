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
import { CustomerService } from './services/customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Roles } from 'src/auth/jwt/roles.decorator';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { RoleGuard } from '../auth/jwt/role.guard';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto, @Req() request) {
    const userId = request.user.id;
    return this.customerService.create(createCustomerDto, userId);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(id);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(id, updateCustomerDto);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.customerService.delete(id);
  }
}
