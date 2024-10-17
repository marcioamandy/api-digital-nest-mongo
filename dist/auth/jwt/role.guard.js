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
exports.RoleGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
let RoleGuard = class RoleGuard {
    constructor(reflector, jwtService) {
        this.reflector = reflector;
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const roles = this.reflector.get('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new common_1.HttpException('Authorization header not found', common_1.HttpStatus.UNAUTHORIZED);
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new common_1.HttpException('Token not found', common_1.HttpStatus.UNAUTHORIZED);
        }
        try {
            const decodedToken = await this.jwtService.verifyAsync(token, {
                secret: process.env.SECRET_KEY,
            });
            const userRoles = decodedToken.role;
            console.log(userRoles);
            console.log(roles);
            console.log(decodedToken);
            request.user = {
                ...decodedToken,
                roles: Array.isArray(userRoles) ? userRoles : [userRoles],
            };
        }
        catch (error) {
            console.error('Token verification error:', error);
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.UNAUTHORIZED);
        }
        const user = request.user;
        if (!user || !user.roles) {
            throw new common_1.HttpException('User not found or roles not defined', common_1.HttpStatus.UNAUTHORIZED);
        }
        const hasRole = () => user.roles.some((role) => roles.includes(role));
        if (!hasRole()) {
            throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
        }
        return true;
    }
};
exports.RoleGuard = RoleGuard;
exports.RoleGuard = RoleGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        jwt_1.JwtService])
], RoleGuard);
//# sourceMappingURL=role.guard.js.map