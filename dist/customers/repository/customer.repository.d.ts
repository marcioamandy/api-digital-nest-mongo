import { Model } from 'mongoose';
import { ICustomer } from '../interfaces/customer.interface';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
export declare class CustomerRepository {
    private readonly customerModel;
    constructor(customerModel: Model<ICustomer>);
    create(doc: ICustomer): Promise<string>;
    findAll(): Promise<ICustomer[]>;
    verificar(id: string): Promise<ICustomer>;
    findOne(id: string): Promise<ICustomer>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<ICustomer>;
    delete(id: string): Promise<boolean>;
    private isValidObjectId;
}
