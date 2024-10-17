import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserRepository } from '../repository/users.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly repo: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const entity = new User({
        id: null,
        name: createUserDto.name,
        password: createUserDto.password,
        whatsapp: createUserDto.whatsapp,
        email: createUserDto.email,
        registration: createUserDto.registration,
        company: createUserDto.company,
        status: createUserDto.status,
        type: createUserDto.type,
        email_verified: false,
        whats_verified: false,
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

  async listAll() {
    return await this.repo.listAll();
  }

  async findOne(id: string) {
    return await this.repo.findOne(id);
  }

  async findByEmail(email: string) {
    return await this.repo.findByEmail(email);
  }

  async verifyEmail(id: string) {
    return await this.repo.findOne(id);
  }

  async verifyWhats(id: string) {
    return await this.repo.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.repo.update(id, updateUserDto);
  }

  async revert(id: string) {
    return await this.repo.revert(id);
  }

  async delete(id: string) {
    return await this.repo.delete(id);
  }
}
