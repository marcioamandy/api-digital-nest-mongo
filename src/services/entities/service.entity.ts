import mongoose from 'mongoose';
import { IService } from '../interfaces/service.interface';

export class Service implements IService {
  id?: string;
  name: string;
  cost: mongoose.Types.Decimal128;
  userId: string;
  createAt: Date;
  updateAt: Date;
  deleted: boolean;

  constructor(data: IService) {
    this.name = data.name;
    this.cost = data.cost;
    this.userId = data.userId;
    this.createAt = data.createAt;
    this.updateAt = data.updateAt;
    this.deleted = data.deleted;
  }
}
