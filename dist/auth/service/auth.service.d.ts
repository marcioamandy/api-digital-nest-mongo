import { Payload } from '../../types/payload.type';
import { LoginUserDTO } from '../dto/login-user.dto';
import { AuthRepository } from '../repository/auth.repository';
import { UsersService } from 'src/users/service/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly repo;
    private readonly userService;
    private readonly jwtService;
    constructor(repo: AuthRepository, userService: UsersService, jwtService: JwtService);
    signPayload(payLoad: Payload): Promise<string>;
    validateUser(payload: Payload): Promise<{
        roles: any;
        id?: string;
        name: string;
        password: string;
        whatsapp: string;
        email: string;
        registration: string;
        company: string;
        status: import("../../users/entities/user.enum").UserStatus;
        type: import("../../users/entities/user.enum").UserType;
        email_verified: boolean;
        whats_verified: boolean;
        createAt: Date;
        updateAt: Date;
        deleted: boolean;
    }>;
    authUser(UserDTO: LoginUserDTO): Promise<{
        name: string;
        whatsapp: string;
        email: string;
        registration: string;
        company: string;
        status: import("../../users/entities/user.enum").UserStatus;
        type: import("../../users/entities/user.enum").UserType;
        email_verified: boolean;
        whats_verified: boolean;
        createAt: Date;
        updateAt: Date;
        deleted: boolean;
        _id: import("mongoose").Types.ObjectId;
    }>;
    findByPayload(payload: Payload): Promise<import("../../users/interfaces/user.interface").IUser>;
}
