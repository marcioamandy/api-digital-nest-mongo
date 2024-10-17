import { CreateCustomerDto } from './create-customer.dto';
import { ISendNotificationOn } from '../interfaces/customer.interface';
declare const UpdateCustomerDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCustomerDto>>;
export declare class UpdateCustomerDto extends UpdateCustomerDto_base {
    name?: string;
    whatsapp?: string;
    login?: string;
    password?: string;
    serviceId?: string;
    planId?: string;
    invoice?: string;
    comment?: string;
    validateDate?: Date;
    sendNotificationOn?: ISendNotificationOn;
    userId?: string;
}
export {};
