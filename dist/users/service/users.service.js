"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../repository/users.repository");
const user_entity_1 = require("../entities/user.entity");
let UsersService = class UsersService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createUserDto) {
        try {
            const entity = new user_entity_1.User({
                id: null,
                name: createUserDto.name,
                password: createUserDto.password,
                whatsapp: createUserDto.whatsapp,
                email: createUserDto.email,
                registration: createUserDto.registration,
                company: createUserDto.company,
                status: createUserDto.status,
                type: createUserDto.type,
                email_verified: false,
                whats_verified: false,
                createAt: new Date(),
                updateAt: new Date(),
                deleted: false,
            });
            return await this.repo.create(entity);
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        return await this.repo.findAll();
    }
    async listAll() {
        return await this.repo.listAll();
    }
    async findOne(id) {
        return await this.repo.findOne(id);
    }
    async findByEmail(email) {
        return await this.repo.findByEmail(email);
    }
    async verifyEmail(id) {
        return await this.repo.findOne(id);
    }
    async verifyWhats(id) {
        return await this.repo.findOne(id);
    }
    async update(id, updateUserDto) {
        return await this.repo.update(id, updateUserDto);
    }
    async revert(id) {
        return await this.repo.revert(id);
    }
    async delete(id) {
        return await this.repo.delete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UserRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map