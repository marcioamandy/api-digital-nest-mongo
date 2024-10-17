import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { ServicesRepository } from '../repository/services.repository';
import { Service } from '../entities/service.entity';

@Injectable()
export class ServicesService {
  constructor(private readonly repo: ServicesRepository) {}

  async create(createServiceDto: CreateServiceDto, userId: string) {
    try {
      const entity = new Service({
        id: null,
        name: createServiceDto.name,
        cost: createServiceDto.cost,
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

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    return await this.repo.update(id, updateServiceDto);
  }

  async delete(id: string) {
    return await this.repo.delete(id);
  }
}
