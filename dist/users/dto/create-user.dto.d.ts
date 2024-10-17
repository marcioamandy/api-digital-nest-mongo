import { UserStatus, UserType } from '../entities/user.enum';
export declare class CreateUserDto {
    name: string;
    password: string;
    whatsapp: string;
    email: string;
    registration: string;
    company: string;
    status: UserStatus;
    type: UserType;
}
