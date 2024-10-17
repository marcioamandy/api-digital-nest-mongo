import { CreateServiceDto } from './create-service.dto';
import mongoose from 'mongoose';
declare const UpdateServiceDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateServiceDto>>;
export declare class UpdateServiceDto extends UpdateServiceDto_base {
    name: string;
    cost: mongoose.Types.Decimal128;
}
export {};
