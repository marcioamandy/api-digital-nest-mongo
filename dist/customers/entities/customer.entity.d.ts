import { ICustomer, ISendNotificationOn } from '../interfaces/customer.interface';
export declare class Customer implements ICustomer {
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
    constructor(data: ICustomer);
}
