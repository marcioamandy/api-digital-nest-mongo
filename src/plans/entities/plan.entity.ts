import mongoose from 'mongoose';
import { IPlan } from '../interfaces/plan.interface';

export class Plan implements IPlan {
  id?: string;
  name: string;
  value: mongoose.Types.Decimal128;
  userId: string;
  createAt: Date;
  updateAt: Date;
  deleted: boolean;

  constructor(data: IPlan) {
    this.name = data.name;
    this.value = data.value;
    this.userId = data.userId;
    this.createAt = data.createAt;
    this.updateAt = data.updateAt;
    this.deleted = data.deleted;
  }
}
