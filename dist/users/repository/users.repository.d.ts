import { Model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UserRepository {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    create(doc: IUser): Promise<any>;
    sanitizeUser(user: IUser): any;
    findAll(): Promise<IUser[]>;
    listAll(): Promise<IUser[]>;
    findOne(id: string): Promise<IUser>;
    findByEmail(email: string): Promise<IUser>;
    verifyEmail(id: string): Promise<IUser>;
    verifyWhats(id: string): Promise<IUser>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<IUser>;
    revert(id: string): Promise<IUser>;
    delete(id: string): Promise<boolean>;
    private isValidObjectId;
}
