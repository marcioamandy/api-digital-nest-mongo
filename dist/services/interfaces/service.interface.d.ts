import * as mongoose from 'mongoose';
export interface IService {
    id?: string;
    name: string;
    cost: mongoose.Types.Decimal128;
    userId: string;
    createAt: Date;
    updateAt: Date;
    deleted: boolean;
}
