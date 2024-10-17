import { LoginUserDTO } from '../dto/login-user.dto';
import { Model } from 'mongoose';
import { Payload } from 'src/types/payload.type';
import { User } from 'src/users/entities/user.entity';
export declare class AuthRepository {
    private readonly userModel;
    constructor(userModel: Model<User>);
    signPayload(payload: Payload): Promise<string>;
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
}
