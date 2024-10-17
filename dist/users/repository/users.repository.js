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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_enum_1 = require("../entities/user.enum");
let UserRepository = class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(doc) {
        const emailExists = await this.userModel.findOne({ email: doc.email });
        if (emailExists) {
            throw new common_1.HttpException('E-mail já utilizado por outro usuário', common_1.HttpStatus.BAD_REQUEST);
        }
        if (doc.whatsapp !== undefined &&
            doc.whatsapp !== null &&
            doc.whatsapp !== '') {
            const whatsExists = await this.userModel.findOne({
                whatsapp: doc.whatsapp,
            });
            if (whatsExists) {
                throw new common_1.HttpException('Número de celular já utilizado por outro usuário', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        if (doc.registration !== undefined &&
            doc.registration !== null &&
            doc.registration !== '') {
            const registrationExists = await this.userModel.findOne({
                registration: doc.registration,
            });
            if (registrationExists) {
                throw new common_1.HttpException('Matrícula já utilizada por outro usuário', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        const createdUser = new this.userModel(doc);
        await createdUser.save();
        return this.sanitizeUser(createdUser);
    }
    sanitizeUser(user) {
        const sanitized = { ...user['_doc'] };
        delete sanitized.password;
        return sanitized;
    }
    async findAll() {
        try {
            return await this.userModel
                .find({ deleted: false, status: user_enum_1.UserStatus.Active })
                .select('-password');
        }
        catch (error) {
            console.error('Erro ao recuperar um usuário:', error);
            throw new common_1.InternalServerErrorException('Falha ao recuperar um usuário');
        }
    }
    async listAll() {
        try {
            return await this.userModel.find().select('-password');
        }
        catch (error) {
            console.error('Erro ao recuperar um usuário:', error);
            throw new common_1.InternalServerErrorException('Falha ao recuperar um usuário');
        }
    }
    async findOne(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const user = await this.userModel
                .findOne({ _id: id, deleted: false })
                .select('-password');
            if (!user) {
                throw new common_1.NotFoundException(`Usuário com o ID ${id} não encontrado!`);
            }
            return user;
        }
        catch (error) {
            console.error(`Erro ao recuperar o usuário com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao recuperar o usuário ${id}`);
        }
    }
    async findByEmail(email) {
        try {
            const user = await this.userModel.findOne({
                email: email,
                deleted: false,
            });
            if (!user) {
                throw new common_1.NotFoundException(`Login ${email} não encontrado!`);
            }
            return user;
        }
        catch (error) {
            console.error(`Erro ao recuperar o usuário com o login ${email}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao recuperar o usuário com login ${email}`);
        }
    }
    async verifyEmail(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const user = await this.userModel
                .findOne({ _id: id, deleted: false })
                .select('-password');
            if (!user) {
                throw new common_1.NotFoundException(`Usuário com o ID ${id} não encontrado!`);
            }
            return user;
        }
        catch (error) {
            console.error(`Erro ao recuperar o usuário com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao recuperar o usuário ${id}`);
        }
    }
    async verifyWhats(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const user = await this.userModel
                .findOne({ _id: id, deleted: false })
                .select('-password');
            if (!user) {
                throw new common_1.NotFoundException(`Usuário com o ID ${id} não encontrado!`);
            }
            return user;
        }
        catch (error) {
            console.error(`Erro ao recuperar o usuário com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao recuperar o usuário ${id}`);
        }
    }
    async update(id, updateUserDto) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const user = await this.userModel.findById(id);
            if (!user) {
                throw new common_1.NotFoundException(`Usuário com o ID ${id} não encontrado!`);
            }
            if (user.deleted) {
                throw new common_1.BadRequestException(`Não é possível alterar um usuário que está marcado como deletado.`);
            }
            const updatedUser = await this.userModel.findByIdAndUpdate(id, {
                name: updateUserDto.name,
                password: updateUserDto.password,
                email: updateUserDto.email,
                registration: updateUserDto.registration,
                company: updateUserDto.company,
                status: updateUserDto.status,
                type: updateUserDto.type,
                whatsapp: updateUserDto.whatsapp,
                deleted: updateUserDto.deleted,
                whats_verified: updateUserDto.whats_verified,
                email_verified: updateUserDto.email_verified,
                updateAt: new Date(),
            }, { new: true });
            if (!updatedUser) {
                throw new common_1.NotFoundException(`Usuário com o ID ${id} não encontrado!`);
            }
            return this.sanitizeUser(updatedUser);
        }
        catch (error) {
            console.error(`Erro ao alterar o usuário com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao alterar o usuário ${id}`);
        }
    }
    async revert(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const user = await this.userModel.findById(id);
            if (!user) {
                throw new common_1.NotFoundException(`Usuário com o ID ${id} não encontrado!`);
            }
            const updatedUser = await this.userModel.findByIdAndUpdate(id, {
                deleted: false,
                updateAt: new Date(),
            }, { new: true });
            if (!updatedUser) {
                throw new common_1.NotFoundException(`Usuário com o ID ${id} não encontrado!`);
            }
            return this.sanitizeUser(updatedUser);
        }
        catch (error) {
            console.error(`Erro ao alterar o usuário com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Falha ao alterar o usuário ${id}`);
        }
    }
    async delete(id) {
        try {
            if (!this.isValidObjectId(id)) {
                throw new common_1.NotFoundException(`Inválido formato de identificação: ${id}`);
            }
            const result = await this.userModel.updateOne({ _id: id }, {
                deleted: true,
                updateAt: new Date(),
            });
            if (result.modifiedCount === 0) {
                throw new common_1.NotFoundException(`Usuário com o ID ${id} não encontrado!`);
            }
            else {
                return true;
            }
        }
        catch (error) {
            console.error(`Erro ao deletar o usuário com o ID ${id}:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Falha ao deletar usuário');
        }
    }
    isValidObjectId(id) {
        return (0, mongoose_2.isValidObjectId)(id);
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserRepository);
//# sourceMappingURL=users.repository.js.map