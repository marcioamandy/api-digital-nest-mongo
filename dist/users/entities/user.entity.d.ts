import { IUser } from '../interfaces/user.interface';
import { UserStatus, UserType } from './user.enum';
export declare class User implements IUser {
    name: string;
    password: string;
    whatsapp: string;
    email: string;
    registration: string;
    company: string;
    status: UserStatus;
    type: UserType;
    email_verified: boolean;
    whats_verified: boolean;
    createAt: Date;
    updateAt: Date;
    deleted: boolean;
    constructor(data: IUser);
}
