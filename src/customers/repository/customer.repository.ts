import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICustomer } from '../interfaces/customer.interface';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<ICustomer>,
  ) {}

  async create(doc: ICustomer): Promise<string> {
    try {
      const result = await new this.customerModel(doc).save();
      return result.id;
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      throw new InternalServerErrorException('Falha ao criar cliente');
    }
  }

  async findAll(): Promise<ICustomer[]> {
    try {
      return await this.customerModel.find({ deleted: false });
    } catch (error) {
      console.error('Erro ao recuperar clientes:', error);
      throw new InternalServerErrorException('Falha ao recuperar clientes');
    }
  }

  async verificar(id: string): Promise<ICustomer> {
    try {
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      const customer = await this.customerModel.findOne({
        _id: id,
        deleted: false,
      });
      if (!customer) {
        throw new NotFoundException(`Cliente com o ID ${id} não encontrado!`);
      }
      return customer;
    } catch (error) {
      console.error(`Erro ao recuperar cliente com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Falha ao recuperar cliente ${id}`,
      );
    }
  }

  async findOne(id: string): Promise<ICustomer> {
    try {
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      const customer = await this.customerModel.findOne({
        _id: id,
        deleted: false,
      });
      if (!customer) {
        throw new NotFoundException(`Cliente com o ID ${id} não encontrado!`);
      }
      return customer;
    } catch (error) {
      console.error(`Erro ao recuperar cliente com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Falha ao recuperar cliente ${id}`,
      );
    }
  }

  async update(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<ICustomer> {
    try {
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      const customer = await this.customerModel.findById(id);
      if (!customer) {
        throw new NotFoundException(`Cliente com o ID ${id} não encontrado!`);
      }

      if (customer.deleted) {
        throw new BadRequestException(
          `Não é possível alterar um cliente que está marcado como deletado.`,
        );
      }

      const updatedCustomer = await this.customerModel.findByIdAndUpdate(
        id,
        {
          name: updateCustomerDto.name,
          whatsapp: updateCustomerDto.whatsapp,
          login: updateCustomerDto.login,
          password: updateCustomerDto.password,
          serviceId: updateCustomerDto.serviceId,
          planId: updateCustomerDto.planId,
          invoice: updateCustomerDto.invoice,
          comment: updateCustomerDto.comment,
          validateDate: updateCustomerDto.validateDate,
          sendNotificationOn: updateCustomerDto.sendNotificationOn,
          userId: updateCustomerDto.userId,
          updateAt: new Date(),
        },
        { new: true },
      );
      if (!updatedCustomer) {
        throw new NotFoundException(`Cliente com o ID ${id} não encontrado!`);
      }
      return updatedCustomer;
    } catch (error) {
      console.error(`Erro ao alterar o cliente com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(`Falha ao alterar cliente ${id}`);
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      // Validate the ID format to prevent injection attacks
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      const result = await this.customerModel.updateOne(
        { _id: id },
        {
          deleted: true,
          updateAt: new Date(),
        },
      );
      if (result.modifiedCount === 0) {
        throw new NotFoundException(`Cliente com o ID ${id} não encontrado!`);
      } else {
        return true;
      }
    } catch (error) {
      console.error(`Erro ao deletar o cliente com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Falha ao deletar cliente');
    }
  }

  // Helper method to validate ObjectId format
  private isValidObjectId(id: string): boolean {
    return /^[0-9a-fA-F]{24}$/.test(id);
  }
}
