import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { IUser } from '../interfaces/user.interface';
import { HydratedDocument } from 'mongoose';

export const UserSchema = new mongoose.Schema<IUser>(
  {
    status: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    whatsapp: { type: String, unique: true, sparse: true, required: false },
    email: { type: String, unique: true, required: true },
    registration: { type: String, unique: true, sparse: true, required: false },
    company: { type: String, required: false, sparse: true },
    type: { type: String, required: true },
    email_verified: { type: Boolean, required: true, default: false },
    whats_verified: { type: Boolean, required: true, default: false },
    createAt: { type: Date, required: true },
    updateAt: { type: Date, required: true },
    deleted: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  },
);

async function hashPassword(
  this: HydratedDocument<any>,
  next: (err?: Error) => void,
) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashed = await bcrypt.hash(this.get('password'), 10);
    this.set('password', hashed);
    return next();
  } catch (err) {
    return next(err as Error);
  }
}

UserSchema.pre('save', hashPassword);
UserSchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate();
  if (update && update['password']) {
    const hashed = await bcrypt.hash(update['password'], 10);
    update['password'] = hashed;
  }
  next();
});

export default UserSchema;
