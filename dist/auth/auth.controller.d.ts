import { LoginUserDTO } from './dto/login-user.dto';
import { AuthService } from './service//auth.service';
import { UsersService } from '../users/service/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Types } from 'mongoose';
export declare class AuthController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UsersService, authService: AuthService);
    hiddenInformation(): Promise<string>;
    publicInformation(): Promise<string>;
    register(dto: CreateUserDto): Promise<{
        user: any;
        token: string;
    }>;
    login(UserDTO: LoginUserDTO): Promise<{
        user: {
            name: string;
            whatsapp: string;
            email: string;
            registration: string;
            company: string;
            status: import("../users/entities/user.enum").UserStatus;
            type: import("../users/entities/user.enum").UserType;
            email_verified: boolean;
            whats_verified: boolean;
            createAt: Date;
            updateAt: Date;
            deleted: boolean;
            _id: Types.ObjectId;
        };
        token: string;
    }>;
}
