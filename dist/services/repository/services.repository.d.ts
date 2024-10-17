import { Model } from 'mongoose';
import { IService } from '../interfaces/service.interface';
import { UpdateServiceDto } from '../dto/update-service.dto';
export declare class ServicesRepository {
    private readonly serviceModel;
    constructor(serviceModel: Model<IService>);
    create(doc: IService): Promise<string>;
    findAll(): Promise<IService[]>;
    verificar(id: string): Promise<IService>;
    findOne(id: string): Promise<IService>;
    update(id: string, updateServiceDto: UpdateServiceDto): Promise<IService>;
    delete(id: string): Promise<boolean>;
    private isValidObjectId;
}
