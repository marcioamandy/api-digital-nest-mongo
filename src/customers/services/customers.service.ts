import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { CustomerRepository } from '../repository/customer.repository';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(private readonly repo: CustomerRepository) {}

  async create(createCustomerDto: CreateCustomerDto, userId: string) {
    try {
      const entity = new Customer({
        id: null,
        name: createCustomerDto.name,
        whatsapp: createCustomerDto.whatsapp,
        login: createCustomerDto.login,
        password: createCustomerDto.password,
        serviceId: createCustomerDto.serviceId,
        planId: createCustomerDto.planId,
        invoice: createCustomerDto.invoice,
        comment: createCustomerDto.comment,
        validateDate: createCustomerDto.validateDate,
        sendNotificationOn: createCustomerDto.sendNotificationOn,
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

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return await this.repo.update(id, updateCustomerDto);
  }

  async delete(id: string) {
    return await this.repo.delete(id);
  }
}
