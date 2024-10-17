import * as mongoose from 'mongoose';
export declare const CustomerSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    userId: string;
    createAt: NativeDate;
    updateAt: NativeDate;
    deleted: boolean;
    password: string;
    login: string;
    serviceId: string;
    planId: string;
    invoice: string;
    whatsapp?: string;
    comment?: string;
    validateDate?: NativeDate;
    sendNotificationOn?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    userId: string;
    createAt: NativeDate;
    updateAt: NativeDate;
    deleted: boolean;
    password: string;
    login: string;
    serviceId: string;
    planId: string;
    invoice: string;
    whatsapp?: string;
    comment?: string;
    validateDate?: NativeDate;
    sendNotificationOn?: any;
}>> & mongoose.FlatRecord<{
    name: string;
    userId: string;
    createAt: NativeDate;
    updateAt: NativeDate;
    deleted: boolean;
    password: string;
    login: string;
    serviceId: string;
    planId: string;
    invoice: string;
    whatsapp?: string;
    comment?: string;
    validateDate?: NativeDate;
    sendNotificationOn?: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
