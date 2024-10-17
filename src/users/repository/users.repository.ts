import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { IUser } from '../interfaces/user.interface';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserStatus } from '../entities/user.enum';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async create(doc: IUser) {
    const emailExists = await this.userModel.findOne({ email: doc.email });
    if (emailExists) {
      throw new HttpException(
        'E-mail já utilizado por outro usuário',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (
      doc.whatsapp !== undefined &&
      doc.whatsapp !== null &&
      doc.whatsapp !== ''
    ) {
      const whatsExists = await this.userModel.findOne({
        whatsapp: doc.whatsapp,
      });
      if (whatsExists) {
        throw new HttpException(
          'Número de celular já utilizado por outro usuário',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    if (
      doc.registration !== undefined &&
      doc.registration !== null &&
      doc.registration !== ''
    ) {
      const registrationExists = await this.userModel.findOne({
        registration: doc.registration,
      });
      if (registrationExists) {
        throw new HttpException(
          'Matrícula já utilizada por outro usuário',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    const createdUser = new this.userModel(doc);
    await createdUser.save();
    return this.sanitizeUser(createdUser);
  }

  sanitizeUser(user: IUser) {
    const sanitized = { ...user['_doc'] };
    delete sanitized.password;
    return sanitized;
  }

  async findAll(): Promise<IUser[]> {
    try {
      return await this.userModel
        .find({ deleted: false, status: UserStatus.Active })
        .select('-password');
    } catch (error) {
      console.error('Erro ao recuperar um usuário:', error);
      throw new InternalServerErrorException('Falha ao recuperar um usuário');
    }
  }

  async listAll(): Promise<IUser[]> {
    try {
      return await this.userModel.find().select('-password');
    } catch (error) {
      console.error('Erro ao recuperar um usuário:', error);
      throw new InternalServerErrorException('Falha ao recuperar um usuário');
    }
  }

  async findOne(id: string): Promise<IUser> {
    try {
      // Validate the ID format to prevent injection attacks
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      //const service = await this.serviceModel.findById(id, { deleted: false });
      const user = await this.userModel
        .findOne({ _id: id, deleted: false })
        .select('-password');
      if (!user) {
        throw new NotFoundException(`Usuário com o ID ${id} não encontrado!`);
      }
      return user;
    } catch (error) {
      console.error(`Erro ao recuperar o usuário com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Falha ao recuperar o usuário ${id}`,
      );
    }
  }

  async findByEmail(email: string): Promise<IUser> {
    try {
      const user = await this.userModel.findOne({
        email: email,
        deleted: false,
      });
      if (!user) {
        throw new NotFoundException(`Login ${email} não encontrado!`);
      }
      return user;
    } catch (error) {
      console.error(`Erro ao recuperar o usuário com o login ${email}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Falha ao recuperar o usuário com login ${email}`,
      );
    }
  }

  async verifyEmail(id: string): Promise<IUser> {
    try {
      // Validate the ID format to prevent injection attacks
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      //const service = await this.serviceModel.findById(id, { deleted: false });
      const user = await this.userModel
        .findOne({ _id: id, deleted: false })
        .select('-password');
      if (!user) {
        throw new NotFoundException(`Usuário com o ID ${id} não encontrado!`);
      }
      return user;
    } catch (error) {
      console.error(`Erro ao recuperar o usuário com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Falha ao recuperar o usuário ${id}`,
      );
    }
  }

  async verifyWhats(id: string): Promise<IUser> {
    try {
      // Validate the ID format to prevent injection attacks
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      //const service = await this.serviceModel.findById(id, { deleted: false });
      const user = await this.userModel
        .findOne({ _id: id, deleted: false })
        .select('-password');
      if (!user) {
        throw new NotFoundException(`Usuário com o ID ${id} não encontrado!`);
      }
      return user;
    } catch (error) {
      console.error(`Erro ao recuperar o usuário com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Falha ao recuperar o usuário ${id}`,
      );
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    try {
      // Validate the ID format to prevent injection attacks
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      // Find the service by ID
      const user = await this.userModel.findById(id);
      if (!user) {
        throw new NotFoundException(`Usuário com o ID ${id} não encontrado!`);
      }

      // Check if the service is marked as deleted
      if (user.deleted) {
        throw new BadRequestException(
          `Não é possível alterar um usuário que está marcado como deletado.`,
        );
      }

      const updatedUser = await this.userModel.findByIdAndUpdate(
        id,
        {
          name: updateUserDto.name,
          password: updateUserDto.password,
          email: updateUserDto.email,
          registration: updateUserDto.registration,
          company: updateUserDto.company,
          status: updateUserDto.status,
          type: updateUserDto.type,
          whatsapp: updateUserDto.whatsapp,
          deleted: updateUserDto.deleted,
          whats_verified: updateUserDto.whats_verified,
          email_verified: updateUserDto.email_verified,
          updateAt: new Date(),
        },
        { new: true },
      );
      if (!updatedUser) {
        throw new NotFoundException(`Usuário com o ID ${id} não encontrado!`);
      }
      return this.sanitizeUser(updatedUser);
    } catch (error) {
      console.error(`Erro ao alterar o usuário com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Falha ao alterar o usuário ${id}`,
      );
    }
  }

  async revert(id: string): Promise<IUser> {
    try {
      // Validate the ID format to prevent injection attacks
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      // Find the service by ID
      const user = await this.userModel.findById(id);
      if (!user) {
        throw new NotFoundException(`Usuário com o ID ${id} não encontrado!`);
      }

      const updatedUser = await this.userModel.findByIdAndUpdate(
        id,
        {
          deleted: false,
          updateAt: new Date(),
        },
        { new: true },
      );
      if (!updatedUser) {
        throw new NotFoundException(`Usuário com o ID ${id} não encontrado!`);
      }
      return this.sanitizeUser(updatedUser);
    } catch (error) {
      console.error(`Erro ao alterar o usuário com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Falha ao alterar o usuário ${id}`,
      );
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      const result = await this.userModel.updateOne(
        { _id: id },
        {
          deleted: true,
          updateAt: new Date(),
        },
      );
      if (result.modifiedCount === 0) {
        throw new NotFoundException(`Usuário com o ID ${id} não encontrado!`);
      } else {
        return true;
      }
    } catch (error) {
      console.error(`Erro ao deletar o usuário com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Falha ao deletar usuário');
    }
  }

  // Helper method to validate ObjectId format
  private isValidObjectId(id: string): boolean {
    return isValidObjectId(id);
  }
}
