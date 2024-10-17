import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from '../dto/create-plan.dto';
import { UpdatePlanDto } from '../dto/update-plan.dto';
import { PlanRepository } from '../repository/plan.repository';
import { Plan } from '../entities/plan.entity';

@Injectable()
export class PlanService {
  constructor(private readonly repo: PlanRepository) {}

  async create(createPlanDto: CreatePlanDto, userId: string) {
    try {
      const entity = new Plan({
        id: null,
        name: createPlanDto.name,
        value: createPlanDto.value,
        userId: userId,
        createAt: new Date(),
        updateAt: new Date(),
        deleted: false,
      });
      return await this.repo.create(entity);
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    return await this.repo.findAll();
  }

  async findOne(id: string) {
    return await this.repo.findOne(id);
  }

  async update(id: string, updatePlanDto: UpdatePlanDto) {
    return await this.repo.update(id, updatePlanDto);
  }

  async delete(id: string) {
    return await this.repo.delete(id);
  }
}
