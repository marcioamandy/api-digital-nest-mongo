import { CustomerService } from './services/customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    create(createCustomerDto: CreateCustomerDto, request: any): Promise<unknown>;
    findAll(): Promise<import("./interfaces/customer.interface").ICustomer[]>;
    findOne(id: string): Promise<import("./interfaces/customer.interface").ICustomer>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<import("./interfaces/customer.interface").ICustomer>;
    delete(id: string): Promise<boolean>;
}
