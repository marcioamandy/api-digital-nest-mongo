import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { ServicesRepository } from '../repository/services.repository';
export declare class ServicesService {
    private readonly repo;
    constructor(repo: ServicesRepository);
    create(createServiceDto: CreateServiceDto, userId: string): Promise<unknown>;
    findAll(): Promise<import("../interfaces/service.interface").IService[]>;
    findOne(id: string): Promise<import("../interfaces/service.interface").IService>;
    update(id: string, updateServiceDto: UpdateServiceDto): Promise<import("../interfaces/service.interface").IService>;
    delete(id: string): Promise<boolean>;
}
