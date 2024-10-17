import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPlan } from '../interfaces/plan.interface';
import { UpdatePlanDto } from '../dto/update-plan.dto';

@Injectable()
export class PlanRepository {
  constructor(@InjectModel('Plan') private readonly planModel: Model<IPlan>) {}

  async create(doc: IPlan): Promise<string> {
    try {
      const result = await new this.planModel(doc).save();
      return result.id;
    } catch (error) {
      console.error('Erro ao criar plano:', error);
      throw new InternalServerErrorException('Falha ao criar plano');
    }
  }

  async findAll(): Promise<IPlan[]> {
    try {
      return await this.planModel.find({ deleted: false });
    } catch (error) {
      console.error('Erro ao recuperar planos:', error);
      throw new InternalServerErrorException('Falha ao recuperar planos');
    }
  }

  async verificar(id: string): Promise<IPlan> {
    try {
      // Validate the ID format to prevent injection attacks
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      //const service = await this.serviceModel.findById(id, { deleted: false });
      const plan = await this.planModel.findOne({
        _id: id,
        deleted: false,
      });
      if (!plan) {
        throw new NotFoundException(`Plano com o ID ${id} não encontrado!`);
      }
      return plan;
    } catch (error) {
      console.error(`Erro ao recuperar plano com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(`Falha ao recuperar plano ${id}`);
    }
  }

  async findOne(id: string): Promise<IPlan> {
    try {
      // Validate the ID format to prevent injection attacks
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      //const service = await this.serviceModel.findById(id, { deleted: false });
      const plan = await this.planModel.findOne({
        _id: id,
        deleted: false,
      });
      if (!plan) {
        throw new NotFoundException(`Plano com o ID ${id} não encontrado!`);
      }
      return plan;
    } catch (error) {
      console.error(`Erro ao recuperar plano com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(`Falha ao recuperar plano ${id}`);
    }
  }

  async update(id: string, updatePlanDto: UpdatePlanDto): Promise<IPlan> {
    try {
      // Validate the ID format to prevent injection attacks
      if (!this.isValidObjectId(id)) {
        throw new NotFoundException(`Inválido formato de identificação: ${id}`);
      }

      // Find the service by ID
      const plan = await this.planModel.findById(id);
      if (!plan) {
        throw new NotFoundException(`Plano com o ID ${id} não encontrado!`);
      }

      // Check if the service is marked as deleted
      if (plan.deleted) {
        throw new BadRequestException(
          `Não é possível alterar um plano que está marcado como deletado.`,
        );
      }

      const updatedPlan = await this.planModel.findByIdAndUpdate(
        id,
        {
          name: updatePlanDto.name,
          cost: updatePlanDto.value,
          updateAt: new Date(),
        },
        { new: true },
      );
      if (!updatedPlan) {
        throw new NotFoundException(`Plano com o ID ${id} não encontrado!`);
      }
      return updatedPlan;
    } catch (error) {
      console.error(`Erro ao alterar o plano com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(`Falha ao alterar plano ${id}`);
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
      const result = await this.planModel.updateOne(
        { _id: id },
        {
          deleted: true,
          updateAt: new Date(),
        },
      );
      if (result.modifiedCount === 0) {
        throw new NotFoundException(`Plano com o ID ${id} não encontrado!`);
      } else {
        return true;
      }
    } catch (error) {
      console.error(`Erro ao deletar o plano com o ID ${id}:`, error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Falha ao deletar plano');
    }
  }

  // Helper method to validate ObjectId format
  private isValidObjectId(id: string): boolean {
    return /^[0-9a-fA-F]{24}$/.test(id);
  }
}
