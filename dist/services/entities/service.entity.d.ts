import mongoose from 'mongoose';
import { IService } from '../interfaces/service.interface';
export declare class Service implements IService {
    id?: string;
    name: string;
    cost: mongoose.Types.Decimal128;
    userId: string;
    createAt: Date;
    updateAt: Date;
    deleted: boolean;
    constructor(data: IService);
}
