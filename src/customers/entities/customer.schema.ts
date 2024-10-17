import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  whatsapp: { type: String, required: false },
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  serviceId: { type: String, required: true },
  planId: { type: String, required: true },
  invoice: { type: String, required: true },
  comment: { type: String, required: false },
  validateDate: { type: Date, required: false },
  sendNotificationOn: { type: Object, required: false },
  userId: { type: String, required: true },
  createAt: { type: Date, required: true },
  updateAt: { type: Date, required: true },
  deleted: { type: Boolean, required: true, default: false },
});
