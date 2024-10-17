import { CreateUserDto } from './create-user.dto';
import { UserStatus, UserType } from '../entities/user.enum';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    name: string;
    password: string;
    whatsapp?: string;
    email: string;
    registration?: string;
    company?: string;
    status: UserStatus;
    type: UserType;
    deleted: boolean;
    email_verified: boolean;
    whats_verified: boolean;
}
export {};
