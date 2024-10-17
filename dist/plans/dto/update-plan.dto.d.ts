import { CreatePlanDto } from './create-plan.dto';
import mongoose from 'mongoose';
declare const UpdatePlanDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePlanDto>>;
export declare class UpdatePlanDto extends UpdatePlanDto_base {
    name: string;
    value: mongoose.Types.Decimal128;
}
export {};
