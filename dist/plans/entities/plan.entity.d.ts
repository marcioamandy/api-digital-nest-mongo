import mongoose from 'mongoose';
import { IPlan } from '../interfaces/plan.interface';
export declare class Plan implements IPlan {
    id?: string;
    name: string;
    value: mongoose.Types.Decimal128;
    userId: string;
    createAt: Date;
    updateAt: Date;
    deleted: boolean;
    constructor(data: IPlan);
}
