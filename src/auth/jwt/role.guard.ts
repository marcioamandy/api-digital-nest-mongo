import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new HttpException(
        'Authorization header not found',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new HttpException('Token not found', HttpStatus.UNAUTHORIZED);
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
      }; // Garante que roles seja um array
    } catch (error) {
      console.error('Token verification error:', error);
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }

    const user = request.user;
    if (!user || !user.roles) {
      throw new HttpException(
        'User not found or roles not defined',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const hasRole = () => user.roles.some((role) => roles.includes(role));
    if (!hasRole()) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    return true;
  }
}
