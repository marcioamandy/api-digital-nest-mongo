import * as mongoose from 'mongoose';
export declare const PlanSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    userId: string;
    createAt: NativeDate;
    updateAt: NativeDate;
    deleted: boolean;
    value: {
        prototype?: mongoose.Types.Decimal128;
        fromString?: {};
        fromStringWithRounding?: {};
    };
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    userId: string;
    createAt: NativeDate;
    updateAt: NativeDate;
    deleted: boolean;
    value: {
        prototype?: mongoose.Types.Decimal128;
        fromString?: {};
        fromStringWithRounding?: {};
    };
}>> & mongoose.FlatRecord<{
    name: string;
    userId: string;
    createAt: NativeDate;
    updateAt: NativeDate;
    deleted: boolean;
    value: {
        prototype?: mongoose.Types.Decimal128;
        fromString?: {};
        fromStringWithRounding?: {};
    };
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
