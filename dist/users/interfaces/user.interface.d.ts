import { UserStatus, UserType } from '../entities/user.enum';
export interface IUser {
    [x: string]: any;
    id?: string;
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
}
