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
import { PlanService } from './services/plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Roles } from 'src/auth/jwt/roles.decorator';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { RoleGuard } from '../auth/jwt/role.guard';

@Controller('plans')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Post()
  create(@Body() createPlanDto: CreatePlanDto, @Req() request) {
    const userId = request.user.id;
    return this.planService.create(createPlanDto, userId);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Get()
  findAll() {
    return this.planService.findAll();
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planService.findOne(id);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
    return this.planService.update(id, updatePlanDto);
  }

  @Roles('default')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.planService.delete(id);
  }
}
