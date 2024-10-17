import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IService } from '../interfaces/service.interface';
import { UpdateServiceDto } from '../dto/update-service.dto';

@Injectable()
export class ServicesRepository {
  constructor(
    @InjectModel('Service') private readonly serviceModel: Model<IService>,
  ) {}

  async create(doc: IService): Promise<string> {
    try {
      const result = await new this.serviceModel(doc).save();
      return result.id;
    } catch (error) {
      console.error('Erro ao criar serviço:', error);
      throw new InternalServerErrorException('Falha ao criar serviço');
    }
  }

  async findAll(): Promise<IService[]> {
    try {
      return await this.serviceModel.find({ deleted: false });
    } catch (error) {
      console.error('Erro ao recuperar serviços:', error);
      throw new InternalServerErrorException('Falha ao recuperar serviços');
    }
  }

  async verificar(id: string): Promise<IService> {
    try {
      // Validate the ID format to prevent injection attacks
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      //const service = await this.serviceModel.findById(id, { deleted: false });
      const service = await this.serviceModel.findOne({
        _id: id,
        deleted: false,
      });
      if (!service) {
        throw new NotFoundException(`Serviço com o ID ${id} não encontrado!`);
      }
      return service;
    } catch (error) {
      console.error(`Erro ao recuperar serviço com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Falha ao recuperar serviço ${id}`,
      );
    }
  }

  async findOne(id: string): Promise<IService> {
    try {
      // Validate the ID format to prevent injection attacks
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      //const service = await this.serviceModel.findById(id, { deleted: false });
      const service = await this.serviceModel.findOne({
        _id: id,
        deleted: false,
      });
      if (!service) {
        throw new NotFoundException(`Serviço com o ID ${id} não encontrado!`);
      }
      return service;
    } catch (error) {
      console.error(`Erro ao recuperar serviço com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Falha ao recuperar serviço ${id}`,
      );
    }
  }

  async update(
    id: string,
    updateServiceDto: UpdateServiceDto,
  ): Promise<IService> {
    try {
      // Validate the ID format to prevent injection attacks
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      // Find the service by ID
      const service = await this.serviceModel.findById(id);
      if (!service) {
        throw new NotFoundException(`Serviço com o ID ${id} não encontrado!`);
      }

      // Check if the service is marked as deleted
      if (service.deleted) {
        throw new BadRequestException(
          `Não é possível alterar um serviço que está marcado como deletado.`,
        );
      }

      const updatedService = await this.serviceModel.findByIdAndUpdate(
        id,
        {
          name: updateServiceDto.name,
          cost: updateServiceDto.cost,
          updateAt: new Date(),
        },
        { new: true },
      );
      if (!updatedService) {
        throw new NotFoundException(`Serviço com o ID ${id} não encontrado!`);
      }
      return updatedService;
    } catch (error) {
      console.error(`Erro ao alterar o serviço com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(`Falha ao alterar serviço ${id}`);
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      // Validate the ID format to prevent injection attacks
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      //deleta em definitivo
      //const result = await this.serviceModel.deleteOne({ _id: id });
      const result = await this.serviceModel.updateOne(
        { _id: id },
        {
          deleted: true,
          updateAt: new Date(),
        },
      );
      if (result.modifiedCount === 0) {
        throw new NotFoundException(`Serviço com o ID ${id} não encontrado!`);
      } else {
        return true;
      }
    } catch (error) {
      console.error(`Erro ao deletar o serviço com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Falha ao deletar serviço');
    }
  }

  // Helper method to validate ObjectId format
  private isValidObjectId(id: string): boolean {
    return /^[0-9a-fA-F]{24}$/.test(id);
  }
}
