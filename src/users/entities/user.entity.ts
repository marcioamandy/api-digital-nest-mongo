import { IUser } from '../interfaces/user.interface';
import { UserStatus, UserType } from './user.enum';

export class User implements IUser {
  name: string;
  password: string;
  whatsapp: string;
  email: string;
  registration: string;
  company: string;
  status: UserStatus;
  type: UserType;
  email_verified: boolean;
  whats_verified: boolean;
  createAt: Date;
  updateAt: Date;
  deleted: boolean;

  constructor(data: IUser) {
    this.name = data.name;
    this.password = data.password;
    this.whatsapp = data.whatsapp;
    this.email = data.email;
    this.registration = data.registration;
    this.company = data.company;
    this.status = data.status;
    this.type = data.type;
    this.email_verified = data.email_verified;
    this.whats_verified = data.whats_verified;
    this.createAt = data.createAt;
    this.updateAt = data.updateAt;
    this.deleted = data.deleted;
  }
}
