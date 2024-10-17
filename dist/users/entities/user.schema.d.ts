import * as mongoose from 'mongoose';
import { IUser } from '../interfaces/user.interface';
export declare const UserSchema: mongoose.Schema<IUser, mongoose.Model<IUser, any, any, any, mongoose.Document<unknown, any, IUser> & IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IUser, mongoose.Document<unknown, {}, mongoose.FlatRecord<IUser>> & mongoose.FlatRecord<IUser> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
export default UserSchema;
