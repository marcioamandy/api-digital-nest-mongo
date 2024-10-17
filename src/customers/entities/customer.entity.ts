import {
  ICustomer,
  ISendNotificationOn,
} from '../interfaces/customer.interface';

export class Customer implements ICustomer {
  id?: string;
  name: string;
  whatsapp: string;
  login: string;
  password: string;
  serviceId: string;
  planId: string;
  invoice: string;
  comment: string;
  validateDate: Date;
  sendNotificationOn: ISendNotificationOn;
  userId: string;
  createAt: Date;
  updateAt: Date;
  deleted: boolean;

  constructor(data: ICustomer) {
    this.name = data.name;
    this.whatsapp = data.whatsapp;
    this.login = data.login;
    this.password = data.password;
    this.serviceId = data.serviceId;
    this.planId = data.planId;
    this.invoice = data.invoice;
    this.comment = data.comment;
    this.validateDate = data.validateDate;
    this.sendNotificationOn = data.sendNotificationOn;
    this.userId = data.userId;
    this.createAt = data.createAt;
    this.updateAt = data.updateAt;
    this.deleted = data.deleted;
  }
}
