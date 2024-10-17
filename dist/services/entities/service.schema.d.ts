import * as mongoose from 'mongoose';
export declare const ServiceSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    cost: {
        prototype?: mongoose.Types.Decimal128;
        fromString?: {};
        fromStringWithRounding?: {};
    };
    userId: string;
    createAt: NativeDate;
    updateAt: NativeDate;
    deleted: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    cost: {
        prototype?: mongoose.Types.Decimal128;
        fromString?: {};
        fromStringWithRounding?: {};
    };
    userId: string;
    createAt: NativeDate;
    updateAt: NativeDate;
    deleted: boolean;
}>> & mongoose.FlatRecord<{
    name: string;
    cost: {
        prototype?: mongoose.Types.Decimal128;
        fromString?: {};
        fromStringWithRounding?: {};
    };
    userId: string;
    createAt: NativeDate;
    updateAt: NativeDate;
    deleted: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
