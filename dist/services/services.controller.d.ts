import { ServicesService } from './service/services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    create(createServiceDto: CreateServiceDto, request: any): Promise<unknown>;
    findAll(): Promise<import("./interfaces/service.interface").IService[]>;
    findOne(id: string): Promise<import("./interfaces/service.interface").IService>;
    update(id: string, updateServiceDto: UpdateServiceDto): Promise<import("./interfaces/service.interface").IService>;
    delete(id: string): Promise<boolean>;
}
