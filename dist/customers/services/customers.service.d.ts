import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { CustomerRepository } from '../repository/customer.repository';
export declare class CustomerService {
    private readonly repo;
    constructor(repo: CustomerRepository);
    create(createCustomerDto: CreateCustomerDto, userId: string): Promise<unknown>;
    findAll(): Promise<import("../interfaces/customer.interface").ICustomer[]>;
    findOne(id: string): Promise<import("../interfaces/customer.interface").ICustomer>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<import("../interfaces/customer.interface").ICustomer>;
    delete(id: string): Promise<boolean>;
}
