import { UsersService } from './service/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<import("./interfaces/user.interface").IUser[]>;
    findOne(id: string): Promise<import("./interfaces/user.interface").IUser>;
    listAll(): Promise<import("./interfaces/user.interface").IUser[]>;
    verifyEmail(id: string): Promise<import("./interfaces/user.interface").IUser>;
    verifyWhats(id: string): Promise<import("./interfaces/user.interface").IUser>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./interfaces/user.interface").IUser>;
    revert(id: string): Promise<import("./interfaces/user.interface").IUser>;
    delete(id: string): Promise<boolean>;
}
