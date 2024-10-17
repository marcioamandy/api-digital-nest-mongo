import * as mongoose from 'mongoose';

export const PlanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: mongoose.Types.Decimal128, required: true },
  userId: { type: String, required: true },
  createAt: { type: Date, required: true },
  updateAt: { type: Date, required: true },
  deleted: { type: Boolean, required: true, default: false },
});
