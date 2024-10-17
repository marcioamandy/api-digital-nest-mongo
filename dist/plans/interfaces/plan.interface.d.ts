import * as mongoose from 'mongoose';
export interface IPlan {
    id?: string;
    name: string;
    value: mongoose.Types.Decimal128;
    userId: string;
    createAt: Date;
    updateAt: Date;
    deleted: boolean;
}
