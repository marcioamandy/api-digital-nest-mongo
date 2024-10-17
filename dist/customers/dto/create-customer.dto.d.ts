import { ISendNotificationOn } from '../interfaces/customer.interface';
export declare class CreateCustomerDto {
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
}
